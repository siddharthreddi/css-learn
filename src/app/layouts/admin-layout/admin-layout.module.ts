import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminLayoutRoutes } from "./admin-layout.routing";
import { TypesComponent } from "../../types/types.component";
import { SelectorsComponent } from "../../selectors/selectors.component";
import { ColorBackgroundComponent } from "../../color-background/color-background.component";
import { ColorsRgbHexHslComponent } from "../../colors-rgb-hex-hsl/colors-rgb-hex-hsl.component";
import { BorderComponent } from "../../border/border.component";
import { MarginsPaddingComponent } from "../../margins-padding/margins-padding.component";
import { HeightWidthComponent } from "../../height-width/height-width.component";
import { CssBoxModelComponent } from "../../css-box-model/css-box-model.component";
import { TextFontComponent } from "../../text-font/text-font.component";
import { OverflowComponent } from "../../overflow/overflow.component";
import { DisplayComponent } from "../../display/display.component";
import { PositionComponent } from "../../position/position.component";
import { FloatAlignComponent } from "../../float-align/float-align.component";
import { OpacityComponent } from "../../opacity/opacity.component";
import { BorderRadiusComponent } from "../../border-radius/border-radius.component";
import { ShadowComponent } from "../../shadow/shadow.component";
import { TransformationsComponent } from "../../transformations/transformations.component";
import { TransitionsAnimationsComponent } from "../../transitions-animations/transitions-animations.component";
import { ImagesComponent } from "../../images/images.component";
import { GridComponent } from "../../grid/grid.component";
import { CssScssSassComponent } from "../../css-scss-sass/css-scss-sass.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MatGridListModule } from "@angular/material/grid-list";
import { DivSpanComponent } from "../../div-span/div-span.component";
import { MatCardModule } from "@angular/material/card";
import { FlexComponent } from "../../flex/flex.component";
import { FlexGridComponent } from "../../flex-grid/flex-grid.component";

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
} from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatTabsModule,
    MatTooltipModule,
  ],
  declarations: [
    DivSpanComponent,
    TypesComponent,
    SelectorsComponent,
    ColorBackgroundComponent,
    ColorsRgbHexHslComponent,
    BorderComponent,
    MarginsPaddingComponent,
    HeightWidthComponent,
    FlexGridComponent,
    CssBoxModelComponent,
    TextFontComponent,
    OverflowComponent,
    DisplayComponent,
    PositionComponent,
    FloatAlignComponent,
    OpacityComponent,
    BorderRadiusComponent,
    ShadowComponent,
    TransformationsComponent,
    TransitionsAnimationsComponent,
    ImagesComponent,
    GridComponent,
    CssScssSassComponent,
    FlexComponent,
  ],
})
export class AdminLayoutModule {}
