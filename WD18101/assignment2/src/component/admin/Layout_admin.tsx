import Header_admin from './Header_admin'
import { Outlet } from 'react-router-dom'
import Side_menu from './Side_menu'

const Layout_admin = () => {
  return <>
          <Header_admin></Header_admin>
        <div className='flex flex-row'>
          <div className='w-2/12'>
          <Side_menu></Side_menu>
          </div>
          <div className='w-10/12'>
        <Outlet></Outlet>
          </div>
        </div>
  </>
}

export default Layout_admin