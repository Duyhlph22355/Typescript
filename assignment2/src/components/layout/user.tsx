import {Outlet} from 'react-router-dom'

const UserLayout = () => {
    return <>
        {/* Header */}
        <header className="bg-red-500">
        <div className="container w-3/4  h-[64px] mx-auto flex items-center gap-7">
            <a href="/">      <img className="w-[64px] pl-1" src="/logo.png" alt="" /></a>
            <input className="pl-2 rounded-lg grow h-[34px] " type="text" placeholder="search" />
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /></svg>
            </button>
            <div className="pl-40 ">
                <a href="/login"
                    className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"><button>Login</button></a>
                <a href="/signin"
                    className="inline-block text-sm px-4 py-2 ml-4 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"><button>Sign In</button></a>
            </div>
        </div>

    </header>
        {/* Content */}
        <Outlet/>
        {/* Footer */}
        <footer>
            footer
        </footer>


    </>
}

export default UserLayout