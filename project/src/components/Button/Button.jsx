// import { ButtonHTMLAttributes } from "react";

// style should be imported with the the component
// try to add Button.scss here
import "../../styles/components/_button.scss";

// export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
//   type: "button" | "submit" | "reset";
//   variant: "primary" | "secondary";
//   isDisabled?: boolean
//   children: React.ReactNode;
//   onClick: () => void;
// }

export const Button = ({
  type,
  variant,
  isDisabled,
  children,
  onClick,
  ...props
}) => {
  return (
    <button
      type={type}
      className={`button ${variant}`}
      disabled={isDisabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
