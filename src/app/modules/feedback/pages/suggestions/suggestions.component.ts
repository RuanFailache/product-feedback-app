import { Component, OnInit } from "@angular/core";

import { DropdownItem } from "@shared/models/dropdown-item";

import { SuggestionCard } from "../../models/suggestion-card";
import {
	OrderSuggestionBy,
	OrderSuggestionByService,
	ValueOfOrderSuggestionBy,
} from "../../services/order-suggestion-by/order-suggestion-by.service";

@Component({
	selector: "app-suggestions",
	templateUrl: "./suggestions.component.html",
	styleUrl: "./suggestions.component.sass",
})
export class SuggestionsComponent implements OnInit {
	mockedCards: SuggestionCard[] = new Array(8).fill("").map(() => ({
		title: "Add tags for solutions",
		description: "Easier to search for solutions based on a specific stack",
		tag: "Enhancement",
		upvotes: Math.ceil(Math.random() * 1000),
		comments: Math.ceil(Math.random() * 100),
	}));

	orderBy: ValueOfOrderSuggestionBy;

	constructor(private orderSuggestionsByService: OrderSuggestionByService) {}

	get orderOptions(): DropdownItem<ValueOfOrderSuggestionBy>[] {
		return Object.values(OrderSuggestionBy).map((value) => ({
			label: value,
			value,
		}));
	}

	get cards() {
		return this.orderSuggestionsByService.sort(this.mockedCards);
	}

	ngOnInit(): void {
		this.orderSuggestionsByService.getOrderBy().subscribe((orderBy) => {
			this.orderBy = orderBy;
		});
	}

	onChangeSuggestionsOrderBy(orderBy: ValueOfOrderSuggestionBy) {
		this.orderSuggestionsByService.setOrderBy(orderBy);
	}
}
