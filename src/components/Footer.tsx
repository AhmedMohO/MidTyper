import { useLanguage } from "@/hooks/useLanguage";
import { BookOpen, Mail, MessageCircle, Phone } from "lucide-react";

const Footer = () => {
	const { t, isRTL } = useLanguage();

	const footerLinks = [
		{ key: "services", href: "#services" },
		{ key: "about", href: "#about" },
		{ key: "contact", href: "#contact" },
		{ key: "privacy", href: "#" },
		{ key: "terms", href: "#" },
	];

	return (
		<footer className="bg-background border-t border-border">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="md:col-span-2">
						<div className="flex items-center gap-2 mb-4">
							<div className="bg-primary rounded-lg p-2">
								<BookOpen className="h-6 w-6 text-primary-foreground" />
							</div>
							<span className="text-xl font-bold text-gradient">
								{isRTL ? "ميدتايبر" : "MidTyper"}
							</span>
						</div>
						<p className="text-muted-foreground leading-relaxed max-w-md">
							{t("footer.description")}
						</p>
					</div>

					<div>
						<h3 className="font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							{footerLinks.map((link) => (
								<li key={link.key}>
									<a
										href={link.href}
										className="text-muted-foreground hover:text-primary transition-smooth">
										{t(`footer.links.${link.key}`)}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="font-semibold mb-4">{t("footer.contact.title")}</h3>
						<div className="space-y-3">
							<div className="flex items-center gap-2">
								<Mail className="h-4 w-4 text-primary" />
								<span className="text-muted-foreground text-sm ltr-content">
									{t("footer.contact.email")}
								</span>
							</div>
							<div className="flex items-center gap-2">
								<MessageCircle className="h-4 w-4 text-primary" />
								<a
									href="api.whatsapp.com/send/?phone=%2B201120311258&"
									className="text-muted-foreground hover:text-primary text-sm ltr-content">
									+201120311258
								</a>
							</div>
							<div className="flex items-center gap-2">
								<MessageCircle className="h-4 w-4 text-primary" />
								<a
									href="api.whatsapp.com/send/?phone=%2B201063157070&"
									className="text-muted-foreground hover:text-primary text-sm ltr-content">
									+201063157070
								</a>
							</div>
							<div className="flex items-center gap-2">
								<MessageCircle className="h-4 w-4 text-primary" />
								<a
									href="api.whatsapp.com/send/?phone=%2B201018999090&"
									className="text-muted-foreground hover:text-primary text-sm ltr-content">
									+201018999090
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="border-t border-border mt-8 pt-8 text-center">
					<p className="text-muted-foreground text-sm">
						{t("footer.copyright")}
					</p>
					<p className="text-muted-foreground text-sm">{t("footer.creator")}</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
