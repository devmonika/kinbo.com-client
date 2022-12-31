import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { webName } from '../../App';
import Heroarea from './Heroarea';

const Home = () => {
    return (
        <HelmetProvider>
            <Helmet>
				<title>Home - {webName}</title>
			</Helmet>
        <div>
            <Heroarea></Heroarea>
        </div>
        </HelmetProvider>
    );
};

export default Home;