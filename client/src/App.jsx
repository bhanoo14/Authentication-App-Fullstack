import './App.css'
import Header from './component/Header'
import Login from './component/login'
import Signup from './component/Signup'
import Footer from './component/Footer'
import Quote from './component/Quote'
import HomepageX from './component/HomepageX'
import {Outlet, Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom"

function App() {

  return (
    <>
        <Header />
          <main className="flex-grow flex items-center justify-center">
            <Outlet />
          </main>
        <Footer />
    </>
  )
}


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path= '/' element={<App />}>
      <Route path = "/" element = { < HomepageX />} />
      <Route path = "/quote" element = { < Quote />} />
      <Route path = "/api/user/login" element = { < Login /> } />
      <Route path = "/api/user/signup" element = { < Signup /> } />
    </Route>
  )
)