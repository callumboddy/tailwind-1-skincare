import React from 'react';
import { BsArrowDownShort } from 'react-icons/bs'

function App() {
  return (
    <div className="relative bg-yellow-200 h-screen p-4 md:px-12 lg:px-20 max-w-screen-xl mx-auto">
      <header className='py-8 flex items-center'>
      <h1 className='flex-1 text-lg font-bold' >Company.</h1>
      <nav>
        <ul className='flex items-center'>
          <li className='text font-light px-5 py-1 cursor-pointer rounded-full hover:font-medium hover:bg-yellow-300'>Shop</li>
          <li className='text font-light px-5 py-1 cursor-pointer rounded-full hover:font-medium hover:bg-yellow-300'>About</li>
          <li className='ml-4 flex items-baseline text text-yellow-200 bg-gray-900 cursor-pointer hover:bg-gray-800 px-3 py-1 text-center rounded-full'>2</li>
        </ul>
      </nav>
      </header>
      <main>
        <HeroModule />
      </main>
    </div>
  );
}

function HeroModule() {
  return (
  <div className='relative h-screen overflow-hidden'>
    <div className='ml-32 md:ml-0 flex justify-end'>
      <img className='opacity-25 sm:opacity-100 sm:mt-0 max-h-screen md:w-3/4 lg:w-7/12 flex-none object-cover overflow-hidden' src='https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80' alt='Skincare products'/>
    </div>
    <div className='absolute flex flex-col items-start h-full top-0 pt-16'>
      <h2 className='text-5xl sm:text-6xl font-medium leading-tight sm:leading-none  tracking-wider'>
        Kind on your skin.
        <br />
        Kind on the planet.
      </h2>
      <p className='mt-6 max-w-md'>
      Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit.
      </p>
      <a href='/#' className='static mt-4 px-6 py-2 bg-gray-900 text-yellow-200 font-bold rounded-full text-sm'>Shop now</a>
      <div className='flex-1 mb-40'></div>
      <div className='flex items-center mb-40'>
        <p className='text-sm'>Learn more</p>
        <BsArrowDownShort className='text-yellow-200 bg-gray-900 rounded-full ml-2' size={24} />
      </div>
    </div>
  </div>
  )
}

export default App;
