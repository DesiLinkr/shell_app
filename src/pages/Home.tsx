import React from 'react'
import Layout from './Layout'
import {  Typography } from '../components/ui/typography'
import { Button } from '../components/ui/button'
import Box from '../components/Box'
import { IoIosLink } from 'react-icons/io'
import { MdOutlineAnalytics, MdOutlineQrCodeScanner } from 'react-icons/md'
import { FiGlobe } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  
  return (
  <Layout>
  <Typography text="Your Connections Platform" className="  text-xl    xl:text-2xl" ></Typography>

  <div className='grid lg:grid-cols-2 gap-4 grid-cols-1 mt-4'>
  <Box img='./home1.png' title="Make it short" btntext="Go to links" url="/links" imgstyle="sm:h-28 h-22 md:h-30 lg:h-24 xl:h-28 2xl:h-40  "></Box>
  <Box img='./home2.png' title="Make it scannable" btntext="Go to Codes" url="/qrs" imgstyle="sm:h-30 h-24 md:h-32 lg:h-26 xl:h-36 2xl:h-52   "></Box>
  <div className='bg-white  border border-[#B7B1B1] p-7 rounded-[10px] '>

    <Typography text="Getting started with DesiLinkr" className=" text-xl    xl:text-2xl"></Typography>
    <div className='border border-[#B7B1B1] rounded-[6px] h-[30rem] flex flex-col sm:px-3 py-2  px-2 lg:py-6 lg:px-4  '>
      
 <div className='bg-[#F0D1D1] py-6 pl-6   h-[12rem] sm:h-[10rem]  rounded-[6px] justify-between grid'>
 <Typography text ="Click it, scan it, or share it." className=" text-lg    xl:text-xl"></Typography>
<div className='grid w-[88%] grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 '>
 
 <Button variant="outline" className='border-red-500 text-red-500 max-w-[10rem] hover:text-white  hover:bg-red-500 '  onClick={()=>navigate("/link/Create")} >     <IoIosLink />Create a link</Button>
  <Button variant="outline" className='border-red-500 text-red-500 w-[12rem] hover:text-white  hover:bg-red-500 '  onClick={()=>navigate("/qr/Create")} > <MdOutlineQrCodeScanner />Create a QR Code</Button>
  </div>
</div>

<div className=' pt-6 pl-6   h-[10rem]  rounded-[6px] justify-between grid'>
<Typography text ="Click it, scan it, or share it." className=" text-lg    xl:text-xl"></Typography>
<div className='grid  w-[90%] grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 '>
 <Button variant="outline" className='border-red-500 text-red-500 w-[11rem] hover:text-white  hover:bg-red-500 ' onClick={()=>navigate("/links")}   >     <IoIosLink />View your links</Button>
  <Button variant="outline" className='border-red-500 text-red-500  w-[13rem] hover:text-white  hover:bg-red-500 '  onClick={()=>navigate("/qrs")} > <MdOutlineQrCodeScanner />View your QR Codes</Button>
  </div>
</div>

<div className='pt-6 pl-6   h-[7rem] sm:h-[10rem] rounded-[6px] justify-between grid'>
<Typography text ="Check out DesiLinkr Analytics." className=" text-lg    xl:text-xl"></Typography>
<div >
 <Button variant="outline" className='border-red-500 text-red-500  hover:text-white  hover:bg-red-500  w-[13rem]'   onClick={() => navigate("/analytics")}>     <MdOutlineAnalytics />View Analytics demo</Button>
   </div>
</div>
    </div>
  </div>
<div className='bg-white  border border-[#B7B1B1] p-5  h-fit rounded-[10px]'>
<div className='flex justify-center '>
<img src="./home3.png" className='mb-8 mt-2 xl:h-50  '></img>
</div>
<div className='flex flex-col justify-between h-[8rem] pb-4 pl-2'>
<Typography text="Make it scannable" className=" text-xl    xl:text-2xl "></Typography>
<p  className="text-sm md:text-base mb-3">it, scan it, or share it.</p>

<Button variant="outline" className='border-red-500 text-red-500 max-w-[10rem] hover:text-white  hover:bg-red-500 '  onClick={() => navigate("/domains")} >     <FiGlobe />Manage domain</Button>
  
</div>
</div>
  </div>
  </Layout>
  )
}

export default Home
