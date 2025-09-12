import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { AnimatedCounter } from "./AnimatedCounter";
import { motion } from "framer-motion";
import { Award, Shield, Clock, HeadphonesIcon } from "lucide-react";

const About = () => {
	const { t } = useLanguage();

	const features = [
		{
			key: "quality",
			icon: Award,
			color: "text-yellow-600",
		},
		{
			key: "plagiarism",
			icon: Shield,
			color: "text-green-600",
		},
		{
			key: "support",
			icon: HeadphonesIcon,
			color: "text-blue-600",
		},
		{
			key: "delivery",
			icon: Clock,
			color: "text-purple-600",
		},
	];

	const stats = [
		{ value: 500, suffix: "+", label: "Completed Projects" },
		{ value: 98, suffix: "%", label: "Client Satisfaction" },
		{ value: 50, suffix: "+", label: "Expert Writers" },
		{ value: 24, suffix: "/7", label: "Customer Support" },
	];

	return (
		<section id="about" className="py-20">
			<div className="container mx-auto px-4">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}>
					<h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
						{t("about.title")}
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						{t("about.subtitle")}
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
					{features.map((feature, index) => {
						const Icon = feature.icon;
						return (
							<motion.div
								key={feature.key}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								whileHover={{ y: -5 }}>
								<Card className="group text-center hover:shadow-medium transition-smooth border-0 shadow-soft h-full">
									<CardHeader>
										<div className="mb-4 flex justify-center">
											<motion.div
												className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth"
												whileHover={{ scale: 1.1 }}
												transition={{ type: "spring", stiffness: 300 }}>
												<Icon className={`h-10 w-10 ${feature.color}`} />
											</motion.div>
										</div>
										<CardTitle className="text-xl group-hover:text-primary transition-smooth">
											{t(`about.${feature.key}.title`)}
										</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-muted-foreground leading-relaxed">
											{t(`about.${feature.key}.description`)}
										</p>
									</CardContent>
								</Card>
							</motion.div>
						);
					})}
				</div>

				<motion.div
					className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}>
					{stats.map((stat, index) => (
						<div key={index} className="space-y-2">
							<div className="text-3xl md:text-4xl font-bold text-primary">
								<AnimatedCounter end={stat.value} suffix={stat.suffix} />
							</div>
							<div className="text-muted-foreground">{stat.label}</div>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default About;
