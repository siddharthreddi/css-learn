import { Component, OnInit } from "@angular/core";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: "/ways", title: "CSS Ways", icon: "", class: "" },
  { path: "/selectors", title: "CSS Selectors", icon: "", class: "" },
  {
    path: "/background-color",
    title: "CSS Backgorund-Color",
    icon: "",
    class: "",
  },
  { path: "/color-types", title: "CSS Color Types", icon: "", class: "" },
  { path: "/div-v/s-span", title: "CSS Div v/s Span", icon: "", class: "" },
  { path: "/box-model", title: "CSS Box-Model", icon: "", class: "" },
  { path: "/border", title: "CSS Border", icon: "", class: "" },
  {
    path: "/margins-v/s-padding",
    title: "CSS Margin v/s Padding",
    icon: "",
    class: "",
  },
  {
    path: "/height-v/s-width",
    title: "CSS Height v/s Width",
    icon: "",
    class: "",
  },

  { path: "/text-v/s-font", title: "CSS Text v/s Font", icon: "", class: "" },
  { path: "/overflow", title: "CSS Overflow", icon: "", class: "" },
  { path: "/display", title: "CSS Display", icon: "", class: "" },
  { path: "/position", title: "CSS Position", icon: "", class: "" },
  {
    path: "/float-v/s-align",
    title: "CSS Float v/s Align",
    icon: "",
    class: "",
  },
  { path: "/opacity", title: "CSS Opacity", icon: "", class: "" },
  { path: "/border-radius", title: "CSS Border-Radius", icon: "", class: "" },
  { path: "/shadow", title: "CSS Shadow", icon: "", class: "" },
  {
    path: "/transitions-v/s-animations",
    title: "CSS Transitions v/s Animatons",
    icon: "",
    class: "",
  },
  // { path: '/transformations', title: 'CSS Transformations', icon: '',class: '' },
  { path: "/images", title: "CSS Images", icon: "", class: "" },
  { path: "/flex", title: "CSS Flex", icon: "", class: "" },

  { path: "/grid", title: "CSS Grid", icon: "", class: "" },

  {
    path: "/conclusion_flex_v/s_grid",
    title: "Conclusion Flex v/ Grid",
    icon: "",
    class: "",
  },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
