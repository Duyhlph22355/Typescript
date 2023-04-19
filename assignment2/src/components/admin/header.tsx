import { Link } from "react-router-dom"

const Admin_Header = () => {
    return <>
        <header aria-label="Site Header" className="">
            <div
                className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4"
            >
                <div className="flex items-center gap-4">

                </div>
                <a href="#">
                    <span className="h-10 w-20 rounded-lg bg-gray-200"></span>
                </a>

                <form className="mb-0 hidden lg:flex">
                    <div className="relative">
                        <input
                            className="w-[500px] h-10 rounded-lg border-gray-200 pr-10 text-sm placeholder-gray-300 focus:z-10"
                            placeholder="Search..."
                            type="text"
                        />

                        <button
                            type="submit"
                            className="absolute inset-y-0 right-0 rounded-r-lg p-2 text-gray-600"
                        >
                            <span className="sr-only">Submit Search</span>
                            <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    clip-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    fill-rule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </form>
                <div className="hidden items-center gap-4 lg:flex">
                    <Link
                        to="#"
                        className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white"
                    >
                        Log out
                    </Link>
                </div>
            </div>

            <div className="border-t border-gray-100 lg:hidden">
                <nav
                    className="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium"
                >
                    <a className="flex-shrink-0 pl-4 text-gray-900" href="">About</a>
                    <a className="flex-shrink-0 pl-4 text-gray-900" href="">Blog</a>
                    <a className="flex-shrink-0 pl-4 text-gray-900" href="">Projects</a>
                    <a className="flex-shrink-0 pl-4 text-gray-900" href="">Contact</a>
                </nav>
            </div>
        </header>

    </>
}

export default Admin_Header