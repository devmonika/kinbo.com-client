import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { webName } from '../../App';


const About = () => {
    return (
        <HelmetProvider>
            <Helmet>
				<title>About - {webName}</title>
			</Helmet>
        <div>
            About
        </div>
        </HelmetProvider>
    );
};

export default About;