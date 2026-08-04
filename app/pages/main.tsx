import React from 'react';
import IconButton from './homeButton'


function Home() {
  return (
      <main className="bg-gray-900 h-full w-full absolute">
        <div className="flex flex-col justify-center text-center font-[Inter] text-white">
          <div className="flex my-[1%]">
            <IconButton/>
            <p className="text-4xl mx-[40%] py-2 border-b-2 border-amber-500 font-bold">Watches</p>
          </div>
          <div className="grid grid-cols-3 gap-3 my-[2%] mx-[2%]">
            <div className="bg-gray-800 text-0xl border-solid border-3 rounded-xl mx-auto my[-3%]">
              <p className="text-2xl py-2 border-b-2 border-solid border-amber-500 mx-[5%]">Why am I making this?</p>
              <p className="p-2">A useful tool that is still widely used today, wristwatches are a great and practical tool.</p>
              <p className="px-2">However, I have noticed many people either wearing smartwatches or just outright not wearing a watch all-together!</p>
            </div>

            <div className="bg-gray-800 text-0xl border-solid border-3 rounded-xl mx-auto my[-3%]">
              <p className="text-2xl py-2 border-b-2 border-solid border-amber-500 mx-[5%]">Smartwatches vs &quot;Dumbwatches&quot;</p>
              <p className="p-2">Smartwatches are great for fitness tracking or for emergency and/or medical purposes. For most people though, a smartwatch is not a necessity.</p>
              <p className="p-2">Smartwatches have a relatively short battery life and have many unnecessary features such as video games, social media notifications, and others.</p>
              <p className="p-2">I love video games, but if you are going to play them, why would you use such a small screen? Its just impractical for gaming and social media, so why use it?</p>
            </div>

            <div className="bg-gray-800 text-0xl border-solid border-3 rounded-xl mx-auto my[-3%]">
              <p className="text-2xl py-2 border-b-2 border-solid border-amber-500 mx-[5%]">What am I providing</p>
              <p className="p-2">Standard wristwatches are not trying to anything more than tell the time, and sometimes the date and other small features such as a stopwatch or timer.</p>
              <p className="p-2">These tools come in a wider variety and can be much more personal than a smartwatch or phone.</p>
              <p className="p-2">This website aims to give you a guide on how to select a wristwatch for you based on your preferences.</p>
            </div>

          </div>
          <button className="rounded-xl mx-auto my-5 p-3 bg-amber-500 duration-150 hover:bg-amber-600 hover:duration-150 hover:cursor-pointer border-solid border-2 border-amber-600 hover:border-amber-700">Take Watch Quiz</button>
        </div>
      </main>
  );
}

export default Home;