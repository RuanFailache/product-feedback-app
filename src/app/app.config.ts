import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideSvgIconsConfig } from "@ngneat/svg-icon";

import { routes } from "./app.routes";
import { baseIcons } from "./svg/base";
import { illustrationsIcons } from "./svg/illustrations";

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideSvgIconsConfig({
			sizes: {
				xxs: "4px",
				xs: "8px",
				sm: "12px",
				md: "16px",
				lg: "20px",
				xl: "24px",
				xxl: "32px",
			},
			defaultSize: "md",
			icons: [...baseIcons, ...illustrationsIcons],
		}),
	],
};
