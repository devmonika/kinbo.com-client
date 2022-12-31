import React from 'react';

const Heroarea = () => {
    return (
        <div>
              
        <div class="relative w-full h-full pb-10">
            <div class="hidden md:block"> 
                <img class="absolute bg-cover bg-center w-full h-full inset-0 bg-red" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Hero%2008.png" alt="" />
            </div>
            {/* <nav class="lg:hidden relative z-50">
                <div class="flex py-2 justify-between items-center px-4">
                    <div>
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg1.svg" alt="logo" />
                    </div>
                    <div class="visible flex items-center">
                        <button id="open" onclick="MenuHandler(true)" class="focus:outline-none focus:ring-2 focus:ring-black" >
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg2.svg" alt="menu" />
                        </button>
                       
                        <div class="xl:hidden">
                            <button id="close" class="hidden close-m-menu focus:ring-2 focus:ring-black focus:outline-none" onclick="MenuHandler(false)">
                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg3.svg" alt="close" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <nav class="f-f-l relative z-10">
                <div class="relative z-10 mx-auto container hidden w-full px-4 xl:px-0 lg:flex justify-between items-center py-11">
                    <div>
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg4.svg" alt="logo" />
                    </div>
                    <div class="flex items-center text-white text-base font-medium">
                        <ul class="flex items-center pr-3 xl:pr-12">
                            <li class="cursor-pointer hover:text-gray-300 ease-in">
                                <a href="javascript:void(0)" class="focus:outline-none focus:ring-2 focus:ring-white">Home</a>
                            </li>
                            <li class="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
                                <a href="javascript:void(0)" class="focus:outline-none focus:ring-2 focus:ring-white">About Us</a>
                            </li>
                            <li class="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
                                <a href="javascript:void(0)" class="focus:outline-none focus:ring-2 focus:ring-white">Pricing</a>
                            </li>
                            <li class="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
                                <a href="javascript:void(0)" class="focus:outline-none focus:ring-2 focus:ring-white">Resources</a>
                            </li>
                        </ul>
                        <button class="px-6 py-3 bg-indigo-400 hover:bg-indigo-500 text-white text-base font-medium rounded-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">
                            Sign In
                            <img class="ml-4" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg5.svg" alt="arrow" />
                        </button>
                    </div>
                </div>
            </nav> */}
            <div class="relative text-left px-4 xl:px-0 container mx-auto md:flex items-center gap-8">
                <div class="text-color w-full md:w-1/3 pt-16 lg:pt-32 xl:pt-12">
                    <h1 class="text-4xl md:text-4xl lg:text-6xl w-11/12 lg:w-11/12 xl:w-full xl:text-6xl text-gray-900 font-extrabold f-f-l">Buy Your Desire Clothes With Us!</h1>
                    <div class="f-f-r text-base lg:text-base pb-20 sm:pb-0 pt-10 xl:pt-6">
                        <h2>The first to market with a product that is ready to take on the competition and delight our customers.</h2>
                    </div>
                    <div class="lg:flex">       
                    <button class="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-700 text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">Buy</button>
                    {/* <button class="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 lg:ml-2 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-200 text-indigo-600 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">Try it out</button> */}
                    </div>
                </div>
                <div className='mt-10'><img class="w-full mt-8 md:mt-0 object-fill md:w-2/3 md:-ml-4 lg:ml-24" src="https://i.postimg.cc/htB3zWrK/amazing-pretty-young-woman-holding-shopping-bags-171337-11428.webp" alt="sample page" role="img" /></div>
                 <button class="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-700 text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">Start building now</button>
                 <button class="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-200 text-indigo-600 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">Try it out</button>
            </div>
        </div>
        
      
    
        </div>
    );
};

export default Heroarea;