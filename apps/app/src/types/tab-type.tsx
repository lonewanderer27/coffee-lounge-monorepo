import { FC } from "react";

export type TabType = {
  id: string;
  label: string;
  icon: string;
  target: string;
  component: FC;
};
