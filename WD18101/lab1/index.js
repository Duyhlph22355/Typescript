var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var products = [
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
function addProduct(newProduct) {
    products.push(newProduct);
    console.log('Thêm mới thành công.');
    console.log(products);
}
function updateProduct(id, updatedProduct) {
    var productIndex = products.findIndex(function (product) { return product.id === id; });
    if (productIndex !== -1) {
        products[productIndex] = __assign(__assign({}, products[productIndex]), updatedProduct);
        console.log('Cập nhật thành công.');
        console.log(products);
    }
    else {
        console.log('Không tìm thấy sản phẩm.');
    }
}
function removeProduct(id) {
    var productIndex = products.findIndex(function (product) { return product.id === id; });
    if (productIndex !== -1) {
        products.splice(productIndex, 1);
        console.log('Xóa thành công.');
        console.log(products);
    }
    else {
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
updateProduct(2, {
    name: 'Product 2 - Updated',
    price: 350,
    desc: 'Mô tả 2 - Updated',
    status: true
});
// ? Xóa sản phẩm
//   removeProduct(3);
