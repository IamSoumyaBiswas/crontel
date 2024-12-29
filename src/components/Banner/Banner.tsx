import Image from 'next/image';
import React from 'react'
import bannerImage from "../../assets/images/banner.jpg"


const Banner = () => {
  return (
    <div className=' mx-auto  px-4'>
      <div className='flex justify-center flex-row gap-16'>
        {/* Image section */}

        <div className=''>
          <Image
            src={bannerImage}
            className="h-[520px] w-[480px] object-cover rounded-lg"
            alt='bannerImage'
            height={800}
            width={800}
            quality={100} />
        </div>

        {/* Right Section */}
        <div className=''>
          <label htmlFor='About' className='text-primary '>About Our Company</label>
          <div className='flex flex-col '>
            <h1 className='text-textPrimary font-semibold text-4xl '>Professional IT Experts </h1>
            <h1 className='text-textPrimary font-semibold text-4xl '>For Your Tech Solutions</h1>
          </div>

          <div className='text-textSecendory text-base flex flex-col '>
            <p>Web Designing in a powerful way of just not and only professions,however, in a passion for our company. We have to
              tendancy to believe the idea that smart for looking of any website is the first impression on visitors just not an only professions
            </p>
          </div>

          <div className=''>
            <ul>

            </ul>
            <ul></ul>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Banner;
