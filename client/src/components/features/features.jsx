import SupportIconImage from "../../assets/support-icon.svg";
import ShieldIconImage from "../../assets/shield-icon.svg";
import CustomizeIconImage from "../../assets/customize-icon.svg";
  const cards = [
    {
      imageSrc: ShieldIconImage,
      title: "Secure",
      description: "We strictly only deal with vendors that provide top notch security.",
      url: "https://timerse.com"
    },
    {
      imageSrc: SupportIconImage,
      title: "24/7 Support",
      description: "Lorem ipsum donor amet siti ceali placeholder text",
      url: "https://google.com"
    },
    {
      imageSrc: CustomizeIconImage,
      title: "Customizable",
      description: "Lorem ipsum donor amet siti ceali placeholder text",
      url: "https://reddit.com"
    }
  ]
const Features = () => {
  return (
    <div className='relative container mx-auto max-w-container'>
      <div className='max-w-screen-xl mx-auto py-20 lg:py-24'>
        <div className='mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto'>
          {cards.map((card, i) => (
            <div key={i} className='lg:w-1/3 max-w-containerxs'>
              <div className='flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105'>
                <span className='text-center rounded-full p-4 bg-gray-100'>
                   <img src={card.imageSrc} className='w-8 h-8' alt="" />
                </span>
                <span className='mt-4 font-bold text-xl leading-none'>{ card.title}</span>
                <p className='mt-4 text-sm font-medium text-secondary-300'>{card.description }</p>

                </div>
            </div>
          ))}
        </div>

      </div>
      
    </div>
  )
}

export default Features