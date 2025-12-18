import { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "../components/ui/popover";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function SearchBar({enable,setenable}:any) {
  const navigate = useNavigate(); // 👈 Add Router navigation
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("Links");
  const showPanel = query.length > 0;
 
  const options = ["Links", "QR Codes"];
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();    // ⛔ stop form submit / button click
    e.stopPropagation(); 
      navigate(`/${ selected.toLowerCase().split(" ")[0]}?query=${query}`)
    }
  }
  return (
    <div className="relative w-screen items-center justify-center flex md:w-fit">
      <Popover open={showPanel}>
        <PopoverTrigger asChild>
        <div className="flex items-center gap-2 ">
        {enable &&
     <>
      

            {/* MOBILE INPUT */}
            <Input
              type="text"
              value={query}
              onKeyDown={handleKeyDown}  
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="w-[80vw] md:hidden"   // mobile only
            />

            {/* MOBILE BLUE X */}
   
              <button
                onClick={() => {setQuery(""); setenable(false)}}
                className="text-[#EF4444] hover:text-[#EF4444] md:hidden"
              >
                <X className="h-5 w-5" />
              </button>
              </>   
          }

            {/* DESKTOP INPUT */}
            <Input
              type="search"
              value={query}
              onKeyDown={handleKeyDown}  
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="w-96 hidden md:block" // desktop only
            />

            {/* NO X ON DESKTOP */}
          </div>
        </PopoverTrigger>

        {/* DROPDOWN */}
        <PopoverContent
         onOpenAutoFocus={(e) => e.preventDefault()}  
          align="start"
          className="w-[80vw] md:w-96 rounded-sm p-4 border-[#C7B9B9]"
        >
          <p className="text-sm mb-3">
            Search for <span className="font-semibold">"{query}"</span> in:
          </p>

          <div className="flex gap-2">
            {options.map((opt) => (
              <Button
                key={opt}
                
                variant={selected === opt ? "destructive" : "outline"}
                className="h-8 px-4"
                disabled={selected === opt}
                onClick={() => setSelected(opt)}
              >
                {opt}
              </Button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
