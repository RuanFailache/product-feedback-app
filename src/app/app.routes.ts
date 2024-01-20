import { Routes } from "@angular/router";

export const routes: Routes = [
	{
		path: "auth",
		loadChildren: () =>
			import("./modules/authentication/authentication.module").then((m) => m.AuthenticationModule),
	},
	{
		path: "feedback",
		loadChildren: () => import("./modules/feedback/feedback.module").then((m) => m.FeedbackModule),
	},
	// {
	// 	path: "**",
	// 	component: NotFoundComponent,
	// },
];
