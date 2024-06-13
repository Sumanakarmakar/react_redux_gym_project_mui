import './Components.css'
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { check_token } from './Redux/AuthSlice';
import Services from './Pages/Services';
import Trainer from './Pages/Trainer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonial from './Pages/Testimonial';
import Blogs from './Pages/Blogs';
import BlogDetails from './Pages/BlogDetails';
import Profile from './Pages/Profile';
import ServiceDetails from './Pages/ServiceDetails';
import Swal from 'sweetalert2';
import JoiningForm from './Pages/JoiningForm';

// ..
AOS.init();

function App() {
  const dispatch = useDispatch()

  function PrivateRoute({ children }) {
    let token = localStorage.getItem('token') || sessionStorage.getItem('token')
    return token !== null && token !== undefined && token !== "" ? (
      children
    ) : (
      Swal.fire({
        title: "Oopss..!!!",
        text: "You have to Log in first to explore",
        icon: "warning"
      }),
      <Navigate to='/login' />
    )
  }

  const public_route = [
    {
      path: "/",
      component: <Home />
    },
    {
      path: '/login',
      component: <Login />
    },
    {
      path: '/registration',
      component: <Registration />
    },
    {
      path: '/services',
      component: <Services />
    },
    {
      path: '/trainer',
      component: <Trainer />
    },
    {
      path: '/testimonial',
      component: <Testimonial />
    }
  ]

  const private_route = [
    {
      path: '/blogs',
      component: <Blogs />
    },
    {
      path: '/blogdetails/:id',
      component: <BlogDetails />
    },
    {
      path: '/profile',
      component: <Profile />
    },
    {
      path: '/servicedetails/:id',
      component: <ServiceDetails />
    },
    {
      path: '/joining/:id',
      component: <JoiningForm />
    }
  ]

  useEffect(() => {
    dispatch(check_token())
  }, [])

  return (
    <>

      <ToastContainer />
      <Router>
        <Routes>
          {
            public_route?.map((route) => {
              return (
                <Route path={route.path} element={route.component} />
              )
            })
          }
          {
            private_route?.map((route) => {
              return (
                <Route path={route.path} element={<PrivateRoute>{route.component}</PrivateRoute>} />
              )
            })
          }
        </Routes>
      </Router>

    </>
  );
}

export default App;
