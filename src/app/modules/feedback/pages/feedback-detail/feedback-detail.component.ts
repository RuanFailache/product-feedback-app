import { Component } from "@angular/core";

import { SuggestionCard } from "@modules/feedback/models/suggestion-card";

@Component({
	selector: "app-feedback-detail",
	templateUrl: "./feedback-detail.component.html",
	styleUrl: "./feedback-detail.component.sass",
})
export class FeedbackDetailComponent {
	mockedCard: SuggestionCard = {
		id: 1,
		title: "Add tags for solutions",
		description: "Easier to search for solutions based on a specific stack",
		tag: "Enhancement",
		upvotes: Math.floor(Math.random() * 1000),
		comments: Math.floor(Math.random() * 100),
	};

	onUpvote(isActive: boolean) {
		if (isActive) this.mockedCard.upvotes++;
		else this.mockedCard.upvotes--;
	}
}
