import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "@shared/shared.module";

import { CreateFeedbackComponent } from "@modules/feedback/pages/create-feedback/create-feedback.component";
import { EditFeedbackComponent } from "@modules/feedback/pages/edit-feedback/edit-feedback.component";
import { FeedbackDetailComponent } from "@modules/feedback/pages/feedback-detail/feedback-detail.component";
import { RoadmapComponent } from "@modules/feedback/pages/roadmap/roadmap.component";
import { SuggestionsComponent } from "@modules/feedback/pages/suggestions/suggestions.component";

import { EmptySuggestionsComponent } from "./components/empty-suggestions/empty-suggestions.component";
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { SuggestionCardComponent } from "./components/suggestion-card/suggestion-card.component";
import { FeedbackRoutingModule } from "./feedback-routing.module";

const Components = [EmptySuggestionsComponent, SuggestionCardComponent, SideBarComponent];

const Pages = [
	SuggestionsComponent,
	RoadmapComponent,
	FeedbackDetailComponent,
	EditFeedbackComponent,
	CreateFeedbackComponent,
];

@NgModule({
	imports: [CommonModule, FeedbackRoutingModule, SharedModule],
	declarations: [...Components, ...Pages],
})
export class FeedbackModule {}
