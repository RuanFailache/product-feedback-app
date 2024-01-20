import { CommonModule, NgOptimizedImage } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "@shared/shared.module";

import { EmptySuggestionsComponent } from "@modules/feedback/pages/suggestions/components/empty-suggestions/empty-suggestions.component";
import { SuggestionCardComponent } from "@modules/feedback/pages/suggestions/components/suggestion-card/suggestion-card.component";

@NgModule({
	imports: [CommonModule, SharedModule, NgOptimizedImage],
	declarations: [EmptySuggestionsComponent, SuggestionCardComponent],
	exports: [EmptySuggestionsComponent, SuggestionCardComponent],
})
export class SuggestionsModule {}
