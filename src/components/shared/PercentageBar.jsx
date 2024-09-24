import React from 'react'

const PercentageBar = () => {
  return (
    <div className='w-full'>
        <h2 className='mb-3 text-lg font-medium text-white'>Content Strategy 90%</h2>

        <div className="bg-[#aaa2] h-5 w-full">
            <div className="w-[90%] h-full bg-mainGray"/>
        </div>
    </div>
  )
}

export default PercentageBar