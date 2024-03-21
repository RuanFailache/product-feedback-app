import { Routes } from "@angular/router";

export const routes: Routes = [
	{
		path: "auth",
		loadChildren: async () => {
			const module = await import("./modules/authentication/authentication.module");
			return module.AuthenticationModule;
		}
	},
	{
		path: "feedback",
		loadChildren: async () => {
			const module = await import("./modules/feedback/feedback.module");
			return module.FeedbackModule;
		},
	},
	// {
	// 	path: "**",
	// 	component: NotFoundComponent,
	// },
];
