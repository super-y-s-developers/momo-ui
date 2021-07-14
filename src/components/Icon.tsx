import React from "react";

export const ICON_WEIGHTS = [
  "thin",
  "light",
  "regular",
  "bold",
  "fill",
] as const;

export type IconProps = {
  icon: string;
  weight?: typeof ICON_WEIGHTS[number];
  size?: number;
  color?: string;
};

function Icon({ icon, weight, size, color }: IconProps) {
  let className = "ph-" + icon;
  if (weight && weight !== "regular") {
    className += "-" + weight;
  }
  const style = {
    color: color,
    fontSize: size + "px",
  };

  return <i {...{ className, style }}></i>;
}

export default Icon;
