import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";

import { SharedModule } from "@shared/shared.module";

@Component({
	selector: "app-empty-suggestions",
	templateUrl: "./empty-suggestions.component.html",
	styleUrl: "./empty-suggestions.component.sass",
	imports: [NgOptimizedImage, SharedModule],
	standalone: true,
})
export class EmptySuggestionsComponent {}
