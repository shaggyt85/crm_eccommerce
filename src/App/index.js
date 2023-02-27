import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Header } from '../components/Header';
import { MainContainer } from '../components/MainContainer'
import { CreateContainer } from '../components/CreateContainer'
import { useStateValue } from '../context/StateProvider';
import { getAllFoodItems } from '../utils/firebaseFunction';
import { actionType } from '../context/reducer';

function App() {
   const [{foodItems}, dispatch] = useStateValue()

   const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data
      })
      console.log(data, 'data index fetch')
    })
   }

   useEffect(() => {
    fetchData()
   }, [])

  return (
    <>
    <AnimatePresence mode='wait'>
      <div className='w-screen h-auto flex flex-col bg-primary'>
        <Header />
        <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
          <Routes>
            <Route path='/*' element={<MainContainer />} />
            <Route path='/createItem' element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
      </AnimatePresence>
    </>
  );
}

export default App;
