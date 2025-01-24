import React from 'react'

function Background() {
  return (
    <div className='h-screen w-full  fixed z-[2]'>
      <nav className=' w-full py-10 flex justify-center'><h2 className='font-xl text-zinc-200 font-semibold'>Documents</h2></nav>
      <h1 className='text-[13vw] absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-400 leading-none tracking-tighter'>Docs.</h1>
    </div>
  )
}

export default Background
