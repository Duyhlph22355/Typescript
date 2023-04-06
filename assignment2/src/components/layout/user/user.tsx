import { Outlet } from 'react-router-dom'
import Slider from './slideshow'
import Footer from './footer'
import Header from './header'

const UserLayout = () => {
    return <>
        
        <Header></Header>

        <div className='container mx-auto px-[65px]'>

            <Slider></Slider>

            <Outlet />

        </div>

        <Footer></Footer>
        
    </>
}

export default UserLayout