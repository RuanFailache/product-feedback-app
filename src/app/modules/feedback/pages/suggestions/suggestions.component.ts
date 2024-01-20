import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";

import { SharedModule } from "@shared/shared.module";

import { SuggestionCardData } from "./components/suggestion-card/suggestion-card.component";
import { SuggestionsModule } from "./suggestions.module";

@Component({
	selector: "app-suggestions",
	templateUrl: "./suggestions.component.html",
	styleUrl: "./suggestions.component.sass",
	standalone: true,
	imports: [NgOptimizedImage, SharedModule, SuggestionsModule],
})
export class SuggestionsComponent {
	cards: SuggestionCardData[] = new Array<SuggestionCardData>(8).fill({
		title: "Add tags for solutions",
		description: "Easier to search for solutions based on a specific stack",
		tag: "Enhancement",
		upvote: 112,
		comments: 2,
	});
}
