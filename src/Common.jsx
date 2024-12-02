import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Slice/counterSlice'

const Common = () => {

    const MyData = useSelector((state)=>state.StoreData.value)

    const dispatch = useDispatch()

    const add =()=>{

      dispatch(increment())
    }

    const remove =()=>{

      dispatch(decrement())
    }



  return (
    <>
    
    <div className="div w-[600px] h-[480px] rounded-[10px] bg-transparent shadow-[0px_0px_35px_5px_#ffffff] flex flex-col justify-center items-center">
  <div className='text-[50px] font-mono font-extrabol text-white' > {MyData} </div>

  <div className="buttons flex gap-6 mt-8"> 
 <button onClick={add} className='py-1 px-8  bg-blue-400    hover:bg-green-500 font-serif font-medium  text-[25px] text-[#000]  '> + </button>
 <button onClick={remove} className='py-1 px-8 bg-blue-400    hover:bg-red-500 font-serif font-medium text-[25px] text-[#000] '> - </button>

  </div>

  </div> 
    
    </>
  )
}

export default Common