import { Routes } from "@angular/router";

import { NotFoundComponent } from "@shared/pages/not-found/not-found.component";

export const routes: Routes = [
	{
		path: "auth",
		loadChildren: () => import("./modules/authentication/authentication.module").then((m) => m.AuthenticationModule),
	},
	{
		path: "feedback",
		loadChildren: () => import("./modules/feedback/feedback.module").then((m) => m.FeedbackModule),
	},
	{
		path: "**",
		component: NotFoundComponent,
	},
];
