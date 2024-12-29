import React from 'react'
import Head from 'next/head';
import Header from '@/components/Navbar/Navbar';
const page = () => {
  return (
  <>
    <Head>
        <title>About us | Contel Technologies</title>
        <meta name='description'content='Learn about Crontel technologies, a IT Service ,providing innovative solutions to worldwide'/>
        <meta name='keywords' content='Crontel, IT company, IT services, Website Development,UI & UX design, Mobile App Development'/>
        <meta name='og:title' content='About us| Crontel '/>
        <meta name='og:description' content='know more About Crontel technologies, a IT Service ,providing innovative solutions to worldwide'/>
    </Head>
    <Header/>
    <div className=''>
        <h1 className='text-4xl text-center text-gray-800'>About Crontel</h1>
        <p className='text-center text-lg mt-4'>Crontel Technologies is IT service based company whop proivide excel level innovative solutions
            for your bussiness with service like Custom Website Development, Mobile App Development, UI & UX design , Data Analysis
        </p>
    </div>
  </>
  )
}

export default page;
