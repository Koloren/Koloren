const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");

const opacity = 0.4;

//设置默认图片的透明度，突出默认选中的图片
imgs[0].style.opacity = opacity;

//循环为每张图片添加点击事件
imgs.forEach(img => img.addEventListener("click", imgClick));

//循环中的点击事件函数
function imgClick(e) {
    imgs.forEach(img => img.style.opacity = 1);

    current.src = e.target.src;

    //动画效果
    current.classList.add('fade-in');

    //移除动画效果
    setTimeout(() => current.classList.remove('fade-in'), 500)

    e.target.style.opacity = opacity;
}
