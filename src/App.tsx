import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { lazy, Suspense } from "react";
import { LoadingSpinner } from "@/components/ui/loading";
import { RootLayout } from "@/components/RootLayout";
import Index from "./pages/Index";

const ContactInfo = lazy(() => import("./pages/ContactInfo"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: (
			<Suspense fallback={<LoadingSpinner />}>
				<ErrorPage />
			</Suspense>
		),
		children: [
			{
				index: true,
				element: <Index />,
			},
			{
				path: "contact-info",
				element: (
					<Suspense fallback={<LoadingSpinner />}>
						<ContactInfo />
					</Suspense>
				),
			},
		],
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
	<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
		<RouterProvider router={router} />
	</ThemeProvider>
);

export default App;
