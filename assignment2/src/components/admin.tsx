import { Outlet } from 'react-router-dom'
import Admin_Header from './admin/header'
import Admin_Vertical from './admin/vertical'
import Admin_Footer from './admin/footer'

const AdminLayout = () => {
    return <div className="container mx-auto">
        <Admin_Header></Admin_Header>
        <div className='flex flex-row'>
            <div className='w-2/12'>
                <Admin_Vertical></Admin_Vertical>
            </div>
            <div className='w-10/12'>
                <Outlet />
            </div>
        </div>
        <Admin_Footer></Admin_Footer>
    </div>
}

export default AdminLayout