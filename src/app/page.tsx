'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {

  const [billAmount, setBillAmount] = useState(0)
  const [tipPercentage, setTipPercentage] = useState(0)
  const [numberOfPeople, setNumberOfPeople] = useState(0)
  const [tipAmount, setTipAmount] = useState(0)
  const [total, setTotal] = useState(0)
  console.log(billAmount)
  console.log(tipAmount)

  const resetAll = () => {
    setBillAmount(0)
    setTipPercentage(0)
    setNumberOfPeople(0)
    setTipAmount(0)
    setTotal(0)
  }

  return (
    <main className='bg-[#c5e4e7] flex flex-col md:justify-center items-center md:min-h-screen'>

      {/* App Name */}
      <div className='flex flex-col text-[#00494d] font-mono text-xl font-semibold tracking-[0.5rem] mt-10 md:mt-0'>
        <p>SPLT</p>
        <p>TTER</p>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 bg-white max-w-[700px] w-full mt-10 p-5 rounded-t-3xl md:rounded-xl'>

        {/* Left */}
        <div className='flex flex-col gap-7'>
          <div className='flex flex-col gap-1'>
            <p className='font-mono font-semibold text-gray-700'>Bill</p>
            <div className='flex bg-slate-200 gap-1 justify-between items-center px-4 rounded-lg'>
              <Image src='/images/icon-dollar.svg' alt='person' width={5} height={5} className='text-white w-3 h-5'/>
              <input type="text" className='bg-inherit w-full h-10 outline-none text-end text-[#00494d] font-semibold font-mono text-xl' value={billAmount} onChange={(e) => setBillAmount(e.target.value)}/>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <p className='font-mono font-semibold'>Select Tip %</p>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='bg-[#00494d] text-center py-2 rounded-md text-white font-mono text-xl font-semibold cursor-pointer hover:bg-[#26c0ab] hover:text-gray-800 z-0'>
                <p onChange={(e) => setTipPercentage(e.target.value)} className='z-10'>5%</p>
              </div>
              <div className='bg-[#00494d] text-center py-2 rounded-md text-white font-mono text-xl font-semibold cursor-pointer hover:bg-[#26c0ab] hover:text-gray-800'>
                <p onChange={(e) => setTipPercentage(e.target.value)}>10%</p>
              </div>
              <div className='bg-[#00494d] text-center py-2 rounded-md text-white font-mono text-xl font-semibold cursor-pointer hover:bg-[#26c0ab] hover:text-gray-800'>
                <p onChange={(e) => setTipPercentage(e.target.value)}>15%</p>
              </div>
              <div className='bg-[#00494d] text-center py-2 rounded-md text-white font-mono text-xl font-semibold cursor-pointer hover:bg-[#26c0ab] hover:text-gray-800'>
                <p onChange={(e) => setTipPercentage(e.target.value)}>25%</p>
              </div>
              <div className='bg-[#00494d] text-center py-2 rounded-md text-white font-mono text-xl font-semibold cursor-pointer hover:bg-[#26c0ab] hover:text-gray-800'>
                <p onChange={(e) => setTipPercentage(e.target.value)}>50%</p>
              </div>
              <div>
                <input type="text" placeholder='custom' className='bg-slate-200 w-full outline-none text-end text-[#00494d] font-semibold font-mono text-xl rounded-lg px-3 h-full' value={tipPercentage} onChange={(e) => setTipPercentage(e.target.value)}/>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='font-mono font-semibold text-gray-700'>Number of People</p>
            <div className='flex bg-slate-200 gap-1 justify-between items-center px-4 rounded-lg'>
              <Image src='/images/icon-person.svg' alt='person' width={10} height={10} className='text-white w-4 h-4'/>
              <input type="text" className='bg-inherit w-full h-10 outline-none text-end text-[#00494d] font-semibold font-mono text-xl' value={numberOfPeople} onChange={(e) => setNumberOfPeople(e.target.value)}/>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className='bg-[#00494d] p-5 rounded-lg flex flex-col gap-5 justify-between text-white'>
          <div className='flex flex-col gap-7 mt-5'>
            <div className='flex justify-between gap-2 items-center'>
              <div>
                <p className='text-sm'>Tip Amount</p>
                <p className='text-xs text-slate-200'>/ person</p>
              </div>
              <p className='text-4xl font-mono font-semibold text-[#26c0ab]'>{`$${tipAmount}`}</p>
            </div>
            <div className='flex justify-between gap-2 items-center'>
              <div>
                <p className='text-sm'>Total</p>
                <p className='text-xs text-slate-200'>/ person</p>
              </div>
              <p className='text-4xl font-mono font-semibold text-[#26c0ab]'>{`$${total}`}</p>
            </div>
          </div>
          <div className='bg-[#26c0ab] rounded py-2 text-center text-gray-900 font-semibold uppercase cursor-pointer' onClick={resetAll}>
            Reset
          </div>
        </div>
      </div>
    </main>
  )
}
