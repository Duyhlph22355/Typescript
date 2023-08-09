import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = (props: any) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    setProducts(props.products)
  }, [props.products])
  return (
    <>
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>

            <div className="mt-4 md:mt-8">
              <Link
                to="#"
                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>

        <img
          alt="Violin"
          src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>

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
              </div>
            );
          })}


        </div>
      </div>
    </>
  );
};

export default Home;
