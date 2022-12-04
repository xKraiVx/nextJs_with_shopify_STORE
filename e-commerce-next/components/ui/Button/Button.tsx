import {
  ButtonHTMLAttributes,
  ComponentType,
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
} from "react";
import cn from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[];
  isLoading?: boolean;
  Component?: string | ComponentType<HTMLAttributes<HTMLElement>>;
  href?: string;
}

import styles from "./Button.module.css";
import LoadingDots from "../LoadingDots";
const Button: FunctionComponent<Props> = ({
  children,
  className,
  isLoading = false,
  Component = "button",
  ...rest
}) => {
  return (
    <>
      {Component === "button" ? (
        <Component
          className={cn(styles.root, className)}
          disabled={isLoading}
          {...rest}
        >
          {children}
          {isLoading && (
            <i className="pl-2 m-0 flex">
              <LoadingDots />
            </i>
          )}
        </Component>
      ) : (
        <Component className={cn(styles.root, className)} {...rest}>
          {children}
          {isLoading && (
            <i className="pl-2 m-0 flex">
              <LoadingDots />
            </i>
          )}
        </Component>
      )}
    </>
  );
};

export default Button;
