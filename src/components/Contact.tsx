import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Copy, Phone } from "lucide-react";
const Contact = () => {
	const { t } = useLanguage();

	const contactMethods = [
		{
			key: "whatsapp",
			icon: Phone,
			value: "+201018999090",
			color: "text-green-600",
			bgColor: "bg-green-50 hover:bg-green-100",
			href: `https://wa.me/+201018999090`,
		},
		{
			key: "whatsapp",
			icon: Phone,
			value: "+201063157070",
			color: "text-green-600",
			bgColor: "bg-green-50 hover:bg-green-100",
			href: `https://wa.me/+201063157070`,
		},
		{
			key: "whatsapp",
			icon: Phone,
			value: "+201120311258",
			color: "text-green-600",
			bgColor: "bg-green-50 hover:bg-green-100",
			href: `https://wa.me/+201120311258`,
		},
	];

	const copyToClipboard = (text: string, method: string) => {
		navigator.clipboard.writeText(text).then(() => {
			toast.success(t("contactInfo.copySuccess"), {
				description: `${t(`contactInfo.${method}`)} ${text}`,
			});
		});
	};

	return (
		<section id="contact" className="py-20 bg-muted/30">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
						{t("contact.title")}
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						{t("contact.subtitle")}
					</p>
				</div>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
					variants={{
						hidden: {},
						show: { transition: { staggerChildren: 0.1 } },
					}}
					initial="hidden"
					animate="show">
					{contactMethods.map((method, index) => {
						const Icon = method.icon;
						return (
							<motion.div
								key={index}
								variants={{
									hidden: { opacity: 0, y: 16 },
									show: {
										opacity: 1,
										y: 0,
										transition: { duration: 0.4, ease: "easeOut" },
									},
								}}>
								<Card className="shadow-medium border-0 card-gradient hover:scale-105 transition-smooth">
									<CardHeader className="text-center pb-4">
										<div className="mb-4 flex justify-center">
											<div
												className={`p-4 rounded-xl ${method.bgColor} transition-colors`}>
												<Icon className={`h-8 w-8 ${method.color}`} />
											</div>
										</div>
										<CardTitle className="text-xl">
											{t(`contactInfo.${method.key}`)}
										</CardTitle>
									</CardHeader>
									<CardContent className="text-center space-y-4">
										<p className="text-muted-foreground font-mono bg-muted/30 p-3 rounded-lg">
											{method.value}
										</p>

										<div className="flex gap-2">
											<Button
												variant="outline"
												size="sm"
												className="flex-1 cursor-pointer"
												onClick={() =>
													copyToClipboard(method.value, method.key)
												}>
												<Copy className="h-4 w-4 mr-2" />
												Copy
											</Button>
											<a
												href={method.href}
												target="blank"
												className={buttonVariants({
													size: "sm",
													className:
														"flex-1 cursor-pointer shadow-soft hover:shadow-medium transition-smooth",
												})}>
												Open
											</a>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
};

export default Contact;
