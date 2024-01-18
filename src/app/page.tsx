import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-[#c5e4e7] flex flex-col md:justify-center items-center min-h-screen'>

      {/* App Name */}
      <div className='flex flex-col text-[#00494d] font-mono text-xl font-semibold tracking-[0.5rem] mt-10 md:mt-0'>
        <p>SPLT</p>
        <p>TTER</p>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 bg-white max-w-[700px] w-full m-10 p-5 rounded-t-3xl md:rounded-xl'>

        {/* Left */}
        <div className='flex flex-col gap-7'>
          <div className='flex flex-col gap-1'>
            <p className='font-mono font-semibold text-gray-700'>Bill</p>
            <div className='flex bg-slate-200 gap-1 justify-between items-center px-4 rounded-lg'>
              <Image src='/images/icon-dollar.svg' alt='person' width={5} height={5} className='text-white w-3 h-5'/>
              <input type="text" className='bg-inherit w-full h-10 outline-none text-end text-[#00494d] font-semibold font-mono text-xl'/>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <p className='font-mono font-semibold'>Select Tip %</p>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='bg-[#00494d] text-center py-2 rounded-md text-white font-mono text-xl font-semibold cursor-pointer hover:bg-[#26c0ab] hover:text-gray-800'>
                <p>5%</p>
              </div>
              <div className='bg-[#00494d] text-center py-2 rounded-md text-white font-mono text-xl font-semibold cursor-pointer hover:bg-[#26c0ab] hover:text-gray-800'>
                <p>10%</p>
              </div>
              <div className='bg-[#00494d] text-center py-2 rounded-md text-white font-mono text-xl font-semibold cursor-pointer hover:bg-[#26c0ab] hover:text-gray-800'>
                <p>15%</p>
              </div>
              <div className='bg-[#00494d] text-center py-2 rounded-md text-white font-mono text-xl font-semibold cursor-pointer hover:bg-[#26c0ab] hover:text-gray-800'>
                <p>25%</p>
              </div>
              <div className='bg-[#00494d] text-center py-2 rounded-md text-white font-mono text-xl font-semibold cursor-pointer hover:bg-[#26c0ab] hover:text-gray-800'>
                <p>50%</p>
              </div>
              <div>
                <input type="text" placeholder='custom' className='bg-slate-200 w-full h-10 outline-none text-end text-[#00494d] font-semibold font-mono text-xl rounded-lg px-3'/>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='font-mono font-semibold text-gray-700'>Number of People</p>
            <div className='flex bg-slate-200 gap-1 justify-between items-center px-4 rounded-lg'>
              <Image src='/images/icon-person.svg' alt='person' width={10} height={10} className='text-white w-4 h-4'/>
              <input type="text" className='bg-inherit w-full h-10 outline-none text-end text-[#00494d] font-semibold font-mono text-xl'/>
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
              <p className='text-4xl font-mono font-semibold text-[#26c0ab]'>$4.27</p>
            </div>
            <div className='flex justify-between gap-2 items-center'>
              <div>
                <p className='text-sm'>Total</p>
                <p className='text-xs text-slate-200'>/ person</p>
              </div>
              <p className='text-4xl font-mono font-semibold text-[#26c0ab]'>$32.79</p>
            </div>
          </div>
          <div className='bg-[#26c0ab] rounded py-2 text-center text-gray-900 font-semibold uppercase cursor-pointer'>
            Reset
          </div>
        </div>
      </div>
    </main>
  )
}
