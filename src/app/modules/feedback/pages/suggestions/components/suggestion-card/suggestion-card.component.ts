import { Component, Input } from "@angular/core";

export interface SuggestionCardData {
	title: string;
	description: string;
	tag: string;
	upvote: number;
	comments: number;
}

@Component({
	selector: "app-suggestion-card",
	templateUrl: "./suggestion-card.component.html",
	styleUrl: "./suggestion-card.component.sass",
})
export class SuggestionCardComponent {
	@Input() data: SuggestionCardData;
}
