import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
  
const List_User = (props: any) => {
  const [user, setUser] = useState([]);
  const [role, setRole] = useState([]);
    useEffect(()=>{
      setUser(props.user)
      setRole(props.role)
      
    },[props.user, props.role])
    const handleDelete = (id: number) => {
      props.deleteUser(id);
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
                Tên
              </th>
              <th className="whitespace-normal px-4 py-2 font-medium text-gray-900">
                Mật khẩu
              </th>
              <th className="whitespace-normal px-4 py-2 font-medium text-gray-900">
                Vai trò
              </th>
              <th className="whitespace-normal px-4 py-2 font-medium text-gray-900">
                
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {user.map((item: any, index) => {
              return (
                <tr key={index + 1}>
                  <td className="whitespace-normal px-4 py-2 font-medium text-gray-900">
                    {item.id}
                  </td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700">
                    {item.name}
                  </td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700">
                    {item.password}
                  </td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700">
                    {
                      props.role.find((role: any) => role.id === Number(item.roleId))?.name
                    }
                  </td>
                  <td className="whitespace-normal px-4 py-2">
                    <Link
                      to={`/admin/user-edit/${item.id}`}
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

export default List_User