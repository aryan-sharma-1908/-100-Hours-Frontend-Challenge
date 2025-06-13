import React from 'react'

const Card = (props) => {
  return (
    <>
     <div className='flex bg-white w-50 h-60 rounded flex-col justify-center items-center py-2 space-y-1.5'>
        <img src={props.url} className='w-9/10 h-8/10 '/>
        <h1 className=' text-black font-extrabold font-mono'>{props.name}</h1>
    </div>    
    </>
   
  )
}

export default Card
