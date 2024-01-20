import { TestBed } from "@angular/core/testing";

import { OrderSuggestionByService } from "./order-suggestion-by.service";

describe("OrderSuggestionByService", () => {
	let service: OrderSuggestionByService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(OrderSuggestionByService);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});
});
