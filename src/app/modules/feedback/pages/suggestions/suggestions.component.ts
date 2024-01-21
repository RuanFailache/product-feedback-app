import { Component } from "@angular/core";

import { DropdownItem } from "@shared/models/dropdown-item";

import { OrderSuggestionBy } from "@modules/feedback/enums/order-suggestion-by";

import { RoadmapListItem } from "../../models/roadmap-list-item";
import { SuggestionCard } from "../../models/suggestion-card";

function randomInt(number: number) {
	return Math.floor(Math.random() * number);
}

const ALL_SUGGESTIONS_FILTERED = "All";

@Component({
	selector: "app-suggestions",
	templateUrl: "./suggestions.component.html",
	styleUrl: "./suggestions.component.sass",
})
export class SuggestionsComponent {
	statusList: RoadmapListItem[] = [
		{ color: "#F49F85", label: "Planned", amount: 2 },
		{ color: "#AD1FEA", label: "In-Progress", amount: 3 },
		{ color: "#62BCFA", label: "Live", amount: 1 },
	];

	mockedTags: string[] = ["UI", "UX", "Enhancement", "Bug", "Feature"];

	mockedCards: SuggestionCard[] = new Array(10).fill("").map(() => ({
		title: "Add tags for solutions",
		description: "Easier to search for solutions based on a specific stack",
		tag: this.mockedTags[randomInt(5)],
		upvotes: randomInt(1000),
		comments: randomInt(100),
	}));

	orderBy: ValueOf<typeof OrderSuggestionBy> = OrderSuggestionBy.MOST_UPVOTES;

	isDrawerActive: boolean = false;

	selectedTag: string = ALL_SUGGESTIONS_FILTERED;

	get orderOptions(): DropdownItem<ValueOf<typeof OrderSuggestionBy>>[] {
		return Object.values(OrderSuggestionBy).map((value) => ({
			label: value,
			value,
		}));
	}

	get tags() {
		return [ALL_SUGGESTIONS_FILTERED, ...this.mockedTags];
	}

	get cards() {
		const cards = this.#filterSuggestionsByTag(this.mockedCards);
		return this.#sortSuggestionsByOrder(cards);
	}

	onChangeSuggestionsOrderBy(orderBy: ValueOf<typeof OrderSuggestionBy>) {
		this.orderBy = orderBy;
	}

	onToggleDrawer() {
		this.isDrawerActive = !this.isDrawerActive;
	}

	onChangeSelectedTag(tag: string) {
		this.selectedTag = tag;
	}

	onUpvote(suggestion: SuggestionCard, isActive: boolean) {
		if (isActive) suggestion.upvotes++;
		else suggestion.upvotes--;
	}

	#filterSuggestionsByTag(suggestions: SuggestionCard[]) {
		if (this.selectedTag === ALL_SUGGESTIONS_FILTERED) return suggestions;
		return suggestions.filter((card) => card.tag === this.selectedTag);
	}

	#sortSuggestionsByOrder(suggestions: SuggestionCard[]) {
		return suggestions.sort((previous, current) => {
			switch (this.orderBy) {
				case OrderSuggestionBy.LEAST_COMMENTS:
					return previous.comments - current.comments;

				case OrderSuggestionBy.LEAST_UPVOTES:
					return previous.upvotes - current.upvotes;

				case OrderSuggestionBy.MOST_COMMENTS:
					return current.comments - previous.comments;

				case OrderSuggestionBy.MOST_UPVOTES:
					return current.upvotes - previous.upvotes;
			}
		});
	}
}
