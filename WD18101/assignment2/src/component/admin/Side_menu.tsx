import { Link } from "react-router-dom";

const Side_menu = () => {
  return (
    <div>
        <div className="flex h-screen flex-col justify-between border-e bg-white">
  <div className="px-4 py-6">
    <ul className="mt-6 space-y-1">
      <li>
        <Link
          to={`products`}
          className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
          Product
        </Link>
      </li>
      <li>
        <Link
          to={`category`}
          className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
          Category
        </Link>
      </li>
      <li>
        <Link
          to={`user`}
          className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
          User
        </Link>
      </li>
    </ul>
  </div>

    </div>
    </div>
  )
}

export default Side_menu