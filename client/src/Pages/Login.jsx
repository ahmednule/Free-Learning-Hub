import Header from '../Components/General/Header'
import Footer from '../Components/General/Footer'
import LoginComponent from '../Components/Auth/LoginComponent'

const Login = () => {
  return (
    <div>
      <div className="fixed w-full container mx-auto z-10 backdrop-blur-2xl">
        <Header />
      </div>
      <div className='pt-44'>
        <LoginComponent />
      </div>
      <div className='mt-32'>

      </div>
      <div className='mt-32 px-3'>
        <Footer />
      </div>
    </div>
  )
}

export default Login