import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { SharedModule } from "@shared/shared.module";

import { FeedbackModule } from "@modules/feedback/feedback.module";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [CommonModule, RouterOutlet, SharedModule, FeedbackModule],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.sass",
})
export class AppComponent {
	title = "product-feedback-app";
}
