import React from 'react'
import {FaGithub, FaLinkedin,} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import resume from '../Contact/DENZYTECH.180936abe7948783c2cc (1).docx'

const Contact = () => {
  return (
    <div name='contact' className=' w-full h-screen bg-[#0a192f] flex justify-center items-center pt-10 px-4'>
        <form action="https://getform.io/f/1b77363a-8d02-4180-988e-fbd9411fb9d1" method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>//Submit the form below or shoot me an Email - <span className='text-red-700' style={{cursor:'pointer'}}>denyifasamuel@gmail.com</span> </p>
                <div className=' flex'> 
                <a className='flex justify-between items-center w-full text-blue-600 hover:text-gray-300 ' 
              href="https://www.linkedin.com/" target='-blank'>
                <FaLinkedin size={30}/>
                </a>
                <a className='flex justify-between items-center w-full text-gray-400 hover:text-gray-100' 
              href="https://github.com/Denyifa007" target='-blank'>
                <FaGithub size={30}/>
                </a>
                <a className='flex justify-between items-center w-full text-red-700 hover:text-gray-300' 
              href="mailto:denyifagmail.com">
                <HiOutlineMail size={30}/>
                </a>
                <a className='flex justify-between items-center w-full text-gray-500 hover:text-gray-300' 
              href={resume} download>
                <BsFillPersonLinesFill size={30}/>
                </a>

                </div>
      
                

            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact