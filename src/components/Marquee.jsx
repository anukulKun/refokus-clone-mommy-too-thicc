import React from 'react'

function Marquee({imagesurls}) {
  return (
    <div className='gap-20 flex py-8 w-full whitespace-nowrap overflow-hidden'>
      {imagesurls.map((url, index) => <img key={index}  src={url} className='flex-shrink-0 w-[6vw]' />)}
      {imagesurls.map((url, index) => <img  key={index} src={url} className='flex-shrink-0' />)}
    </div>
  )
}

export default Marquee
