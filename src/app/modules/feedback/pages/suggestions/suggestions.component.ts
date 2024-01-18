import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";

import { SharedModule } from "@shared/shared.module";

import { EmptySuggestionsComponent } from "@modules/feedback/pages/suggestions/components/empty-suggestions/empty-suggestions.component";
import { SuggestionCardComponent } from "@modules/feedback/pages/suggestions/components/suggestion-card/suggestion-card.component";

@Component({
	selector: "app-suggestions",
	standalone: true,
	imports: [NgOptimizedImage, EmptySuggestionsComponent, SharedModule, SuggestionCardComponent],
	templateUrl: "./suggestions.component.html",
	styleUrl: "./suggestions.component.sass",
})
export class SuggestionsComponent {
	cards: string[] = new Array(8).fill("");
}
