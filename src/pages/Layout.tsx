import React, { Children, useEffect, useState, useTransition } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { Input } from '../components/ui/input';
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { MdOutlineHome } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { MdOutlineAnalytics } from "react-icons/md";
import { FiGlobe } from "react-icons/fi";
import { MdOutlineSettings } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";

import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "../components/ui/navigation-menu"
import { Button } from '../components/ui/button';
import {FallingLines} from 'react-loader-spinner'
import { Separator } from '../components/ui/separator';
import { Accordion, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { UserMenu } from '../components/UserMenu';
import { IoSearchOutline } from "react-icons/io5";

import { SearchBar } from '../components/SearchBar';
import { LayoutService } from '../api/layout.service';
import Loading from '../components/Loading';
const Layout = ({children}:{children:React.ReactNode}) => {
 const layoutService = new LayoutService()
  const [enable, setenable] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();
const [profileData, setprofileData] = useState({})
const [isPending, startTransition] = useTransition()

  const current = location.pathname; // "/about"
  const linkClasses = (prefix: string) =>
    `text-3xl text-gray-500 w-full flex justify-center p-3 ${
      current.startsWith(prefix) ? "bg-[#EF4444] text-white" : ""
    }`;
const logoutHandler = async()=>{
    try {
      await layoutService.logout()
      localStorage.removeItem("access_token");
      window.location.replace("/auth/sign_in");
   
      
    } catch (error) {
      console.log(error);
      
    }
  }

    
      useEffect(() => {
     
        let interval: any;
  const getProfiledata = async ()=>{
    try {
      const res:any = await layoutService.profileData()
      setprofileData(res)
    } catch (error) {
;
      window.location.replace("/auth/sign_in");
      
    }
  }
        const refreshToken = async () => {
          try {
            const res:any = await layoutService.refreshtoken()
            localStorage.setItem("access_token", res.access_token);
            console.log("🔄 Access token refreshed");
          } catch (err) {
          console.log(err);
          
          }
        };
        startTransition(async()=>{
          await new Promise(res => setTimeout(res, 800));
        await refreshToken();
        await getProfiledata()
        }
      )
        interval = setInterval(refreshToken, 15 * 60 * 100);
    
        return () => clearInterval(interval);
      }, []);
    
    
  
  
  return (
   isPending ?    <Loading></Loading>:
    <div className='h-screen bg-[#F0EFEF] overflow-hidden'>
      <div className='h-14 relative md:left-17 border-1 border-b-[#C7B9B9] bg-white flex items-center '>
     { !enable&& <> <RxHamburgerMenu className='text-3xl pl-2 md:hidden'></RxHamburgerMenu>    

      <img src='./shortlogo.png' className='h-14 md:hidden'></img> </>
     }
      <div className='flex absolute  right-0 md:right-18 items-center'>
      <SearchBar enable={enable} setenable={setenable} /> 

 { !enable&&   <div className='flex items-center justify-between w-25 md:w-full'>
        
        <IoSearchOutline className='text-xl md:hidden block' onClick={()=>setenable(true)}></IoSearchOutline> 
    
       
 <UserMenu logoutHandler={logoutHandler} profileData={profileData}></UserMenu>
 </div>
}
<div className='hidden md:block'>
</div>
</div>
      </div>
      <div className='flex'>
      <div className='w-18 h-screen hidden relative md:block bottom-14 border-1 border-r-[#C7B9B9] bg-white'>
      <img src='./t.png'></img>
    <div className='grid justify-center'>
<Button variant="destructive" className='text-3xl mt-3 p-5 h-12 bg-red-500'>+</Button>
</div>
<div  className='my-4  flex flex-col   justify-between h-[20rem] '>

<div className={linkClasses("/home")  } onClick={() => navigate("/home")} >
  <MdOutlineHome   ></MdOutlineHome>
  </div>
  <div className={linkClasses("/links")} onClick={() => navigate("/links")}>
        <IoIosLink />
      </div>

      <div className={linkClasses("/qrs")} onClick={() => navigate("/qrs")}>
        <MdOutlineQrCodeScanner />
      </div>
      <div className={linkClasses("/analytics")} onClick={() => navigate("/analytics")}>
        <MdOutlineAnalytics />
      </div>

      <div className={linkClasses("/domains")} onClick={() => navigate("/domains")}>
        <FiGlobe />
      </div>
</div>
<Separator className='bg-[#C7B9B9] my-3'></Separator>
<MdOutlineSettings  className='text-3xl text-gray-500 w-full mt-4'onClick={() => navigate("/settings")}></MdOutlineSettings>
</div>

<div className='h-screen w-full p-5 pb-20 sm:pb-5 overflow-y-auto'>
 {children}
</div>

</div>
      </div>
 
  )
}

export default Layout
