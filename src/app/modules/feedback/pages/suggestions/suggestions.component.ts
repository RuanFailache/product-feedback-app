import { Component, signal, WritableSignal } from "@angular/core";

import { DropdownItem } from "@shared/models/dropdown-item";

import { OrderSuggestionBy } from "@modules/feedback/constants/order-suggestion-by";

import { RoadmapListItem } from "../../models/roadmap-list-item";
import { SuggestionCard } from "../../models/suggestion-card";

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

	mockedCards: SuggestionCard[] = new Array(10).fill("").map((_, index) => ({
		id: index + 1,
		title: "Add tags for solutions",
		description: "Easier to search for solutions based on a specific stack",
		tag: this.mockedTags[Math.floor(Math.random() * 5)],
		upvotes: Math.floor(Math.random() * 1000),
		comments: Math.floor(Math.random() * 100),
	}));

	#orderBy: WritableSignal<ValueOf<typeof OrderSuggestionBy>> = signal(OrderSuggestionBy.MOST_UPVOTES);

	#isDrawerActive: WritableSignal<boolean> = signal(false);

	#selectedTag: WritableSignal<string> = signal(ALL_SUGGESTIONS_FILTERED);

	get orderBy(): ValueOf<typeof OrderSuggestionBy> {
		return this.#orderBy();
	}

	get isDrawerActive(): boolean {
		return this.#isDrawerActive();
	}

	get selectedTag(): string {
		return this.#selectedTag();
	}

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
		this.#orderBy.set(orderBy);
	}

	onToggleDrawer() {
		this.#isDrawerActive.update((value) => !value);
	}

	onChangeSelectedTag(tag: string) {
		this.#selectedTag.set(tag);
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
