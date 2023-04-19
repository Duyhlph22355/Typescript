import React from 'react'

type Props = {}

const Admin_Vertical = (props: Props) => {
    return <>
        <nav aria-label="Main Nav" className="flex flex-col">
            <a
                href=""
                className="flex items-center gap-2 border-l-[3px] border-blue-500 bg-blue-50 px-4 py-3 text-blue-700"
            >
                

                <span className="text-sm font-medium"> Sản Phẩm Chung </span>
            </a>

            <a
                href=""
                className="flex items-center gap-2 border-l-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
            >
                

                <span className="text-sm font-medium"> Laptop </span>
            </a>

            <a
                href=""
                className="flex items-center gap-2 border-l-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
            >
                

                <span className="text-sm font-medium"> Máy Tính Bảng </span>
            </a>

            <a
                href=""
                className="flex items-center gap-2 border-l-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
            >
                

                <span className="text-sm font-medium"> Âm Thanh </span>
            </a>

        </nav>

    </>
}

export default Admin_Vertical