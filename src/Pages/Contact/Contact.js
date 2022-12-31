import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { webName } from '../../App';

const Contact = () => {
    return (
    <HelmetProvider>
            <Helmet>
				<title>Contact - {webName}</title>
			</Helmet>
    
            <div>
                contact
            </div>
    </HelmetProvider>
    );
};

export default Contact;