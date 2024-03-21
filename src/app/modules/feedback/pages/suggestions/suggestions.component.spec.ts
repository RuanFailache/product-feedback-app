import { TestBed } from "@angular/core/testing";

import { OrderSuggestionBy } from "@modules/feedback/constants/order-suggestion-by";
import { SuggestionCard } from "@modules/feedback/models/suggestion-card";
import { SuggestionsComponent } from "@modules/feedback/pages/suggestions/suggestions.component";

describe("SuggestionsComponent", () => {
	let sut: SuggestionsComponent;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [SuggestionsComponent],
		});

		sut = TestBed.inject(SuggestionsComponent);
	});

	describe("sort cards using OrderSuggestionBy", () => {
		function getMinMaxByKey(suggestions: SuggestionCard[], key: "comments" | "upvotes") {
			const mappedSuggestions = suggestions.map((suggestion) => suggestion[key]);
			return [Math.min(...mappedSuggestions), Math.max(...mappedSuggestions)];
		}

		it("should sort cards correctly on order by least comments", () => {
			const [min, max] = getMinMaxByKey(sut.cards, "comments");

			sut.onChangeSuggestionsOrderBy(OrderSuggestionBy.LEAST_COMMENTS);

			const firstSuggestion = sut.cards[0];
			const lastSuggestion = sut.cards[sut.cards.length - 1];

			expect(firstSuggestion.comments).toBe(min);
			expect(lastSuggestion.comments).toBe(max);
		});

		it("should sort cards correctly on order by least upvotes", () => {
			const [min, max] = getMinMaxByKey(sut.cards, "upvotes");

			sut.onChangeSuggestionsOrderBy(OrderSuggestionBy.LEAST_UPVOTES);

			const firstSuggestion = sut.cards[0];
			const lastSuggestion = sut.cards[sut.cards.length - 1];

			expect(firstSuggestion.upvotes).toBe(min);
			expect(lastSuggestion.upvotes).toBe(max);
		});

		it("should sort cards correctly on order by least comments", () => {
			const [min, max] = getMinMaxByKey(sut.cards, "comments");

			sut.onChangeSuggestionsOrderBy(OrderSuggestionBy.MOST_COMMENTS);

			const firstSuggestion = sut.cards[0];
			const lastSuggestion = sut.cards[sut.cards.length - 1];

			expect(firstSuggestion.comments).toBe(max);
			expect(lastSuggestion.comments).toBe(min);
		});

		it("should sort cards correctly on order by most upvotes", () => {
			const [min, max] = getMinMaxByKey(sut.cards, "upvotes");

			sut.onChangeSuggestionsOrderBy(OrderSuggestionBy.MOST_UPVOTES);

			const firstSuggestion = sut.cards[0];
			const lastSuggestion = sut.cards[sut.cards.length - 1];

			expect(firstSuggestion.upvotes).toBe(max);
			expect(lastSuggestion.upvotes).toBe(min);
		});
	});
});
