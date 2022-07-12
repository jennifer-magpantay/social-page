import { ImgHTMLAttributes } from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder: boolean;
}

export const Avatar = ({ hasBorder, ...props }: Props) => {
  return <img className={hasBorder ? " avatar border" : "avatar"} {...props} />;
};
