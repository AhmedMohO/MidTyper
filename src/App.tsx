import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { lazy, Suspense } from "react";
import { LoadingSpinner } from "@/components/ui/loading";

const Index = lazy(() => import("./pages/Index"));
const ContactInfo = lazy(() => import("./pages/ContactInfo"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Suspense fallback={<LoadingSpinner />}>
				<Index />
			</Suspense>
		),
	},
	{
		path: "/contact-info",
		element: (
			<Suspense fallback={<LoadingSpinner />}>
				<ContactInfo />
			</Suspense>
		),
	},
	{
		path: "*",
		element: (
			<Suspense fallback={<LoadingSpinner />}>
				<NotFound />
			</Suspense>
		),
	},
]);

const App = () => (
	<QueryClientProvider client={queryClient}>
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			<Toaster />
			<Sonner />
			<RouterProvider router={router} />
		</ThemeProvider>
	</QueryClientProvider>
);

export default App;
