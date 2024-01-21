import { SuggestionCard } from "@modules/feedback/models/suggestion-card";

import { OrderSuggestionBy, OrderSuggestionByService } from "./order-suggestion-by.service";

describe("OrderSuggestionByService", () => {
	let service: OrderSuggestionByService;

	beforeEach(() => {
		service = new OrderSuggestionByService();
	});

	function mockSuggestionCard(): SuggestionCard {
		return {
			title: "",
			description: "",
			tag: "",
			upvotes: Math.ceil(Math.random() * 100),
			comments: Math.ceil(Math.random() * 100),
		};
	}

	function mockSuggestionCardList(): SuggestionCard[] {
		const amountSuggestions = Math.floor(Math.random() * 10);
		return new Array(amountSuggestions).fill(0).map(mockSuggestionCard);
	}

	function getMinMaxByKey(suggestions: SuggestionCard[], key: "comments" | "upvotes") {
		const mappedSuggestions = suggestions.map((suggestion) => suggestion[key]);
		return [Math.min(...mappedSuggestions), Math.max(...mappedSuggestions)];
	}

	it("should init with order by most upvotes", () => {
		service.getOrderBy().subscribe((orderBy) => {
			expect(orderBy).toBe(OrderSuggestionBy.MOST_UPVOTES);
		});
	});

	it("should update order by correctly", () => {
		service.setOrderBy(OrderSuggestionBy.LEAST_COMMENTS);
		service.getOrderBy().subscribe((orderBy) => {
			expect(orderBy).toBe(OrderSuggestionBy.LEAST_COMMENTS);
		});
	});

	it("should sort correctly on least comments", () => {
		const suggestions = mockSuggestionCardList();
		const [min, max] = getMinMaxByKey(suggestions, "comments");

		service.setOrderBy(OrderSuggestionBy.LEAST_COMMENTS);

		const result = service.sort(suggestions);

		const firstSuggestion = result[0];
		const lastSuggestion = result[result.length - 1];

		expect(firstSuggestion.comments).toBe(min);
		expect(lastSuggestion.comments).toBe(max);
	});

	it("should sort correctly on least upvotes", () => {
		const suggestions = mockSuggestionCardList();
		const [min, max] = getMinMaxByKey(suggestions, "upvotes");

		service.setOrderBy(OrderSuggestionBy.LEAST_UPVOTES);

		const result = service.sort(suggestions);

		const firstSuggestion = result[0];
		const lastSuggestion = result[result.length - 1];

		expect(firstSuggestion.upvotes).toBe(min);
		expect(lastSuggestion.upvotes).toBe(max);
	});

	it("should sort correctly on least comments", () => {
		const suggestions = mockSuggestionCardList();
		const [min, max] = getMinMaxByKey(suggestions, "comments");

		service.setOrderBy(OrderSuggestionBy.MOST_COMMENTS);

		const result = service.sort(suggestions);

		const firstSuggestion = result[0];
		const lastSuggestion = result[result.length - 1];

		expect(firstSuggestion.comments).toBe(max);
		expect(lastSuggestion.comments).toBe(min);
	});

	it("should sort correctly on most upvotes", () => {
		const suggestions = mockSuggestionCardList();
		const [min, max] = getMinMaxByKey(suggestions, "upvotes");

		service.setOrderBy(OrderSuggestionBy.MOST_UPVOTES);

		const result = service.sort(suggestions);

		const firstSuggestion = result[0];
		const lastSuggestion = result[result.length - 1];

		expect(firstSuggestion.upvotes).toBe(max);
		expect(lastSuggestion.upvotes).toBe(min);
	});
});
