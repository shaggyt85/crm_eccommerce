import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import {BiMinus, BiPlus} from "react-icons/bi"
import { motion } from "framer-motion";

const CartContainer = () => {
  return (
    <div className="fixed top-0 right-0 w-full md:w-375 z-[101] bg-white drop-shadow-md flex flex-col">
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div whileTap={{ scale: 0.7 }}>
          {" "}
          <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
        </motion.div>
        <p className="text-textColor text-lg font-semibold">Cart</p>

        <motion.p 
        whileTap={{ scale: 0.7 }} className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base">
          Clear <RiRefreshFill />{" "}
        </motion.p>
      </div>
      <div className="w-full h-full  bg-cartBg  rounded-t-[2rem] flex flex-col">
            <div className=" w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
              <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
                <img src="https://firebasestorage.googleapis.com/v0/b/restaurantapp-d390f.appspot.com/o/Images%2F1677457052711-c2.png?alt=media&token=be79a443-e898-4f1f-bae2-d4b672898c81" alt="https://firebasestorage.googleapis.com/v0/b/restaurantapp-d390f.appspot.com/o/Images%2F1677457052711-c2.png?alt=media&token=be79a443-e898-4f1f-bae2-d4b672898c81" className="w-20 h-20 max-w-[60px] rounded-full object-contain" />
                <div className="flex flex-col gap-2">
                  <p className="text-base text-gray-50"> Chocolate </p>
                  <p className="text-sm block text-gray-300 font-semibold" > 9.7</p>
                </div>
                <div className="group flex items-center gap-2 ml-auto cursor-pointer">
                  <motion.div whileTap={{scale: 0.75}}></motion.div>
                  <BiMinus className="text-gray-50" />
                  <motion.div whileTap={{scale: 0.75}}></motion.div>
                  <BiPlus className="text-gray-50" />
                </div>
              </div>
            </div>
      </div>
    </div>
  );
};

export default CartContainer;
