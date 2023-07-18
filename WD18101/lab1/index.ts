interface Product {
    id: number | string;
    name: string;
    image: string;
    price: number;
    desc?: string;
    status: boolean;
  }
  
  const products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      image: 'https://picsum.photos/100/100',
      price: 200,
      desc: 'Mô tả 1',
      status: true
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://picsum.photos/100/100',
      price: 300,
      desc: 'Mô tả 2',
      status: false
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://picsum.photos/100/100',
      price: 400,
      desc: 'Mô tả 3',
      status: true
    }
  ];
  
  function addProduct(newProduct: Product): void {
    products.push(newProduct);
    console.log('Thêm mới thành công.');
    console.log(products);
    
  }
  
  function updateProduct(id: number | string, updatedProduct: Partial<Product>): void {
    const productIndex = products.findIndex(product => product.id === id);
    if (productIndex !== -1) {
      products[productIndex] = { ...products[productIndex], ...updatedProduct };
      console.log('Cập nhật thành công.');
      console.log(products);

    } else {
      console.log('Không tìm thấy sản phẩm.');
    }
  }
  
  function removeProduct(id: number | string): void {
    const productIndex = products.findIndex(product => product.id === id);
    if (productIndex !== -1) {
      products.splice(productIndex, 1);
      console.log('Xóa thành công.');
      console.log(products);

    } else {
      console.log('Không tìm thấy sản phẩm.');
    }
  }

  // ! Sử dụng hàm:

  // ? Thêm sản phẩm

//   addProduct({
//     id: 4,
//     name: 'Product 4',
//     image: 'https://picsum.photos/100/100',
//     price: 500,
//     desc: 'Mô tả 4',
//     status: true
//   });
  // ? Sửa sản phẩm
//   updateProduct(2, {
//     name: 'Product 2 - Updated',
//     price: 350,
//     desc: 'Mô tả 2 - Updated',
//     status: true
//   });
  
// ? Xóa sản phẩm
//   removeProduct(3);