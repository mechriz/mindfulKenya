import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Growing up today isn’t easy. Between school pressures, family expectations, and the constant buzz of social media, it’s normal to feel overwhelmed sometimes. At BetterHelp, we believe every young person in Kenya deserves a safe space to talk, heal, and grow. Whether you’re struggling with stress, anxiety, or just trying to figure out who you are, connecting with a caring therapist can make a real difference. With online counseling that’s private, flexible, and affordable, you don’t have to face life’s challenges alone because support is just a click away.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+254745569447</li>
            <li>mindfulkenya@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @ MindfulKenya.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
