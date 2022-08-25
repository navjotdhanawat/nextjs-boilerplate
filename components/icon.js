import * as icons from "react-icons/fa";
import { createElement } from "react";

export default function Icon({ iconName, ...props }) {
  const icon = icons[iconName];
  return createElement(icon, { ...props }, null);
}
