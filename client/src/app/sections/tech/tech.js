"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projects = void 0;
const tech_styled_1 = require("./tech.styled");
const tech_constants_1 = require("./tech.constants");
const Projects = () => {
    return (<tech_styled_1.Styled.Container id='Technology' aria-label='Technologies section' tabIndex={2}>
			{tech_constants_1.GRID_ITEMS.map((gridItem) => (<tech_styled_1.Styled.GridItem aria-label={gridItem.alt} key={gridItem.src} {...gridItem}/>))}
		</tech_styled_1.Styled.Container>);
};
exports.Projects = Projects;
