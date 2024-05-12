import React, { Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './Components/General/Header';
import Footer from './Components/General/Footer';
import Loader from './Components/General/Loader';

// Lazy loading components
const Home = React.lazy(() => import('./Pages/Home'));
const Login = React.lazy(() => import('./Pages/Login'));
const Signup = React.lazy(() => import('./Pages/Signup'));
const Learn = React.lazy(() => import('./Pages/Learn'));
const Profile = React.lazy(() => import('./Pages/Profile'));
const Register = React.lazy(() => import('./Components/Modules/Register'));
const Wrapper = React.lazy(() => import('./Learn/ModuleOne/Wrapper'));
const Editor = React.lazy(() => import('./Pages/Editor'));

const App = () => {
  return (
    <HashRouter>
      <div><Toaster/></div>
      <div className='fixed w-full container mx-auto z-10 backdrop-blur-2xl'>
        <Header />
      </div>
      <div className='pt-20 mx-3'>
        <Suspense fallback={<div>
          <Loader />
        </div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/learn/register/:moduleID" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/learn/html-css/:lessonID" element={<Wrapper />} />
            <Route path='/code-editor' element={<Editor />} />
          </Routes>
        </Suspense>
      </div>
      <div className='mt-72'>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
