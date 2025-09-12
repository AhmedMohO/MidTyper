import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { AnimatedCounter } from "./AnimatedCounter";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
	FileText,
	GraduationCap,
	Presentation,
	PenTool,
	CheckCircle,
} from "lucide-react";

const Services = () => {
	const { t } = useLanguage();

	const services = [
		{
			key: "protocols",
			icon: FileText,
			color: "text-blue-600",
			price: "0,000 L.E",
		},
		{
			key: "thesis",
			icon: GraduationCap,
			color: "text-purple-600",
			price: "0,000 - 0,000 L.E",
		},
		{
			key: "assignments",
			icon: PenTool,
			color: "text-green-600",
			price: "0,000 - 0,000 L.E",
		},
		{
			key: "presentations",
			icon: Presentation,
			color: "text-orange-600",
			price: "000 L.E",
		},
	];

	const stats = [
		{ label: t("services.stats.completed"), value: 500, suffix: "+" },
		{ label: t("services.stats.clients"), value: 200, suffix: "+" },
		{ label: t("services.stats.satisfaction"), value: 98, suffix: "%" },
		{ label: t("services.stats.delivery"), value: 100, suffix: "%" },
	];

	return (
		<section id="services" className="py-20 bg-muted/30">
			<div className="container mx-auto px-4">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
						{t("services.title")}
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						{t("services.subtitle")}
					</p>
				</motion.div>

				<motion.div
					className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}>
					{stats.map((stat, index) => (
						<div key={index} className="text-center">
							<div className="text-3xl font-bold text-primary mb-2">
								<AnimatedCounter end={stat.value} suffix={stat.suffix} />
							</div>
							<p className="text-sm text-muted-foreground">{stat.label}</p>
						</div>
					))}
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{services.map((service, index) => {
						const Icon = service.icon;
						return (
							<motion.div
								key={service.key}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								whileHover={{ y: -5 }}>
								<Card className="group hover:shadow-medium transition-smooth border-0 shadow-soft card-gradient h-full flex flex-col justify-between">
									<CardHeader className="text-center">
										<div className="mb-4 flex justify-center">
											<motion.div
												className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-smooth"
												whileHover={{ scale: 1.1 }}
												transition={{ type: "spring", stiffness: 300 }}>
												<Icon className={`h-10 w-10 ${service.color}`} />
											</motion.div>
										</div>
										<CardTitle className="text-xl group-hover:text-primary transition-smooth mb-2">
											{t(`services.${service.key}.title`)}
										</CardTitle>
										<div className="text-2xl font-bold text-primary mb-4">
											{service.price}
										</div>
									</CardHeader>
									<CardContent className="space-y-4">
										<p className="text-muted-foreground leading-relaxed text-center">
											{t(`services.${service.key}.description`)}
										</p>
										<Link
											to={`/contact-info?title=${t(
												`services.${service.key}.title`
											)}&price=${service.price}`}
											className="block">
											<Button className="w-full cursor-pointer shadow-soft hover:shadow-medium transition-smooth">
												{t("services.orderNow")}
											</Button>
										</Link>
									</CardContent>
								</Card>
							</motion.div>
						);
					})}
				</div>

				<motion.div
					className="mt-12 text-center"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}>
					<div className="bg-background border border-border rounded-lg p-6 max-w-2xl mx-auto shadow-soft">
						<div className="flex items-center justify-center mb-3">
							<CheckCircle className="h-6 w-6 text-green-600 mr-2" />
							<h3 className="text-lg font-semibold">
								{t("services.guarantee.title")}
							</h3>
						</div>
						<p className="text-muted-foreground">
							{t("services.guarantee.description")}
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Services;
