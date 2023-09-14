import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin,} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
import resume from '../Navbar/DENZYTECH.docx'
import ScrollToTop from "react-scroll-to-top";
import logo from '../../assets/WhatsApp_Image_2023-09-13_at_21.39.36-removebg-preview.png'
import {FaHome} from 'react-icons/fa'
import {AiOutlineBook} from 'react-icons/ai'
import {GiSkills} from 'react-icons/gi'
import {MdWorkOutline} from 'react-icons/md'
import {IoIosContact} from 'react-icons/io';
import {BsFillInfoCircleFill} from 'react-icons/bs'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
  
    <div className='fixed w-full h-[150px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <ScrollToTop className='scroll' smooth top= '20'
           width='40px'
        />
        <div>
            {/* <h1 className='text-5xl ml-2 font-signature' style={{color: '#E31B6D', marginTop:  '1rem'}}>DT</h1> */}
            <Link to="home" smooth={true} duration={500}>
            <img src={logo} alt="" className='w-[9rem] pt-1 ml-1' />
            </Link>
            
            
        </div>
            <ul className='hidden md:flex'>
                <li className='hover:text-xl hover:text-pink-400'>
                  <Link to="home" smooth={true} duration={500}>
                    Home
                  </Link>
                </li>
                <li className='hover:text-xl hover:text-pink-400'>
                <Link to="about" smooth={true} duration={500}>
                    About
                </Link>
                </li>
                <li className='hover:text-xl hover:text-pink-400'>
                <Link to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
                </li>
                <li className='hover:text-xl hover:text-pink-400'>
                <Link to="work" smooth={true} duration={500}>
                    Work
                </Link>
                </li>
                <li className='hover:text-xl hover:text-pink-400'>
                <Link to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
                </li>
                <li className='hover:text-xl hover:text-pink-400'>
                <Link to="Resume" smooth={true} duration={500}>
                    Resume
                </Link>
                </li>
            </ul>
        

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars/> : <FaTimes/>}  
        </div>
        {/* Mobile menu */}
    <ul className= {!nav ? 'hidden': 'absolute top-0 left-o w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-3xl hover:text-4xl hover:text-pink-400'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500} className='flex gap-2'>
                <FaHome/>Home
            </Link>
            </li>
            <li className='py-6 text-3xl hover:text-4xl hover:text-pink-400'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500} className='flex gap-2'>
                  <AiOutlineBook/>  About
            </Link>
            </li>
            <li className='py-6 text-3xl hover:text-4xl hover:text-pink-400'>
            <Link onClick={handleClick} to="skills" smooth={true} duration={500} className='flex gap-2'>
                   <GiSkills/> Skills
            </Link>
            </li>
            <li className='py-6 text-3xl hover:text-4xl hover:text-pink-400'>  
            <Link onClick={handleClick} to="work" smooth={true} duration={500} className='flex gap-2'>
                   <MdWorkOutline/> Work
            </Link>
            </li>
            <li className='py-6 text-3xl hover:text-4xl hover:text-pink-400'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500} className='flex gap-2'>
                  <IoIosContact/>  Contact
            </Link>
            </li>
            <li className='py-6 text-3xl hover:text-4xl hover:text-pink-400'>
            <Link onClick={handleClick} to="Resume" smooth={true} duration={500} className='flex gap-2'>
                  <BsFillInfoCircleFill/>  Resume
            </Link>
            </li>
        </ul>

        {/* Social icons */}
        <div className=' hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 '>
              <a className='flex justify-between items-center w-full text-gray-300' 
              href="https://www.linkedin.com/" target='-blank'>
                Linkedin <FaLinkedin size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] '>
              <a className='flex justify-between items-center w-full text-gray-300' 
              href="https://github.com/Denyifa007" target='-blank'>
                Github <FaGithub size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] '>
              <a className='flex justify-between items-center w-full text-gray-300' 
              href="mailto:denyifsamuela@hotmail.com">
                Email <HiOutlineMail size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] '>
              <a className='flex justify-between items-center w-full text-gray-300' 
              href={resume} download>
                Resume <BsFillPersonLinesFill size={30}/>
              </a>
            </li>
          </ul>

        </div>

    </div>
  )
}

export default Navbar