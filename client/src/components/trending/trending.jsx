import nairobi from '../../assets/nairobi.jpg'
import toronto from '../../assets/toronto.jpg'
import dubai from '../../assets/dubai.jpg'
import diani from '../../assets/diani.jpg'
import mombasa from '../../assets/mombasa.jpg'
const Trending = () => {
  return (
    <div className='container mx-auto mt-10 max-w-container'>
      <div className='flex flex-col'>
        <div>
          <h1 className="font-semibold text-xl">Trending destinations</h1>
          <p className="font-base">Most popular choices for travelers from Kenya</p>
        </div>
        <div className="flex flex-col gap-10  ">
          <div className="flex flex-row gap-4 relative ">
            <div className="bg-gradient-to-tr from-slate-400 to-stone-900 rounded-xl">
              <img src={nairobi} className='h-[30vh] w-[35vw] object-cover rounded-xl mix-blend-overlay' />
            </div>
            <div className="bg-gradient-to-tr from-slate-500 to-neutral-800 rounded-xl">
              <img src={mombasa} className='h-[30vh] w-[35vw] object-cover rounded-xl mix-blend-overlay ' />
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <div className="bg-gradient-to-tr from-slate-500 to-neutral-700 rounded-xl">
              <img src={toronto} className='h-[30vh] w-[20w] object-cover rounded-xl mix-blend-overlay' />
            </div>
            <div className="bg-gradient-to-tr from-slate-500 to-neutral-700 rounded-xl">
              <img src={diani} className='h-[30vh] w-[20w] object-cover rounded-xl mix-blend-overlay' />
            </div>
            <div className="bg-gradient-to-tr from-slate-500 to-neutral-700 rounded-xl">
              <img src={dubai} className='h-[30vh] w-[20w] object-cover rounded-xl mix-blend-overlay' />
            </div>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default Trending