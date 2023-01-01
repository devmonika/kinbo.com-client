import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { webName } from '../../App';
import Heroarea from './Heroarea';
import HomeCat from './HomeCat';

const Home = () => {
    return (
        <HelmetProvider>
            <Helmet>
				<title>Home - {webName}</title>
			</Helmet>
        <div>
            <Heroarea></Heroarea>
            <HomeCat></HomeCat>
            
        
    
        </div>
        </HelmetProvider>
    );
};

export default Home;