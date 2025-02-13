import React                           from 'react';
import Stew                            from '../assets/stew.jpg';

export default function Main() {

  return (
    <div className='text-gray-600'>
      <div>
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

      <main className='px-16 py-6 bg-gray-100'>
        <div className='flex gap-1 justify-start md:justify-between mb-1'>
          <a href="#">Log in</a>
          <a href="#">Sign up</a>
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
          <div className='mt-8'>
            {/* Cards go here */}
            <div className='bg-white rounded overflow-hidden shadow-md'>
              <img className='w-full h-32 sm:h-48 object-cover' src={Stew} alt="stew" />
              <div className='m-4'>
                <span className='font-bold'>5 Bean Chilli Stew</span>
                <span className='text-gray-500 text-sm block'>Recipe by Mario</span>
              </div>
            </div>
          </div>

          <h4 className='font-bold mt-12 pb-2 border-b border-gray-300'>Most Popular</h4>
          <div className='mt-8'>
            {/* Cards go here */}
          </div>

          <div className='flex justify-center'>
            <div>Load more</div>
          </div>
        </div>
      </main>
    </div>
  )
};
