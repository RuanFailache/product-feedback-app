import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "@shared/shared.module";

import { CreateFeedbackComponent } from "@modules/feedback/pages/create-feedback/create-feedback.component";
import { EditFeedbackComponent } from "@modules/feedback/pages/edit-feedback/edit-feedback.component";
import { FeedbackDetailComponent } from "@modules/feedback/pages/feedback-detail/feedback-detail.component";
import { RoadmapComponent } from "@modules/feedback/pages/roadmap/roadmap.component";
import { SuggestionsComponent } from "@modules/feedback/pages/suggestions/suggestions.component";

import { EmptySuggestionsComponent } from "./components/empty-suggestions/empty-suggestions.component";
import { SuggestionCardComponent } from "./components/suggestion-card/suggestion-card.component";
import { FeedbackRoutingModule } from "./feedback-routing.module";
import { OrderSuggestionByService } from "./services/order-suggestion-by/order-suggestion-by.service";

const Components = [EmptySuggestionsComponent, SuggestionCardComponent];

const Pages = [
	SuggestionsComponent,
	RoadmapComponent,
	FeedbackDetailComponent,
	EditFeedbackComponent,
	CreateFeedbackComponent,
];

@NgModule({
	imports: [CommonModule, FeedbackRoutingModule, SharedModule],
	providers: [OrderSuggestionByService],
	declarations: [...Components, ...Pages],
})
export class FeedbackModule {}
