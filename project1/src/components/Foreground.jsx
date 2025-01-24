import { useRef } from "react";
import Cards from "./Cards";

function Foreground() {
    const ref=useRef(null)
  const data = [
    {
      dec: "lorem ipsum dolor sit amet, consectetur adipisicing.",
      size: ".4MB",
      close: true,
      tag: { isOpen: true, tag: "Download now", color: "bg-green-500" },
    },
    {
      dec: "lorem ipsum dolor sit amet, consectetur adipisicing.",
      size: ".4MB",
      close: false, 
      tag: { isOpen: true, tag: "not aviable", color: "bg-red-500" },
    },
  ];
  return (
    <div>
      <div ref={ref} className="p-5 w-full h-full top-0 left-0 fixed z-[3] flex gap-5 flex-wrap ">
       { data.map((item, index) => (
            <Cards key={index} data={item} refer={ref}/>
        ))}
      </div>
    </div>
  );
}

export default Foreground;
