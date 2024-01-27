import { Component, EventEmitter, Input, Output, signal } from "@angular/core";

import { SuggestionCard } from "@modules/feedback/models/suggestion-card";

@Component({
	selector: "app-suggestion-card",
	templateUrl: "./suggestion-card.component.html",
	styleUrl: "./suggestion-card.component.sass",
})
export class SuggestionCardComponent {
	@Input() data: SuggestionCard;

	@Output() upvote = new EventEmitter<boolean>();

	#isActive = signal(false);

	get isActive(): boolean {
		return this.#isActive();
	}

	onUpvote() {
		this.#isActive.update((value) => !value);
		this.upvote.emit(this.isActive);
	}
}
