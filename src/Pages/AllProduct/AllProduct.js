import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { webName } from '../../App';

const AllProduct = () => {
    return (
        <HelmetProvider>
            <Helmet>
				<title>allproducts - {webName}</title>
			</Helmet>
        <div>
            Products
        </div>
        </HelmetProvider>
    );
};

export default AllProduct;