import image from '../../assets/travel.svg'
import { Link } from 'react-router-dom'
import { BiChevronDown } from 'react-icons/bi'
import {TbArrowUpRight} from 'react-icons/tb'
// import './hero.css'
const Hero = () => {
  return (
    // <div className='h-[50vh] w-full bg-black background-image object-cover'>

    // </div>
    <div className=''>
      <div className='container w-full h-[70vh] mx-auto max-w-container'>
      <div className='flex flex-col lg:flex-row justify-between '>
          <div className='flex flex-col'>
            <div>
              <header className='w-full flex flex-col font-medium top-0 z-50 p-4'>
                <nav className='flex justify-between items-center flex-row w-full mb-10' >
                  <p className="flex justify-items-start text-lg font-medium">Minah <span className="text-white ml-2">Travels</span></p>
                  <div className=" md:hidden xs:inline-flex lg:inline-flex">

                  </div>
                  <div className="hidden md:inline-flex">
                    <ul className='flex flex-row gap-2 justify-items-end'>
                      <Link href="#" className='py-1.5 px-2 text-sm cursor-pointer hover:underline hover:underline-offset-4' >
                        <li>home</li>
                      </Link>
                      <Link href="#" className='py-1.5 px-2 text-sm cursor-pointer hover:underline hover:underline-offset-4' >
                        <li>contact</li>
                      </Link>
                      <a href="/Christine_Nyaga_Resume (1).pdf" target="_blank"><button type='button' className='text-sm text-center border p-2 rounded-md  border-white text-white'>Login/register</button>
                      </a>
                    </ul>
                  </div>
                </nav>
              </header>
            </div>
            <div className='justify-start flex flex-col items-center mt-20'>
              <h1 className='md:text-6xl   
                text-blueText '>Find the best hotels <br /> <span className='text-blueText 
              '>anywhere you go</span></h1>
              <p className=' p-2 text-purpleText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere</p>

            </div>
            <div className='flex '>
              <button className='flex items-center bg-yellowColor m-3 py-4 px-10 rounded-md w-[10vw hover:bg-white hover:border-2 hover:border-yellowColor'>Explore now <BiChevronDown className='text-xl'/></button>
              <button className=' flex items-center border-2 border-yellowColor m-3 py-4 px-10 rounded-md w-[10vw font-medium text-purpleText hover:bg-yellowColor '>Login/signup <TbArrowUpRight className='text-yellowColor text-lg'/></button>
            </div>
            
          </div>
          
        <div className=' w-full h-full'>
          <img src={image} />
        
        </div>
      </div>

    </div>

    </div>

  )
}

export default Hero