import { Styled } from './text.styled';
import { TextProps } from './text.types';

export const Text = (props: TextProps) => {
  const { variant = 'body1', text, children, ...rest } = props;

  const Element = Styled[variant];

  return <Element {...rest}>{text || children}</Element>;
};
