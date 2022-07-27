import { GRID_ITEMS } from './tech.constants';
import { Styled } from './tech.styled';

export const Projects = () => {
  return (
    <Styled.Container
      id="Technology"
      aria-label="Technologies section"
      tabIndex={2}
    >
      {GRID_ITEMS.map((gridItem) => (
        <Styled.GridItem
          data-aos="zoom-in"
          title={gridItem.alt}
          aria-label={gridItem.alt}
          key={gridItem.src}
          {...gridItem}
        />
      ))}
    </Styled.Container>
  );
};
