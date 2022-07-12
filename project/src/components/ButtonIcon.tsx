import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const ButtonIcon = ({ children, ...props }: Props) => {
  return (
    <button className="button--icon" {...props}>
      {children}
    </button>
  );
};
