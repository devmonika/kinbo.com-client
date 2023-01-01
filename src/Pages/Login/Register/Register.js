import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { webName } from '../../../App';

const Register = () => {
    return (
        <HelmetProvider>
            <Helmet>
				<title>Login - {webName}</title>
			</Helmet>
            <div className=' w-full'>
            <div className="flex items-center min-h-screen  bg-gray-100 lg:justify-center">
                <div
                    className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
                >
                    <div
                    className="p-4 py-6 text-white bg-indigo-600 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
                    >
                    <div className="my-3 text-4xl font-bold tracking-wider text-center"> 
                        <Link to="/">Kinbo.com</Link>
                    </div>
                    
                    <p className="flex flex-col items-center justify-center mt-10 text-center">
                        <span>Already Have an account?</span>
                        <Link to="/login" className="underline">Login Now!</Link>
                    </p>
                    <p className="mt-6 text-sm text-center text-gray-300">
                        Read our <Link href="#" className="underline">terms</Link> and <Link href="#" className="underline">conditions</Link>
                    </p>
                    </div>
                    <div className="p-5 bg-white md:flex-1">
                    <h3 className="my-4 text-2xl font-semibold text-gray-700">Account Register</h3>
                    <form action="#" className="flex flex-col space-y-5">
                        <div className="flex flex-col space-y-1">
                        <label for="name" className="text-sm font-semibold text-gray-500 text-left">Full Name</label>
                        <input
                            type="name"
                            id="name"
                            autofocus
                            className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                        />
                        </div>
                        <div className="flex flex-col space-y-1">
                        <label for="email" className="text-sm font-semibold text-gray-500 text-left">Email address</label>
                        <input
                            type="email"
                            id="email"
                            autofocus
                            className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                        />
                        </div>
                        <div className="flex flex-col space-y-1">
                        <div className="flex items-center justify-between">
                            <label for="password" className="text-sm font-semibold text-gray-500">Password</label>
                            
                        </div>
                        <input
                            type="password"
                            id="password"
                            className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                        />
                        </div>
                        
                        <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-indigo-600 rounded-md shadow hover:bg-yellow-500 focus:outline-none focus:ring-blue-200 focus:ring-4"
                        >
                            Sign Up
                        </button>
                        </div>
                        
                    </form>
                    </div>
                </div>
            </div>
        </div>
        </HelmetProvider>
    );
};

export default Register;