import Footer from '../Components/General/Footer'
import Header from '../Components/General/Header'
import Modules from '../Components/General/Modules'

const Learn = () => {
  return (
    <div>
      <div className="fixed w-full container mx-auto z-10 backdrop-blur-2xl">
        <Header />
      </div>
      <div className='px-3 pt-16'>
        <Modules />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Learn