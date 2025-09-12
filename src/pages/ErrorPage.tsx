import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
	const error = useRouteError() as Error;

	return (
		<div className="min-h-screen flex items-center justify-center bg-background">
			<div className="text-center space-y-4">
				<h1 className="text-4xl font-bold text-foreground">Oops!</h1>
				<p className="text-muted-foreground">Something went wrong.</p>
				<details className="text-sm text-muted-foreground">
					<summary className="cursor-pointer">Error details</summary>
					<pre className="mt-2 text-left bg-muted p-4 rounded">
						{error?.message || "Unknown error occurred"}
					</pre>
				</details>
				<Link to={"/"}>
					<Button variant="outline" className="flex items-center gap-2">
						<HomeIcon className="w-4 h-4" />
						Go Back
					</Button>
				</Link>
			</div>
		</div>
	);
}

export default ErrorPage;
