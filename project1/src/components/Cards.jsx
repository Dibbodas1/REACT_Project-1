import { FaFileAlt } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "motion/react";

function Cards({ data, refer }) {
  // const[dec,size,color,tag]=data
  return (
    <div>
      <motion.div
        drag
        dragConstraints={refer}
        whileDrag={{ scale: 1.1 }}
        className="w-60 h-70 rounded-[20px] overflow-hidden py-10 bg-zinc-200/50 p-5 relative"
      >
        <FaFileAlt />
        <p className="text-sm mt-5 font-semibold">{data.dec}</p>
        <div className="absolute bottom-0 left-0  w-full ">
          <div className="flex justify-between px-5 itrms-center mb-2 py-3">
            <h5>{data.size}</h5>
            <span className="h-6 w-6 text-white bg-zinc-900 flex justify-center items-center rounded-full">
              {data.close ? <FaArrowDown /> : "X"}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag w-full py-4 ${data.tag.color} rounded-md flex items-center justify-center`}
            >
              <h2 className="text-sm font-semibold">{data.tag.tag}</h2>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default Cards;
