import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { webName } from '../../App';

const AllProduct = () => {
    return (
        <HelmetProvider>
            <Helmet>
				<title>allproducts - {webName}</title>
			</Helmet>
        

            <div class="min-h-screen bg-white flex flex-col justify-center py-6 sm:py-12">
            <div class="p-6 container mx-auto">

                <div class="md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">

                
                <article class="p-6 mb-6 border border-gray-100 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
                    <a href="#1" class="absolute opacity-0 top-0 right-0 left-0 bottom-0"></a>
                    <div class="relative mb-4 rounded-2xl">
                    <img class="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1621967314091-f7151d92bf49?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGhtZW52UWhVbXhNfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
                    <a class="flex justify-center items-center bg-purple-500 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100" href="#" target="_blank" rel="noopener noreferrer">
                        Read article <svg class="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                        </a>
                    </div>
                    
                    <div class="flex justify-between items-center w-full pb-4 mb-auto">
                    <div class="flex items-center">
                        
                        <div class="pr-3">
                        <img class="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60" alt=""/>
                        </div>
                        
                        <div class="flex flex-1">
                        <div class="">
                        <p class="text-sm font-semibold">Booby Purly</p>
                        <p class="text-sm text-gray-500">Published 53 minutes ago</p>
                        </div>
                        </div>
                    </div>
                    
                    <div class="flex justify-end">
                        <div class="text-sm flex items-center text-gray-500">
                        6 min <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                    </div>
                    </div>
                    <h3 class="font-medium text-xl leading-8">
                        <a href="#2" class="block relative group-hover:text-purple-500 transition-colors duration-200">
                        Lorem ipsum dolor sit amet, Sed ad minus quam voluptate?
                        </a>
                    </h3>
                </article>

                
                <article class="p-6 mb-6 border border-gray-100 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
                    <a href="#1" class="absolute opacity-0 top-0 right-0 left-0 bottom-0"></a>
                    <div class="relative mb-4 rounded-2xl">
                    <img class="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1621967314091-f7151d92bf49?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGhtZW52UWhVbXhNfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
                    <a class="flex justify-center items-center bg-purple-500 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100" href="#" target="_blank" rel="noopener noreferrer">
                        Read article <svg class="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                        </a>
                    </div>
                    
                    <div class="flex justify-between items-center w-full pb-4 mb-auto">
                    <div class="flex items-center">
                        
                        <div class="pr-3">
                        <img class="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60" alt=""/>
                        </div>
                        
                        <div class="flex flex-1">
                        <div class="">
                        <p class="text-sm font-semibold">Booby Purly</p>
                        <p class="text-sm text-gray-500">Published 53 minutes ago</p>
                        </div>
                        </div>
                    </div>
                    
                    <div class="flex justify-end">
                        <div class="text-sm flex items-center text-gray-500">
                        6 min <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                    </div>
                    </div>
                    <h3 class="font-medium text-xl leading-8">
                        <a href="#2" class="block relative group-hover:text-purple-500 transition-colors duration-200">
                        Lorem ipsum dolor sit amet, Sed ad minus quam voluptate?
                        </a>
                    </h3>
                </article>

                
                <article class="p-6 mb-6 border border-gray-100 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
                    <a href="#1" class="absolute opacity-0 top-0 right-0 left-0 bottom-0"></a>
                    <div class="relative mb-4 rounded-2xl">
                    <img class="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1621967314091-f7151d92bf49?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGhtZW52UWhVbXhNfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
                    <a class="flex justify-center items-center bg-purple-500 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100" href="#" target="_blank" rel="noopener noreferrer">
                        Read article <svg class="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                        </a>
                    </div>
                    
                    <div class="flex justify-between items-center w-full pb-4 mb-auto">
                    <div class="flex items-center">
                        
                        <div class="pr-3">
                        <img class="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60" alt=""/>
                        </div>
                        
                        <div class="flex flex-1">
                        <div class="">
                        <p class="text-sm font-semibold">Booby Purly</p>
                        <p class="text-sm text-gray-500">Published 53 minutes ago</p>
                        </div>
                        </div>
                    </div>
                    
                    <div class="flex justify-end">
                        <div class="text-sm flex items-center text-gray-500">
                        6 min <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                    </div>
                    </div>
                    <h3 class="font-medium text-xl leading-8">
                        <a href="#2" class="block relative group-hover:text-purple-500 transition-colors duration-200">
                        Lorem ipsum dolor sit amet, Sed ad minus quam voluptate?
                        </a>
                    </h3>
                </article>

                </div>

                
               

                </div>
            </div>

        </HelmetProvider>
    );
};

export default AllProduct;