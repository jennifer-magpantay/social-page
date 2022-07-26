import { ButtonHTMLAttributes, ReactElement } from "react";
import { IconProps } from "phosphor-react";

import "../../styles/components/_button-icon.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  label: string;
  icon: ReactElement<IconProps>;
  children?: React.ReactNode;
}

export const ButtonWithIcon = ({
  variant,
  label,
  icon,
  children,
  ...props
}: Props) => {
  return (
    <button
      type="button"
      className={`button--icon ${variant}`}
      aria-label={label}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};
