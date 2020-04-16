import Vue from "vue";
import "../fundamental.scss";
import "intersection-observer";
import FundamentalVue from "fundamental-vue";
import VueObserveVisibility from "vue-observe-visibility";
import VueVirtualScroller from "vue-virtual-scroller";

Vue.use(VueObserveVisibility);
Vue.use(VueVirtualScroller);
Vue.use(FundamentalVue);
