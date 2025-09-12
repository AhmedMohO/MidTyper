import { Button, buttonVariants } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
	const { t, isRTL } = useLanguage();

	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center relative overflow-hidden">
			<div className="absolute inset-0 hero-gradient"></div>

			<motion.div
				className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xs"
				animate={{ y: [0, -10, 0] }}
				transition={{ duration: 6, repeat: Infinity }}
			/>
			<motion.div
				className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-md"
				animate={{ y: [0, 15, 0] }}
				transition={{ duration: 8, repeat: Infinity }}
			/>
			<motion.div
				className="absolute top-1/2 left-1/4 w-4 h-4 bg-white/20 rounded-full"
				animate={{ scale: [1, 1.2, 1] }}
				transition={{ duration: 4, repeat: Infinity }}
			/>
			<motion.div
				className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/30 rounded-full"
				animate={{ opacity: [0.3, 1, 0.3] }}
				transition={{ duration: 3, repeat: Infinity }}
			/>

			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-4xl mx-auto text-center text-white">
					<motion.h1
						className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}>
						{t("hero.title")}
					</motion.h1>

					<motion.p
						className="text-xl md:text-2xl mb-4 text-white/90"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}>
						{t("hero.subtitle")}
					</motion.p>

					<motion.p
						className="text-lg mb-8 text-white/80 max-w-2xl mx-auto leading-relaxed"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}>
						{t("hero.description")}
					</motion.p>

					<motion.div
						className="flex flex-col sm:flex-row gap-4 justify-center items-center"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}>
						<Link to="/contact-info">
							<Button
								size="lg"
								className="bg-white cursor-pointer text-primary hover:bg-white/90 shadow-strong text-lg px-8 py-4 h-auto transition-smooth group">
								{t("hero.cta")}
								<ArrowRight
									className={`ml-2 h-5 w-5 transition-transform group-hover:${
										isRTL ? "-translate-x-1" : "translate-x-1"
									}`}
								/>
							</Button>
						</Link>

						<a
							href="#services"
							className={buttonVariants({
								variant: "outline",
								size: "lg",
								className:
									"border-white/30 cursor-pointer text-white bg-white/10 backdrop-blur-xs text-lg px-8 py-4 h-auto transition-smooth group",
							})}>
							<Play className="mr-2 h-5 w-5" />
							{t("hero.ctaSecondary")}
						</a>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
