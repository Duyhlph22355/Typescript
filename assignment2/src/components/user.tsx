import { Outlet } from 'react-router-dom'
import Slider from './user/slideshow'
import Footer from './user/footer'
import Header from './user/header'

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