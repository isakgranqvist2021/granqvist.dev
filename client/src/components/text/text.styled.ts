import { TextVariant } from './text.types';
import { Bodies, Subtitles, Titles } from './variants';

export const Styled: Record<TextVariant, any> = {
  ...Bodies,
  ...Subtitles,
  ...Titles,
};
