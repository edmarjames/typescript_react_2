import React, { useState }                           from 'react';
import Stew                            from '../assets/stew.jpg';
import Noodles                         from '../assets/noodles.jpg';
import Curry                           from '../assets/curry.jpg';

export default function Main() {

  return (
    <div className='text-gray-600 grid md:grid-cols-3'>
      <div className='md:col-span-1 md:flex md:justify-end'>
        <div>
          <nav className='text-right'>
            <div className='flex justify-between items-center'>
              <h1 className='font-bold uppercase text-3xl p-4 border-b border-gray-200'>
                <a href="/" className='text-green-500 sm:text-red-500 md:text-purple-500 lg:text-blue-500 xl:text-amber-500 hover:text-gray-900'>Food Ninja</a>
              </h1>
              <div className='px-4 cursor-pointer md:hidden' id='burger'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </div>
            </div>
            <ul className='text-sm mt-6 md:block' id='menu'>
              <li className='text-gray-700 py-1'>
                <a href="#" className='px-4 flex justify-end border-r-4 border-red-500'>
                  <span>Home</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="sidebar-icons">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </a>
              </li>
              <li className='text-gray-700 py-1'>
                <a href="#" className='px-4 flex justify-end border-r-4 border-white'>
                  <span>About</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="sidebar-icons">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                  </svg>
                </a>
              </li>
              <li className='text-gray-700 py-1'>
                <a href="#" className='px-4 flex justify-end border-r-4 border-white'>
                  <span>Contact</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="sidebar-icons">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <main className='px-16 py-6 bg-gray-100 md:col-span-2'>
        <div className='flex gap-1 justify-start md:justify-between mb-1'>
          <a href="#" className='text-gray-800 btn border-gray-800 border-2 md:bg-blue-300 md:shadow-md md:border-0 hover:opacity-50'>Log in</a>
          <a href="#" className='text-gray-800 btn border-gray-800 border-2 md:bg-blue-300 md:shadow-md md:border-0 hover:opacity-50'>Sign up</a>
        </div>

        {/* <div className='flex items-end justify-center'>
          <div className="bg-red-500 h-4 w-6"></div>
          <div className="bg-blue-500 h-8 w-6"></div>
          <div className="bg-green-500 h-12 w-6"></div>
        </div> */}

        <header>
          <h2 className='text-gray-800 text-xl font-semibold'>Recipes</h2>
          <h3 className='text-gray-800 text-xl font-semibold'>For Ninjas</h3>
        </header>

        <div>
          <h4 className='font-bold mt-12 pb-2 border-b border-gray-300'>Latest Recipes</h4>
          <div className='mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {/* Cards go here */}
            <div className='card'>
              <img className='w-full h-32 sm:h-48 object-cover' src={Stew} alt="stew" />
              <div className='m-4'>
                <span className='font-bold'>5 Bean Chilli Stew</span>
                <span className='text-gray-500 text-sm block'>Recipe by Mario</span>
              </div>
              <div className='badge'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 inline-block mr-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>25 mins</span>
              </div>
            </div>
            <div className='card'>
              <img className='w-full h-32 sm:h-48 object-cover' src={Noodles} alt="noodles" />
              <div className='m-4'>
                <span className='font-bold'>Vegetable Noodles</span>
                <span className='text-gray-500 text-sm block'>Recipe by Mario</span>
              </div>
              <div className='badge'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 inline-block mr-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>25 mins</span>
              </div>
            </div>
            <div className='card'>
              <img className='w-full h-32 sm:h-48 object-cover' src={Curry} alt="curry" />
              <div className='m-4'>
                <span className='font-bold'>Tofu Curry</span>
                <span className='text-gray-500 text-sm block'>Recipe by Mario</span>
              </div>
              <div className='badge'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 inline-block mr-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>25 mins</span>
              </div>
            </div>
          </div>

          <h4 className='font-bold mt-12 pb-2 border-b border-gray-300'>Most Popular</h4>
          <div className='mt-8'>
            {/* Cards go here */}
          </div>

          <div className='flex justify-center'>
            <div className='btn bg-gray-700 text-white shadow-md hover:bg-white hover:text-gray-700 hover:border-gray-700 border-2'>Load more</div>
          </div>
        </div>
      </main>
    </div>
  )
};
