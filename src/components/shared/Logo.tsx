import React from 'react'

const Logo = ({image, paragraph} : {image: string, paragraph: string}) => {
  return (
    <div className='flex items-center gap-1 mb-1 max-sm:gap-0.5 max-sm:mb-3'>
      <img src="/assets/icons/hashtag-logo.svg" className={` w-12 h-12 ${image}`} alt="hashtag-logo" />
      <h2 className={`text-white text-3xl ${paragraph}`}>Hashgram</h2>
    </div>
  )
}

export default Logo


