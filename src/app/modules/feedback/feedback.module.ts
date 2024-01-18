import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "@shared/shared.module";

import { FeedbackRoutingModule } from "./feedback-routing.module";

@NgModule({
	imports: [CommonModule, FeedbackRoutingModule, SharedModule],
})
export class FeedbackModule {}
