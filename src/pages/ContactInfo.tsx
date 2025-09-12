import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { toast } from "sonner";
import { Copy, ArrowLeft, Phone } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";

const ContactInfo = () => {
	const { t, isRTL } = useLanguage();
	const [searchParams] = useSearchParams();

	const title = searchParams.get("title");
	const price = searchParams.get("price");
	console.log(title);

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
		<div className="min-h-screen bg-background">
			<header className="border-b border-border bg-background/80 backdrop-blur-md">
				<div className="container mx-auto px-4 py-4">
					<div className="flex items-center gap-4">
						<Link to="/">
							<Button
								variant="ghost"
								size="icon"
								className="hover:bg-accent cursor-pointer">
								<ArrowLeft className={`h-5 w-5 ${isRTL ? "rotate-180" : ""}`} />
							</Button>
						</Link>
						<div>
							<h1 className="text-2xl font-bold text-gradient">
								{t("contactInfo.title")}
							</h1>
							<p className="text-muted-foreground">
								{t("contactInfo.subtitle")}
							</p>
						</div>
					</div>
				</div>
			</header>

			<main className="container mx-auto px-4 py-12">
				{title && !title.includes("title") && (
					<motion.div
						className="flex flex-col gap-5 text-center mb-5"
						variants={{
							hidden: {},
							show: { transition: { staggerChildren: 0.1 } },
						}}
						initial="hidden"
						animate="show">
						<h1 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
							{title}
						</h1>
						<h3 className="text-2xl font-bold text-sky-600 mb-4">{price}</h3>
					</motion.div>
				)}
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

				<div className="mt-12 max-w-2xl mx-auto">
					<Card className="shadow-medium border-0 card-gradient text-center">
						<CardContent className="p-8">
							<h3 className="text-2xl font-bold mb-4 text-gradient">
								Quick Response Guarantee
							</h3>
							<p className="text-muted-foreground text-lg leading-relaxed">
								We respond to all inquiries within 2 hours during business
								hours. Choose your preferred contact method above and get
								started with your academic project today!
							</p>
						</CardContent>
					</Card>
				</div>
			</main>
		</div>
	);
};

export default ContactInfo;
