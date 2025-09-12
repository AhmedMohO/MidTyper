import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";

const PaymentMethods = () => {
	const { t } = useLanguage();

	const paymentMethods = [
		{
			key: "vodaCash",
			imageUrl:
				"https://play-lh.googleusercontent.com/Pv1p8v-KJq4Z_LLOjQjBZpK8DNJg4Zb5aNOQY7WfoiHR4Gfs165Z1TTNMThZ883Yfg",
		},
		{
			key: "insta",
			imageUrl:
				"https://cdn.prod.website-files.com/64c7f4cbdcc768b8275308ea/65a7a1ee0fb200379b7133e3_New%20Vodafone%20payment%20method.png",
		},
		{
			key: "bank",
			imageUrl:
				"https://images.seeklogo.com/logo-png/45/1/saudi-national-bank-logo-png_seeklogo-451529.png",
		},
	];

	return (
		<section id="payment" className="py-20">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
						{t("payment.title")}
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						{t("payment.subtitle")}
					</p>
				</div>

				<motion.div
					className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto"
					variants={{
						hidden: {},
						show: { transition: { staggerChildren: 0.1 } },
					}}
					initial="hidden"
					animate="show">
					{paymentMethods.map((method, index) => {
						return (
							<motion.div
								key={method.key}
								variants={{
									hidden: { opacity: 0, y: 16 },
									show: {
										opacity: 1,
										y: 0,
										transition: { duration: 0.4, ease: "easeOut" },
									},
								}}>
								<Card className="group hover:shadow-medium transition-smooth border-0 shadow-soft card-gradient hover:scale-105 text-center">
									<CardHeader>
										<div className="mb-4 flex justify-center">
											<div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-smooth">
												<img src={method.imageUrl} alt={method.key} />
											</div>
										</div>
										<CardTitle className="text-lg group-hover:text-primary transition-smooth">
											{t(`payment.${method.key}.title`)}
										</CardTitle>
									</CardHeader>
								</Card>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
};

export default PaymentMethods;
