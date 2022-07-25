"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
require("swiper/css");
require("swiper/css/navigation");
require("swiper/css/pagination");
require("swiper/css/scrollbar");
require("aos/dist/aos.css");
const components_1 = require("components");
const theme_1 = require("theme");
const nav_1 = require("./nav");
const privacy_policy_1 = require("./privacy-policy");
const sections_1 = require("./sections");
const App = () => {
    const { modalIsOpen, openModal, closeModal } = (0, components_1.useModalState)();
    return (<>
			<theme_1.GlobalStyles />
			<nav_1.Nav />

			<sections_1.Hero />
			<sections_1.Features />
			<sections_1.Projects />
			<sections_1.About />
			<sections_1.Contact />

			<sections_1.Footer onPrivacyClick={openModal}/>

			<components_1.Modal open={modalIsOpen} onClose={closeModal} title='Privacy Policy' body={<privacy_policy_1.PrivacyPolicy />}/>
		</>);
};
exports.App = App;
