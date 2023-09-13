import React from 'react'
import imageDen from '../assets/denyifatech2.png'
import {MdWorkOutline} from 'react-icons/md'
import {FaUserTie} from 'react-icons/fa'
import {FaLanguage} from 'react-icons/fa'
import {BiStar} from 'react-icons/bi'
import {FaRegHandPeace} from 'react-icons/fa'

const Resume = () => {
  return (
    <div name='Resume' className='w-full bg-[#0a192f] text-gray-300 sm: pt-32'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <div className='sm:text-right pb-8 pl-4'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            Resume
          </p>
        </div>
        <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 pt-10 gap-8 px-4'>
          <div className=''>
            <img src={imageDen} alt="" className='w-[27.5rem] h-[34.5rem]' />
          </div>
          <div id='denzy'>
            <p className='text-5xl text-gray-300 font-bold '>OYEINDENYIFA SAMUEL DIEGBEGHA </p> 
            <p className='text-3xl pt-2 '>Software Developer</p> 
            <p className='text-md'>Address: Bayelsa, Nigeria</p>
            <p className='text-md'>Phone: +234 806-766-8288</p>
            <a href="mailto:denyifasamuel@hotmail.com" target="_blank" rel="noopener noreferrer">
                          <p className='text-md'>Email: denyifasamuel@hotmail.com</p>
            </a>
            <h1 className='text-3xl flex gap-4 font-semibold pt-5'><FaUserTie/>Career Objective</h1>
            <br />
            <hr className='border-b-1 border-pink-600' />
            <p>A motivated individual with in-depth knowledge of languages and development tools, seeking a position in a growth-oriented company where I can use my skills to the advantage of the company while having the scope to develop my own skills.</p>
            <hr className='border-b-1 border-pink-600' />


          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 pt-10 gap-8 px-4'>
          <div className='pt-4 sm:text-right'>
            <p className='text-4xl flex gap-4 font-semibold'><FaLanguage/> Language Proficency</p>
            <p className='text-2xl flex gap-3 pt-3'>English  <span className='flex gap-2'> <BiStar/> <BiStar/> <BiStar/> <BiStar/> <BiStar style={{'color': 'black'}}/></span></p>
            
          </div>
          <div id='denzy'>
            <p className='text-4xl flex font-semibold gap-4'><MdWorkOutline/>Work History</p>
            <br />
            <hr className='border-b-1 border-pink-600' />
            <p className='text-2xl pt-2'>Web Developer @ Tech Studio</p>
            <p className='pt-2'>Designed and built static and dynamic webpages with multiple functionalities including Crypto Web, E-commerce, a Blog and a Furniture Management website. FullStack: HTML, CSS, Tailwind, JavaScript, ReactJS, Bootstrap, Python and Django</p>
            <hr className='border-b-1 border-pink-600' />
          </div>
        </div>
    </div>
    <div className='w-full h-screen flex justify-center pt-10 px-4 '>
      <div className='flex flex-col max-w-[600px] w-full '>
      <p className='text-4xl  flex gap-4 text-center font-bold'><FaRegHandPeace/> Declaration</p>
      <p className='text-xl pt-5'>The information contained in this website is for general information purposes only. 
        The information is provided by me and while I endeavour to keep the information up to date and correct,
         I make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, 
         suitability or availability with respect to the website or the information, products, services, or related graphics contained 
         on the website for any purpose. 
        Any reliance you place on such information is therefore strictly at your own risk.</p>
        <p className='oyein pt-10 text-center text-3xl text-red-400'>Oyeindenyifa Samuel Diegbegha</p>
        </div>
    </div>
  </div>
  
  
 
  )
}

export default Resume