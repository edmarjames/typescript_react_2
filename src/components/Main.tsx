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
                <a href="/">Food Ninja</a>
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

      <main className='px-16 py-6'>
        <div>
          <a href="#">Log in</a>
          <a href="#">Sign up</a>
        </div>

        <header>
          <h2 className='text-gray-800 text-xl font-semibold'>Recipes</h2>
          <h3 className='text-gray-800 text-xl font-semibold'>For Ninjas</h3>
        </header>

        <div>
          <h4 className='font-bold mt-12 pb-2 border-b border-gray-300'>Latest Recipes</h4>
          <div className='mt-8'>
            {/* Cards go here */}
            <div>
              <img src={Stew} alt="stew" />
              <div>
                <span>5 Bean Chilli Stew</span>
                <span>Recipe by Mario</span>
              </div>
            </div>
          </div>

          <h4 className='font-bold mt-12 pb-2 border-b border-gray-300'>Most Popular</h4>
          <div className='mt-8'>
            {/* Cards go here */}
          </div>

          <div>
            <div>Load more</div>
          </div>
        </div>
      </main>
    </div>
  )
};
