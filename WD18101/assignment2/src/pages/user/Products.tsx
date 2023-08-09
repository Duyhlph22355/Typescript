import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = (props: any) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(props.products);
  });
  return (
    <div className="mt-[168px]">
      <div className="mt-[168px] mb-[500px]">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
          {products.map((item: any, index) => {
            return (
              <div key={index + 1}>
                <Link to={`/product/${item.id}`} className="group relative block overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                  />

                  <div className="relative border border-gray-100 bg-white p-6">
                    <span
                      className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"
                    >
                      New
                    </span>

                    <h3 className="mt-4 text-lg font-medium text-gray-900">{item.name}</h3>

                    <p className="mt-1.5 text-sm text-gray-700">${item.price}</p>

                    <form className="mt-4">
                      <button
                        className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                      >
                        Add to Cart
                      </button>
                    </form>
                  </div>
                </Link>
                ;
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default Products;
