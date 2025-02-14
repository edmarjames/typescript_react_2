import React                           from 'react';
import Stew                            from '../assets/stew.jpg';
import Noodles                         from '../assets/noodles.jpg';
import Curry                           from '../assets/curry.jpg';

export default function Main() {

  return (
    <div className='text-gray-600 grid md:grid-cols-3'>
      <div className='md:col-span-1'>
        <div>
          <nav>
            <div>
              <h1 className='font-bold uppercase text-3xl p-4 border-b border-gray-200'>
                <a href="/" className='text-green-500 sm:text-red-500 md:text-purple-500 lg:text-blue-500 xl:text-amber-500'>Food Ninja</a>
              </h1>
            </div>
            <ul>
              <li className='text-gray-700'>
                <a href="#">
                  <span>Home</span>
                </a>
              </li>
              <li className='text-gray-700'>
                <a href="#">
                  <span>About</span>
                </a>
              </li>
              <li className='text-gray-700'>
                <a href="#">
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <main className='px-16 py-6 bg-gray-100 md:col-span-2'>
        <div className='flex gap-1 justify-start md:justify-between mb-1'>
          <a href="#" className='text-gray-800 btn border-gray-800 border-2 md:bg-blue-300 md:shadow-md md:border-0'>Log in</a>
          <a href="#" className='text-gray-800 btn border-gray-800 border-2 md:bg-blue-300 md:shadow-md md:border-0'>Sign up</a>
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
                <span>25 mins</span>
              </div>
            </div>
          </div>

          <h4 className='font-bold mt-12 pb-2 border-b border-gray-300'>Most Popular</h4>
          <div className='mt-8'>
            {/* Cards go here */}
          </div>

          <div className='flex justify-center'>
            <div className='btn bg-gray-700 text-white shadow-md'>Load more</div>
          </div>
        </div>
      </main>
    </div>
  )
};
