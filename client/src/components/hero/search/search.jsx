import {LuLuggage} from 'react-icons/lu'
import {FaCalendarAlt} from 'react-icons/fa'
import { GoPerson } from 'react-icons/go'
import {AiOutlineSearch} from 'react-icons/ai'
import { DateRange } from 'react-date-range';
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
const Search = () => {
  const [openDate, setOpenDate] = useState(false)
  const [openOptions,setOpenOptions] = useState(false)
  const [option, setOptions] = useState({
    adult: 1,
    children: 1,
    room:1
  })
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const handleOption = (name, operation) => {
    setOptions(prev => {
      return {
        ...prev,
        [name]: operation === 'i' ? option[name] + 1 : option[name] - 1
        
      }
    })
  }
  return (
    <div className="container mx-auto  border-yellowColor bg-lightPurpleText h-20 rounded-lg relative -mt-10 max-w-container">
      <div className="flex flex-row justify-between items-center pt-4 px-5 ">
        <div className='flex justify-center items-center gap-1 bg-white text-center px-3 rounded-lg border border-gray-300'>
          <span className='text-purpleText text-xl'>
            <LuLuggage />
          </span>
          <input placeholder='where to' className='p-2 font-medium text-lg  outline-none placeholder:text-base placeholder:text-purpleText'/>

        </div>
        <div className='flex justify-center items-center gap-1 flex-row flex-1 rounded-lg'>
          <span className='text-purpleText text-xl'>
            
            <span onClick={()=>setOpenDate(!openDate)} className='text-sm font-medium flex justify-center items-center gap-2 bg-white w-72 p-3 rounded-lg'><FaCalendarAlt className='text-xl'  />{`${format(state[0].startDate,"MM/dd/yyyy")} - ${format(state[0].endDate,"MM/dd/yyyy")}`}</span>
              
            {openDate&&<DateRange
              editableDateInputs={true}
              onChange={item => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
              className='bg-gray-50 font-bold text-sm text-purpleText absolute top-16 rounded-lg'
            />}
            
          </span>

        </div>
        <div className=' w-72 flex flex-row justify-center items-center bg-white rounded-lg relative'>
          <span className='text-purpleText text-xl'>
            <GoPerson />
          </span>
          <span onClick={()=>setOpenOptions(!openOptions)} className='p-3 text-purpleText text-sm font-medium cursor-pointer'>{`${option.adult} ${option.adult > 1? 'adults':'adult'} . ${option.children} ${option.children >1 ? "children":"child"} . ${option.room} ${option.room > 1 ? 'rooms' : 'room'} `}</span>
          {openOptions&&<div className='absolute top-14 bg-gray-50 p-10 rounded-lg capitalize'>
            <div className=' flex gap-2 justify-center items-center mb-2 '>
              <span>adult</span>
              <button disabled={option.adult<=1} onClick={()=>handleOption("adult","d")} className=' w-5  py-.5 rounded-md cursor-pointer text-sky-800 text-center font-bold ml-14'>-</button>
              <span className='font-semibold'>{ option.adult}</span>
              <button onClick={()=>handleOption("adult","i")} className=' w-5  py-.5 rounded-md cursor-pointer text-sky-800 text-center font-bold'>+</button>
            </div>
            <div className=' flex gap-2 justify-center items-center mb-2'>
              <span>children</span>
              
              <button disabled={option.children<=1} onClick={()=>handleOption("children","d")} className='b   w-5  py-.5 rounded-md cursor-pointer text-sky-800 text-center font-bold ml-9'>-</button>
              <span className='font-semibold'>{option.children}</span>
              <button onClick={()=>handleOption("children","i")} className='w-5  py-.5 rounded-md cursor-pointer text-sky-800 text-center font-bold'>+</button>
            </div>
            <div className=' flex gap-2 justify-center items-center'>
              <span>room</span>
              <button disabled={option.room<=1} onClick={()=>handleOption("room","d")} className='w-5  py-.5 rounded-md cursor-pointer text-sky-800 text-center font-bold ml-14'>-</button>
              <span className='font-semibold'>{option.room}</span>
              <button onClick={()=>handleOption("room","i")} className='   w-5  py-.5 rounded-md cursor-pointer text-sky-800 text-center font-bold'>+</button>
            </div>
            <div>
             <button onClick={()=>setOpenOptions(!openOptions)} className=" w-full mt-3 rounded-lg px-6 py-2 border border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-green-100 duration-300 flex gap-1 justify-center items-center">Done</button>
        </div>
            
          </div>}

        </div>
        <div>
          <button className="ml-20  rounded-lg px-10 py-3 border-2 bg-yellowColor border-yellowColor text-purpleText font-medium duration-300 flex gap-1 justify-center items-center"><AiOutlineSearch className='text-lg'/> Search</button>
        </div>
      </div>
    </div>
  )
}

export default Search