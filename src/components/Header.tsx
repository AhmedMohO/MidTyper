import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { DarkModeToggle } from "./DarkModeToggle";
import { useLanguage } from "@/hooks/useLanguage";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Menu, X, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { t, isRTL } = useLanguage();
	const activeSection = useActiveSection();

	const navItems = [
		{ key: "home", href: "#home" },
		{ key: "services", href: "#services" },
		{ key: "about", href: "#about" },
		{ key: "contact", href: "#contact" },
	];

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			requestAnimationFrame(() => {
				element.scrollIntoView({ behavior: "smooth" });
			});
		}
		setIsMenuOpen(false);
	};

	return (
		<motion.header
			className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50 transition-smooth"
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}>
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<Link to="/" className="flex items-center gap-2">
						<div className="bg-primary rounded-lg p-2">
							<BookOpen className="h-6 w-6 text-primary-foreground" />
						</div>
						<span className="text-xl font-bold text-gradient">
							{isRTL ? "ميدتايبر" : "MidTyper"}
						</span>
					</Link>

					<nav className="hidden md:flex items-center gap-8">
						{navItems.map((item) => (
							<button
								key={item.key}
								onClick={() => scrollToSection(item.href)}
								className={`text-foreground cursor-pointer hover:text-primary transition-smooth relative group ${
									activeSection === item.key.replace("#", "")
										? "text-primary"
										: ""
								}`}>
								{t(`nav.${item.key}`)}
								<span
									className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
										activeSection === item.key.replace("#", "")
											? "w-full"
											: "w-0 group-hover:w-full"
									}`}
								/>
							</button>
						))}
					</nav>

					<div className="hidden md:flex items-center gap-4">
						<DarkModeToggle />
						<LanguageSwitcher />
						<Link to="/contact-info">
							<Button className="shadow-soft cursor-pointer hover:shadow-medium transition-smooth">
								{t("nav.getStarted")}
							</Button>
						</Link>
					</div>

					<div className="md:hidden flex items-center gap-2">
						<DarkModeToggle />
						<LanguageSwitcher />
						<Button
							className="cursor-pointer"
							variant="ghost"
							size="icon"
							onClick={() => setIsMenuOpen(!isMenuOpen)}>
							{isMenuOpen ? (
								<X className="h-5 w-5" />
							) : (
								<Menu className="h-5 w-5" />
							)}
						</Button>
					</div>
				</div>

				{isMenuOpen && (
					<motion.div
						className="md:hidden py-4 border-t border-border"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						transition={{ duration: 0.3 }}>
						<nav className="flex flex-col gap-4">
							{navItems.map((item) => (
								<button
									key={item.key}
									onClick={() => scrollToSection(item.href)}
									className={`text-foreground cursor-pointer hover:text-primary transition-smooth py-2 text-left ${
										activeSection === item.key.replace("#", "")
											? "text-primary"
											: ""
									}`}>
									{t(`nav.${item.key}`)}
								</button>
							))}
							<Link to="/contact-info">
								<Button className="mt-4 cursor-pointer shadow-soft w-full">
									{t("nav.getStarted")}
								</Button>
							</Link>
						</nav>
					</motion.div>
				)}
			</div>
		</motion.header>
	);
};

export default Header;
