import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuItem,
    DropdownMenuSeparator,
  } from "./ui/dropdown-menu";
  
  import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
  import { IoChevronDown } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

  export function UserMenu({logoutHandler,profileData}:{logoutHandler:any,profileData:any}) {
    const navigate = useNavigate();
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 p-2 rounded-md  cursor-pointer">
          <Avatar className="h-8 w-8">
            <AvatarImage src= {profileData.profileImage}/>
            <AvatarFallback>HT</AvatarFallback>
          </Avatar>
          <span className="font-medium hidden md:block">{profileData.name}</span>
          <IoChevronDown></IoChevronDown>
        </DropdownMenuTrigger>
  
      <DropdownMenuContent
          align="end"
          className="w-64 p-0 rounded-[6px] border-[#C7B9B9]  bg-white shadow-lg"
        >
          {/* TOP SECTION — avatar + name + email */}
          <div className="flex items-center gap-3 px-4 py-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={profileData.profileImage} />
              <AvatarFallback>HT</AvatarFallback>
            </Avatar>
  
            <div>
              <p className="font-medium text-black text-sm">{profileData.name}</p>
              <p className="text-xs text-muted-foreground">
            { profileData?.emails?.[0]?.email}
              </p>
            </div>
          </div>
  
          <DropdownMenuSeparator className="my-1" />
  
          {/* MENU ITEMS */}
          <DropdownMenuItem className="px-4 py-3 cursor-pointer">
            API documentation
          </DropdownMenuItem>
  
          <DropdownMenuItem className="px-4 py-3 cursor-pointer" onClick={() => navigate("/settings")}>
            Settings
          </DropdownMenuItem>
  
          <DropdownMenuSeparator className="my-1" />
  
          {/* SIGN OUT */}
          <DropdownMenuItem
            className="px-4 py-3 text-red-600 cursor-pointer"
            onClick={logoutHandler}
          >
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  