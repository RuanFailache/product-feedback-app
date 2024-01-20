import { Component, Input } from "@angular/core";

import { SuggestionCard } from "@modules/feedback/models/SuggestionCard";

@Component({
	selector: "app-suggestion-card",
	templateUrl: "./suggestion-card.component.html",
	styleUrl: "./suggestion-card.component.sass",
})
export class SuggestionCardComponent {
	@Input() data: SuggestionCard;
}
