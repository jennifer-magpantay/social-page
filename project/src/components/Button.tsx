import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: Props) => {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
};
