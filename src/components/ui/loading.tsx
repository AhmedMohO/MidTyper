export const LoadingSpinner = () => (
	<div className="min-h-screen bg-background flex items-center justify-center">
		<div className="flex flex-col items-center gap-6">
			<div className="relative">
				<div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
				<div
					className="absolute top-2 left-2 w-12 h-12 border-4 border-transparent border-t-secondary rounded-full animate-spin"
					style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
				/>
			</div>
			<div className="text-center space-y-2">
				<h3 className="text-lg font-semibold text-foreground">Loading...</h3>
				<p className="text-sm text-muted-foreground">
					Please wait while we prepare your content
				</p>
			</div>
		</div>
	</div>
);

export const LoadingSkeleton = () => (
	<div className="min-h-screen bg-background">
		<div className="container mx-auto px-4 py-8">
			<div className="space-y-8">
				<div className="flex items-center gap-4">
					<div className="h-12 w-12 rounded-full loading-skeleton" />
					<div className="h-6 w-32 loading-skeleton" />
				</div>
				<div className="space-y-4">
					<div className="h-12 w-3/4 loading-skeleton" />
					<div className="h-4 w-full loading-skeleton" />
					<div className="h-4 w-2/3 loading-skeleton" />
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{Array.from({ length: 6 }).map((_, i) => (
						<div key={i} className="space-y-3">
							<div className="h-32 w-full rounded-lg loading-skeleton" />
							<div className="h-4 w-full loading-skeleton" />
							<div className="h-4 w-3/4 loading-skeleton" />
						</div>
					))}
				</div>
			</div>
		</div>
	</div>
);
