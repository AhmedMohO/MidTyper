import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { lazy, Suspense } from "react";
import { LoadingSpinner } from "@/components/ui/loading";

const Services = lazy(() => import("@/components/Services"));
const About = lazy(() => import("@/components/About"));
const Contact = lazy(() => import("@/components/Contact"));
const PaymentMethods = lazy(() => import("@/components/PaymentMethods"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
	return (
		<div className="min-h-screen">
			<Header />
			<main>
				<Hero />
				<Suspense fallback={<LoadingSpinner />}>
					<Services />
				</Suspense>
				<Suspense fallback={<LoadingSpinner />}>
					<About />
				</Suspense>
				<Suspense fallback={<LoadingSpinner />}>
					<Contact />
				</Suspense>
				<Suspense fallback={<LoadingSpinner />}>
					<PaymentMethods />
				</Suspense>
			</main>
			<Suspense fallback={<div />}>
				<Footer />
			</Suspense>
		</div>
	);
};

export default Index;
