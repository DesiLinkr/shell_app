import React from 'react'
import { Typography } from './ui/typography'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'

const Box = ({img,title,btntext,url,imgstyle}:any) => {
  const navigate = useNavigate()
  
  return (
    <div className='bg-white  border border-[#B7B1B1] p-7 rounded-[10px] h-[12rem] md:h-[14rem]  2xl:h-[18rem]'>
    <div className='border border-[#B7B1B1] rounded-[6px] h-full flex items-center  '>
      <div className='border-r-1 h-full border-[#B7B1B1] w-[50%]  flex items-center justify-center bg-[#F0D1D1] rounded-l-[6px]'>
    <img src ={img}  className={imgstyle}></img>
    
    </div>
    <div className='w-[50%]  flex flex-col justify-center items-center'>
      <Typography text={title} className ="text-xl xl:text-2xl "></Typography>
      <br></br>
    <Button variant="outline" className='border-red-500 text-red-500 max-w-[10rem] hover:text-white  hover:bg-red-500 '   onClick={()=>{
      navigate(url)
    }}>{btntext}</Button>
    </div>
    </div>
    
    </div>
  )
}

export default Box
