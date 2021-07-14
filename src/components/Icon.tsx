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
  className?: string;
};

function Icon({ icon, weight, size, color, className }: IconProps) {
  let iconClassName = "ph-" + icon;
  if (weight && weight !== "regular") {
    iconClassName += "-" + weight;
  }
  if (className) {
    iconClassName += " " + className;
  }
  const style = {
    color: color,
    fontSize: size + "px",
  };

  return <i className={iconClassName} style={style}></i>;
}

export default Icon;
