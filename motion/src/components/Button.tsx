import { forwardRef, PropsWithChildren, Ref } from "react";
import { motion } from "framer-motion";

const Button = forwardRef<HTMLButtonElement, PropsWithChildren>(
  ({ children }, ref: Ref<HTMLButtonElement>) => {
    return <button ref={ref}>{children}</button>;
  }
);

export const MButton = motion(Button);
