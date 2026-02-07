import {
  cafeOutline,
  glassesOutline,
  personCircleOutline,
} from "ionicons/icons";
import { TabType } from "../types/tab-type";
import OrderPage from "../features/order/presentation/pages/order-page";
import ExplorePage from "../features/explore/presentation/pages/explore-page";
import MePage from "../features/me/presentation/pages/me-page";

export const tabs: TabType[] = [
  {
    id: "order",
    label: "Order",
    icon: cafeOutline,
    target: "/order",
    component: OrderPage,
  },
  {
    id: "explore",
    label: "Explore",
    icon: glassesOutline,
    target: "/explore",
    component: ExplorePage,
  },
  {
    id: "me",
    label: "Me",
    icon: personCircleOutline,
    target: "/me",
    component: MePage,
  },
];
