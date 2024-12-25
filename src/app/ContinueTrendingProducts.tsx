import React from 'react'

const ContinueTrendingProducts = () => {
  return (
    <div className='flex flex-wrap justify-center gap-8 mt-10'>
      {/* First Banner */}
      <div className='bg-banner w-[340px] sm:w-[280px] lg:w-[340px]'>
        <p className='text-color font-bold mt-9 ml-11'>23% off in all products</p>
        <p className='text-pink-700 mt-2 ml-11'>Shop Now</p>
        <img src="/image 1162.png" alt="" className='ml-40 -mt-7' />
      </div>

      {/* Second Banner */}
      <div className='bg-banner w-[340px] sm:w-[280px] lg:w-[340px] h-[270px]'>
        <p className='text-color font-bold mt-9 ml-11'>23% off in all products</p>
        <p className='text-pink-700 mt-2 ml-11'>Shop Now</p>
        <img src="/image 1161.png" alt="" className='ml-4 mt-5' />
      </div>

      {/* Product Listings */}
      <div className='bg-white w-full sm:w-[280px] lg:w-[340px]'>
        <div className='flex gap-2'>
          <img src="/image 30.png" alt="" className='w-[64px] h-[71px] bg-banner'/>
          <p className='mt-5 ml-3 text-sm sm:text-base'>Executive Seat Chair<br/>$32.00</p>
        </div>
        <div className='flex'>
          <img src="/image 19.png" alt="" className='w-[64px] h-[71px] mt-3 bg-banner'/>
          <p className='mt-5 ml-3 text-sm sm:text-base'>Executive Seat Chair<br/>$32.00</p>
        </div>
        <div className='flex'>
          <img src="\image 28.png" alt="" className='w-[64px] h-[71px] mt-3 bg-banner'/>
          <p className='mt-5 ml-3 text-sm sm:text-base'>Executive Seat Chair<br/>$32.00</p>
        </div>
      </div>
    </div>
  )
}

export default ContinueTrendingProducts
