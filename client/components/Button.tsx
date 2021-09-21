import React from "react";
import classes from "./Button.module.scss";
import Link from "next/link";
interface ButtonProps {
  children: string;
  style?: string;
  linkTo?: string;
  type?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  style,
  linkTo = "/",
  type,
}) => {
  if ((type = "submit")) {
    return (
      <button type="submit" className={`${classes.button} ${style}`}>
        {children}
      </button>
    );
  }
  return (
    <Link href={linkTo}>
      <a className={`${classes.button} ${style}`}>{children}</a>
    </Link>
  );
};
