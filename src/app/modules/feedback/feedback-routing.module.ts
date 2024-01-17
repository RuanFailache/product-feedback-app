import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

import { CreateFeedbackComponent } from "./pages/create-feedback/create-feedback.component";
import { EditFeedbackComponent } from "./pages/edit-feedback/edit-feedback.component";
import { FeedbackDetailComponent } from "./pages/feedback-detail/feedback-detail.component";
import { RoadmapComponent } from "./pages/roadmap/roadmap.component";
import { SuggestionsComponent } from "./pages/suggestions/suggestions.component";

const routes: Route[] = [
	{
		path: "",
		component: SuggestionsComponent,
	},
	{
		path: "details",
		component: FeedbackDetailComponent,
	},
	{
		path: "add",
		component: CreateFeedbackComponent,
	},
	{
		path: "edit",
		component: EditFeedbackComponent,
	},
	{
		path: "roadmap",
		component: RoadmapComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class FeedbackRoutingModule {}
