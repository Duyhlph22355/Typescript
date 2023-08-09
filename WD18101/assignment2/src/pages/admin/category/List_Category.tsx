import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const List_Category = (props: any) => {
    console.log(props.cate);
    
  const [cate, setCate] = useState([]);
    useEffect(()=>{
      setCate(props.cate)
    },[props.cate])
    const handleDelete = (id: number) => {
      props.deleteCategory(id);
    };
  return (
    <div>
         <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-normal px-4 py-2 font-medium text-gray-900">
                #
              </th>
              <th className="whitespace-normal px-4 py-2 font-medium text-gray-900">
                Tên danh mục
              </th>
              <th className="whitespace-normal px-4 py-2 font-medium text-gray-900">
                <Link
                  className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                  to={`/admin/cate-add`}
                >
                  Thêm Mới
                </Link>
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {cate.map((item: any, index) => {
              return (
                <tr key={index + 1}>
                  <td className="whitespace-normal px-4 py-2 font-medium text-gray-900">
                    {item.id}
                  </td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700">
                    {item.name}
                  </td>
                  <td className="whitespace-normal px-4 py-2">
                    <Link
                      to={`/admin/cate-edit/${item.id}`}
                      className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                      Sửa
                    </Link>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default List_Category