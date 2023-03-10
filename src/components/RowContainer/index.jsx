import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { useStateValue } from '../../context/StateProvider'
import NotFound from "../../img/NotFound.svg";
import { actionType } from "../../context/reducer";

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();

  const [items, setItems] = useState([])

  const [{cartItems}, dispatch] = useStateValue()

  const addToCart = () => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: items
    })
    localStorage.setItem("cartItems", JSON.stringify(items))
  }

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  useEffect(() => {
    addToCart()
  }, [items])
  return (
    <>
      <div
        ref={rowContainer}
        className={`scroll-smooth w-full flex items-center gap-3 my-12 bg-cardOverlay  ${
          flag
            ? "overflow-x-scroll scrollbar-none"
            : "overflow-x-hidden flex-wrap justify-center"
        }`}
      >
        {data && data.length > 0 ? (
          data.map((item) => (
            <div
              key={item.id}
              className="w-250 h-[250px]  min-w-[300px] md:w-340 md:min-w-[340px]  bg-cardOverlay  rounded-lg p-2  my-12  shadow-md backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-between  "
            >
              <div className="w-full flex items-center justify-between">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-40 h-40 -mt-8 drop-shadow-2xl"
                >
                  <img
                    className="w-full h-full object-contain"
                    src={item?.imageURL}
                    alt=""
                  />
                </motion.div>

                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-10 h-10 rounded-full bg-pink-400 flex items-center justify-center cursor-pointer hover:shadow-md"
                  onClick={() => setItems([...cartItems, item])}
                >
                  <MdShoppingBasket className="text-white" />
                </motion.div>
              </div>
              <div className="w-full flex flex-col items-end justify-end">
                <p className="text-textColor font-semibold text-base md:text-lg">
                  {item?.title}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {item?.calories} Calories
                </p>
                <div className="flex items-center gap-8">
                  <p className="text-lg text-headingColor font-semibold">
                    <span className="text-sm text-red-500">$</span>
                    {item?.price}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full flex flex-col items-center justify-center">
            <img className="h-340" src={NotFound} alt="NotFound" />
            <p className="text-xl text-headingColor font-semibold my-2 ">Items Not Available</p>
          </div>
        )}
      </div>
    </>
  );
};

export { RowContainer };
