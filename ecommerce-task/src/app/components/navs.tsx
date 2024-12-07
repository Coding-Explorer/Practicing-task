import React from 'react'
import Image from 'next/image'

const Navs = () => {
  return (
    <div>
          {/*Here's an images section */}
      <div className="px-4 sm:px-8 md:px-16 flex justify-center sm:justify-between items-center py-8 flex-wrap">
        <Image src={"/frame.png"} alt="frame" width={217} height={344} className="mb-4 sm:mb-0" />

        <Image
          className="px-4 sm:px-8 sm:mt-2 lg:mt-12  md:mb-10"
          src={"/picture.png"}
          alt="picture"
          width={892}
          height={182}
        />
      </div>
    
    </div>
  )
}

export default Navs