import React from 'react'
import Sales from './components/sales'
import Button from './components/button'
import Categories from './components/categories'
import Products from './components/products'
import Arrival from './components/arrival'
import Customer from './components/customer'
import OurProduct from './components/ourproducts'
import Image from 'next/image'

const Page = () => {
  return (
    <div>
      <div>
        
      {/*This is for images section */}
      <div className="px-4 sm:px-8 md:px-16 flex justify-center sm:justify-between items-center py-8 flex-wrap">
        <Image src={"/frame.png"} alt="frame" width={217} height={344} className="mb-4 sm:mb-0" />

        <Image
          className="px-4 sm:px-8"
          src={"/picture.png"}
          alt="picture"
          width={892}
          height={182}
        />
      </div>
      </div>
        <Sales/>
      <Button/>
      <Categories/>
      <Products/>
      <OurProduct/>
      <Arrival/>
      <Customer/>
      
    </div>
  )
}

export default Page