import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";

@Component({
	selector: "app-suggestion-card",
	templateUrl: "./suggestion-card.component.html",
	styleUrl: "./suggestion-card.component.sass",
	standalone: true,
	imports: [NgOptimizedImage],
})
export class SuggestionCardComponent {}
