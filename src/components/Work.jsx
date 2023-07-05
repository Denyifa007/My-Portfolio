import React from 'react'
import WorkImg from '../assets/workimg2.png'
import DenzyImg from '../assets/Denzyimg.png'
import Denzyrealestate from '../assets/denzyrealestate.png'
import Denzyhotel from '../assets/Denzyhotel.png'
import Abamufarms from '../assets/Abamufarm.png'
import Portfolio2 from '../assets/Portfolio2.png'


const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300  bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>

        <div  
        className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* Grid item */}
            <div style={{backgroundImage: `url(${WorkImg})`}}
             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hover effect */}

                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white
                     tracking-wider'> React JS Application

                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://denzycrypto.netlify.app/" target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/Denyifa007/denzycrypto.git" target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${DenzyImg})`}}
             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hover effect */}

                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white
                     tracking-wider'> Reat js Application

                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://denzy-movie-app.vercel.app/" target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/Denyifa007/Denzy-movie-app" target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${Denzyrealestate})`}}
             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hover effect */}

                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white
                     tracking-wider'> React js Application

                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://real-estate-project-gilt.vercel.app/" target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/Denyifa007/Real-estate-project.git" target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${Denzyhotel})`}}
             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hover effect */}

                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white
                     tracking-wider'>  React JS Application

                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://denzy-hotel-app.vercel.app/" target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/Denyifa007/Denzy-Hotel-app.git" target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${Abamufarms})`}}
             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hover effect */}

                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white
                     tracking-wider'>  React JS Application

                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://abamu-farms.vercel.app/" target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/Denyifa007/Abamu-farms.git" target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${Portfolio2})`}}
             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                {/* Hover effect */}

                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white
                     tracking-wider'>  React JS Application

                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://denzyportfolio2.netlify.app/" target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="https://github.com/Denyifa007/portfolio2.git" target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Work