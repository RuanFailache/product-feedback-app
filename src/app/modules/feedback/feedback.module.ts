import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { FeedbackRoutingModule } from "./feedback-routing.module";

@NgModule({
	imports: [CommonModule, FeedbackRoutingModule],
})
export class FeedbackModule {}
