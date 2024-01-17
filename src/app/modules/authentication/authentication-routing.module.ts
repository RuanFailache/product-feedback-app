import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

import { RecoverPasswordComponent } from "@modules/authentication/pages/recover-password/recover-password.component";
import { ResetPasswordComponent } from "@modules/authentication/pages/reset-password/reset-password.component";
import { SignInComponent } from "@modules/authentication/pages/sign-in/sign-in.component";
import { SignUpComponent } from "@modules/authentication/pages/sign-up/sign-up.component";

const routes: Route[] = [
	{
		path: "recover-password",
		component: RecoverPasswordComponent,
	},
	{
		path: "reset-password",
		component: ResetPasswordComponent,
	},
	{
		path: "sign-in",
		component: SignInComponent,
	},
	{
		path: "sign-up",
		component: SignUpComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
