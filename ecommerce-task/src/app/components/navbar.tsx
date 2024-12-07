import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div>
      {/*This is for navbar section */}
      <div className="bg-black w-full h-[48px] flex justify-center items-center relative">
        {/*For English (for alignment to the right) */}
        <div className="absolute right-4 flex items-center text-white text-sm md:text-lg gap-2">
          <p className="hidden md:block">English</p>
          <Image
            src="/Vector.png"
            alt="vector"
            width={10}
            height={10}
            className="hidden md:block"
          />
        </div>

        {/*This is for the center section */}
        <div className="flex items-center gap-2">
          {/*For summer sale announcement */}
          <h1 className="text-white text-sm md:text-base text-center">
            Summer Sale For All Swim Suits And Free Express Delivery - 50% Off!
          </h1>

          {/*Here's a Shop Now part */}
          <p className="text-white text-sm md:text-base">ShopNow</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;