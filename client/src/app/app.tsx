import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'aos/dist/aos.css';
import AOS from 'aos';

import { GlobalStyles } from 'theme';

import { Nav } from './nav';
import { Hero, Features, About, Contact, Projects } from './sections';

export const App = () => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);

	return (
		<>
			<GlobalStyles />
			<Nav />

			<Hero />
			<Features />
			<Projects />
			<About />
			<Contact />
		</>
	);
};
