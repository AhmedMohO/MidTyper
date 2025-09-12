import { Outlet } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";

export function RootLayout() {
	return (
		<>
			<Outlet />
			<Sonner />
		</>
	);
}
