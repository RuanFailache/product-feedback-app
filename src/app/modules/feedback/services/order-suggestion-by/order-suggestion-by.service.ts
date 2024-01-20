import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { ValueOf } from "@shared/types/value-of";

import { SuggestionCard } from "@modules/feedback/models/SuggestionCard";

export const OrderSuggestionBy = {
	LEAST_COMMENTS: "Least Comments",
	LEAST_UPVOTES: "Least Upvotes",
	MOST_COMMENTS: "Most Comments",
	MOST_UPVOTES: "Most Upvotes",
} as const;

export type ValueOfOrderSuggestionBy = ValueOf<typeof OrderSuggestionBy>;

@Injectable()
export class OrderSuggestionByService {
	#orderBy = new BehaviorSubject<ValueOfOrderSuggestionBy>(OrderSuggestionBy.MOST_UPVOTES);

	getOrderBy() {
		return this.#orderBy.asObservable();
	}

	setOrderBy(orderBy: ValueOfOrderSuggestionBy) {
		this.#orderBy.next(orderBy);
	}

	sort(suggestions: SuggestionCard[]): SuggestionCard[] {
		return suggestions.sort((previous, current) => {
			switch (this.#orderBy.value) {
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
