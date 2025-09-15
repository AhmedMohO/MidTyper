import { useEffect, useState, useCallback, useRef } from "react";

export const useActiveSection = () => {
	const [activeSection, setActiveSection] = useState("");
	const sectionCache = useRef<Map<string, { top: number; bottom: number }>>(
		new Map()
	);
	const lastScrollY = useRef(0);
	const cacheTimeoutRef = useRef<NodeJS.Timeout>();

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

		// Check if cache is empty or stale, refresh if needed
		if (sectionCache.current.size === 0) {
			updateSectionCache();
		}

		// Use cached values to avoid forced reflow
		for (const [section, bounds] of sectionCache.current) {
			if (scrollPosition >= bounds.top && scrollPosition < bounds.bottom) {
				setActiveSection(section);
				return;
			}
		}
	}, [updateSectionCache]);

	useEffect(() => {
		if (window.matchMedia("(max-width: 767px)").matches) return;
		// Initial cache update with delay to ensure DOM is ready
		const initialUpdate = () => {
			updateSectionCache();
			handleScroll();
		};

		// Use setTimeout to ensure DOM is fully loaded
		const timeoutId = setTimeout(initialUpdate, 100);

		// Update cache on resize
		const handleResize = () => {
			// Clear any pending cache updates
			if (cacheTimeoutRef.current) {
				clearTimeout(cacheTimeoutRef.current);
			}

			// Debounce cache updates
			cacheTimeoutRef.current = setTimeout(() => {
				updateSectionCache();
				handleScroll();
			}, 150);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		window.addEventListener("resize", handleResize, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
			clearTimeout(timeoutId);
			if (cacheTimeoutRef.current) {
				clearTimeout(cacheTimeoutRef.current);
			}
		};
	}, [handleScroll, updateSectionCache]);

	return activeSection;
};
