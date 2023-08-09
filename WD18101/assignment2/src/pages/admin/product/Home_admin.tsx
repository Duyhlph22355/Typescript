import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../../types/products";

const Home_admin = (props: any) => {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    setProducts(props.products)
  },[props.products])
  const handleDelete = (id: number) => {
    props.deleteProduct(id);
  };
  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-normal px-4 py-2 font-medium text-gray-900">
                #
              </th>
              <th className="whitespace-normal px-4 py-2 font-medium text-gray-900">
                Tên sản phẩm
              </th>
              <th className="whitespace-normal px-4 py-2 font-medium text-gray-900">
                Ảnh sản phẩm
              </th>
              <th className="whitespace-normal px-4 py-2 font-medium text-gray-900">
                Giá tiền
              </th>
              <th className="whitespace-normal px-4 py-2 font-medium text-gray-900">
                Mô tả
              </th>
              <th className="whitespace-normal px-4 py-2 font-medium text-gray-900">
                Danh mục
              </th>
              <th className="whitespace-normal px-4 py-2 font-medium text-gray-900">
                <Link
                  className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                  to={`/admin/product-add`}
                >
                  Thêm Mới
                </Link>
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {products.map((item: any, index) => {
              return (
                <tr key={index + 1}>
                  <td className="whitespace-normal px-4 py-2 font-medium text-gray-900">
                    {item.id}
                  </td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700">
                    {item.name}
                  </td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700">
                    <img src={item.image} alt="" />
                  </td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700">
                    {item.price}
                  </td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700">
                    {item.desc}
                  </td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700">
                  {
                      props.cate.find((cate: any) => cate.id === Number(item.categoryId))?.name
                    }
                  </td>
                  <td className="whitespace-normal px-4 py-2">
                    <Link
                      to={`/admin/product-edit/${item.id}`}
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
    </>
  );
};

export default Home_admin;
