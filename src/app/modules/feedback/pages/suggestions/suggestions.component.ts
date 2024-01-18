import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";

import { SharedModule } from "@shared/shared.module";

import { EmptySuggestionsComponent } from "./components/empty-suggestions/empty-suggestions.component";
import { SuggestionCardComponent, SuggestionCardData } from "./components/suggestion-card/suggestion-card.component";

@Component({
	selector: "app-suggestions",
	standalone: true,
	imports: [NgOptimizedImage, EmptySuggestionsComponent, SharedModule, SuggestionCardComponent],
	templateUrl: "./suggestions.component.html",
	styleUrl: "./suggestions.component.sass",
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
