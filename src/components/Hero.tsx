import { Button, buttonVariants } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Hero = () => {
	const { t, isRTL } = useLanguage();

	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center relative overflow-hidden">
			<div className="absolute inset-0 hero-gradient"></div>

			<div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xs animate-pulse" />
			<div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-md animate-pulse" />
			<div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-pulse" />
			<div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/30 rounded-full animate-pulse" />

			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-28 duration-600 text-white">
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
						{t("hero.title")}
					</h1>

					<p className="text-xl md:text-2xl mb-4 text-white/90">
						{t("hero.subtitle")}
					</p>

					<p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto leading-relaxed">
						{t("hero.description")}
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<Link to="/contact-info">
							<Button
								size="lg"
								className="bg-white cursor-pointer text-primary hover:bg-white/90 shadow-strong text-lg px-8 py-4 h-auto transition-smooth group">
								{t("hero.cta")}
								<ArrowRight
									className={cn(
										"h-5 w-5 transition-transform",
										isRTL
											? "group-hover:-translate-x-1"
											: "group-hover:translate-x-1"
									)}
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
							<Play className="mr-2 h-5 w-5 transition-smooth group-hover:fill-white" />
							{t("hero.ctaSecondary")}
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
