import { Component, EventEmitter, Input, Output } from "@angular/core";

import { SuggestionCard } from "@modules/feedback/models/suggestion-card";

@Component({
	selector: "app-suggestion-card",
	templateUrl: "./suggestion-card.component.html",
	styleUrl: "./suggestion-card.component.sass",
})
export class SuggestionCardComponent {
	@Input() data: SuggestionCard;

	@Output() upvote = new EventEmitter<boolean>();

	isActive = false;

	onUpvote() {
		this.isActive = !this.isActive;
		this.upvote.emit(this.isActive);
	}
}
