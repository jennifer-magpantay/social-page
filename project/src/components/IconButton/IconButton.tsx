import { ButtonHTMLAttributes, ReactElement } from "react";
import { IconProps } from "phosphor-react";

import "../../styles/components/_icon-button.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: ReactElement<IconProps>;
}

export const IconButton = ({ label, icon, ...props }: Props) => {
  return (
    <button type="button" className="icon-button" aria-label={label} {...props}>
      {icon}
    </button>
  );
};
