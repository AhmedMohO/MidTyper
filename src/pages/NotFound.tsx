import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		console.error(
			"404 Error: User attempted to access non-existent route:",
			location.pathname
		);
	}, [location.pathname]);

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
			<div className="max-w-md w-full mx-4 text-center space-y-8">
				<div className="relative">
					<div className="text-8xl font-bold text-primary/20 select-none">
						404
					</div>
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
							<Search className="w-8 h-8 text-primary" />
						</div>
					</div>
				</div>

				<div className="space-y-4">
					<h1 className="text-3xl font-bold text-foreground">Page Not Found</h1>
					<p className="text-muted-foreground text-lg">
						The page you're looking for doesn't exist or has been moved.
					</p>
					<div className="bg-muted/50 rounded-lg p-4 text-sm text-muted-foreground">
						<span className="font-mono">{location.pathname}</span>
					</div>
				</div>

				<div className="flex flex-col sm:flex-row gap-3 justify-center">
					<Button asChild className="flex items-center gap-2">
						<Link to="/">
							<Home className="w-4 h-4" />
							Go Home
						</Link>
					</Button>
					<Button
						variant="outline"
						onClick={() => navigate(-1)}
						className="flex items-center gap-2">
						<ArrowLeft className="w-4 h-4" />
						Go Back
					</Button>
				</div>

				<div className="flex justify-center space-x-2 opacity-30">
					<div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
					<div
						className="w-2 h-2 rounded-full bg-primary animate-pulse"
						style={{ animationDelay: "0.2s" }}></div>
					<div
						className="w-2 h-2 rounded-full bg-primary animate-pulse"
						style={{ animationDelay: "0.4s" }}></div>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
