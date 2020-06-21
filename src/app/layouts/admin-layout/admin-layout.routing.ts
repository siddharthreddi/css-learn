import { Routes } from "@angular/router";
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
import { DivSpanComponent } from "../../div-span/div-span.component";
import { FlexComponent } from "../../flex/flex.component";
import { FlexGridComponent } from "../../flex-grid/flex-grid.component";

export const AdminLayoutRoutes: Routes = [
  { path: "div-v/s-span", component: DivSpanComponent },
  { path: "ways", component: TypesComponent },
  { path: "difference", component: CssScssSassComponent },
  { path: "grid", component: GridComponent },
  { path: "images", component: ImagesComponent },
  { path: "transformations", component: TransformationsComponent },
  {
    path: "transitions-v/s-animations",
    component: TransitionsAnimationsComponent,
  },
  { path: "shadow", component: ShadowComponent },
  { path: "border-radius", component: BorderRadiusComponent },
  { path: "opacity", component: OpacityComponent },
  { path: "float-v/s-align", component: FloatAlignComponent },
  { path: "position", component: PositionComponent },
  { path: "display", component: DisplayComponent },
  { path: "overflow", component: OverflowComponent },
  { path: "text-v/s-font", component: TextFontComponent },
  { path: "box-model", component: CssBoxModelComponent },
  { path: "height-v/s-width", component: HeightWidthComponent },
  { path: "margins-v/s-padding", component: MarginsPaddingComponent },
  { path: "border", component: BorderComponent },
  { path: "color-types", component: ColorsRgbHexHslComponent },
  { path: "background-color", component: ColorBackgroundComponent },
  { path: "selectors", component: SelectorsComponent },
  { path: "flex", component: FlexComponent },
  { path: "conclusion_flex_v/s_grid", component: FlexGridComponent },
];
