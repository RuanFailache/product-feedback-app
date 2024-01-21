import { CommonModule, NgOptimizedImage } from "@angular/common";
import { NgModule } from "@angular/core";
import { SvgIconComponent } from "@ngneat/svg-icon";

import { ButtonComponent } from "./components/button/button.component";
import { DrawerComponent } from "./components/drawer/drawer.component";
import { DropdownMenuComponent } from "./components/dropdown-menu/dropdown-menu.component";

const Dependencies = [SvgIconComponent, NgOptimizedImage];

const Components = [ButtonComponent, DropdownMenuComponent, DrawerComponent];

@NgModule({
	imports: [CommonModule, ...Dependencies],
	declarations: Components,
	exports: [...Components, ...Dependencies],
})
export class SharedModule {}
