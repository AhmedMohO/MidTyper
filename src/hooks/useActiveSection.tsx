import { useEffect, useState, useCallback, useRef } from "react";

export const useActiveSection = () => {
	const [activeSection, setActiveSection] = useState("");
	const sectionCache = useRef<Map<string, { top: number; bottom: number }>>(
		new Map()
	);
	const lastScrollY = useRef(0);

	const updateSectionCache = useCallback(() => {
		const sections = ["home", "services", "about", "contact"];
		sectionCache.current.clear();

		sections.forEach((section) => {
			const element = document.getElementById(section);
			if (element) {
				const rect = element.getBoundingClientRect();
				const scrollTop = window.scrollY;
				sectionCache.current.set(section, {
					top: rect.top + scrollTop,
					bottom: rect.bottom + scrollTop,
				});
			}
		});
	}, []);

	const handleScroll = useCallback(() => {
		const scrollPosition = window.scrollY + 100;
		const scrollDelta = Math.abs(scrollPosition - lastScrollY.current);

		// Only update if scroll delta is significant (throttling)
		if (scrollDelta < 10) return;

		lastScrollY.current = scrollPosition;

		// Use cached values to avoid forced reflow
		for (const [section, bounds] of sectionCache.current) {
			if (scrollPosition >= bounds.top && scrollPosition < bounds.bottom) {
				setActiveSection(section);
				return;
			}
		}
	}, []);

	useEffect(() => {
		// Initial cache update
		updateSectionCache();

		// Update cache on resize
		const handleResize = () => {
			updateSectionCache();
			handleScroll();
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		window.addEventListener("resize", handleResize, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
		};
	}, [handleScroll, updateSectionCache]);

	return activeSection;
};
