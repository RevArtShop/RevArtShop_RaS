const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const comment = document.querySelector('#list-comment');
const commentItems = document.querySelectorAll('#list-comment .item');
const productLinks = document.querySelectorAll('.product-link');
const loadMoreButton = document.getElementById('load-more-button');
const productList = document.getElementById('list-products');
const products = productList.getElementsByClassName('item');
const maxVisibleProducts = 4; // Số sản phẩm tối đa hiển thị ban đầu
var translateY = 0;
var count = commentItems.length;
let visibleProducts = maxVisibleProducts;
loadMoreButton.addEventListener('click', function () {
    visibleProducts += maxVisibleProducts;
    for (let i = 0; i < products.length; i++) {
        if (i < visibleProducts) {
            products[i].style.display = 'block';
        } else {
            products[i].style.display = 'none';
        }
    }

    if (visibleProducts >= products.length) {
        loadMoreButton.style.display = 'none'; // Ẩn nút khi đã hiển thị hết sản phẩm
    }
});

// Ẩn các sản phẩm vượt quá số lượng tối đa hiển thị ban đầu
for (let i = maxVisibleProducts; i < products.length; i++) {
    products[i].style.display = 'none';
}

// Ẩn nút nếu số lượng sản phẩm không vượt quá số lượng tối đa hiển thị ban đầu
if (visibleProducts >= products.length) {
    loadMoreButton.style.display = 'none';
}
next.addEventListener('click', function (event) {
    event.preventDefault();
    if (count <= 1) {
        // Xem hết bình luận
        return false;
    }
    translateY += -400;
    comment.style.transform = `translateY(${translateY}px)`;
    count--;
});

prev.addEventListener('click', function (event) {
    event.preventDefault();
    if (count >= commentItems.length) {
        // Xem hết bình luận
        return false;
    }
    translateY += 400;
    comment.style.transform = `translateY(${translateY}px)`;
    count++;
});

// Lặp qua từng phần tử và thêm sự kiện click
productLinks.forEach(link => {
    link.addEventListener('click', event => {
        // Ngăn chặn hành vi mặc định của liên kết
        event.preventDefault();

        // Lấy liên kết từ thuộc tính "href" của thẻ <a>
        const targetLink = link.querySelector('a').getAttribute('href');

        // Thực hiện chuyển hướng đến liên kết trên một cửa sổ/đèn sáng mới
        window.open(targetLink, '_blank');
    });
});
