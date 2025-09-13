import { Suspense, lazy } from "react";
import { LoadingSkeleton } from "@/components/ui/loading";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const About = lazy(() => import("@/components/About"));
const Services = lazy(() => import("@/components/Services"));
const Contact = lazy(() => import("@/components/Contact"));
const PaymentMethods = lazy(() => import("@/components/PaymentMethods"));

const Index = () => {
	return (
		<div className="min-h-screen">
			<Header />
			<main>
				<Hero />
				<Suspense fallback={<LoadingSkeleton />}>
					<Services />
					<About />
					<Contact />
				</Suspense>
				<Suspense fallback={<LoadingSkeleton />}>
					<PaymentMethods />
				</Suspense>
			</main>
			<Footer />
		</div>
	);
};

export default Index;
