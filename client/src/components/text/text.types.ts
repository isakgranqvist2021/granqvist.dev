export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1';

export interface TextProps {
  variant?: TextVariant;
  text?: string;
  children?: React.ReactNode;
}
