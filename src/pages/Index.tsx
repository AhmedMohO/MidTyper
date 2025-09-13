import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import PaymentMethods from "@/components/PaymentMethods";

const Index = () => {
	return (
		<div className="min-h-screen">
			<Header />
			<main>
				<Hero />
				<Services />
				<About />
				<Contact />
				<PaymentMethods />
			</main>
			<Footer />
		</div>
	);
};

export default Index;
