import { TextProps } from "./text.types";

import { Styled } from "./text.styled";

export const Text = (props: TextProps) => {
  const { variant = "body1", color, text, children, ...rest } = props;

  const Element = Styled[variant];

  return (
    <Element color={color} {...rest}>
      {text || children}
    </Element>
  );
};
