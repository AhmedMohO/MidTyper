import { useEffect, useState, useCallback, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
	end: number;
	duration?: number;
	suffix?: string;
}

export const AnimatedCounter = ({
	end,
	duration = 2,
	suffix = "",
}: AnimatedCounterProps) => {
	const [count, setCount] = useState(0);
	const ref = useRef(null);
	const animationRef = useRef<number>();
	const isInView = useInView(ref, { once: true });

	const animate = useCallback(
		(timestamp: number, startTime: number) => {
			const progress = (timestamp - startTime) / (duration * 1000);

			if (progress < 1) {
				setCount(Math.floor(end * progress));
				animationRef.current = requestAnimationFrame((ts) =>
					animate(ts, startTime)
				);
			} else {
				setCount(end);
			}
		},
		[end, duration]
	);

	useEffect(() => {
		if (isInView) {
			const startTime = performance.now();
			animationRef.current = requestAnimationFrame((timestamp) =>
				animate(timestamp, startTime)
			);
		}

		return () => {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
		};
	}, [isInView, animate]);

	return (
		<motion.span
			ref={ref}
			initial={{ opacity: 0 }}
			animate={{ opacity: isInView ? 1 : 0 }}
			className="font-bold text-2xl text-primary">
			{count.toLocaleString()}
			{suffix}
		</motion.span>
	);
};
