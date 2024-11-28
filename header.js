const Scrolltop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    document.querySelector(".scroll-to-top").style.display = "block";
  } else {
    document.querySelector(".scroll-to-top").style.display = "none";
  }
};

//  script slider

$(document).ready(function () {
  $(".slider_banner").slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplaySpeed: 2000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  });

  // Hàm kích hoạt animation
  function startAnimation() {
    $(".slider_banner .slick-active [data-animation]").each(function () {
      let animationClass = $(this).data("animation");
      $(this)
        .removeClass("hidden")
        .addClass(`animate__animated ${animationClass}`);
    });
  }

  // Hàm xóa animation
  function removeAllBannerAnimation() {
    $(".slider_banner [data-animation]").each(function () {
      let animationClass = $(this).data("animation");
      $(this)
        .removeClass(`animate__animated ${animationClass}`)
        .addClass("hidden");
    });
  }

  // Gắn sự kiện cho slider
  $(".slider_banner").on("beforeChange", function () {
    removeAllBannerAnimation();
  });

  $(".slider_banner").on("afterChange", function () {
    startAnimation();
  });

  startAnimation(); // Kích hoạt khi load trang
});

//script import header

document.addEventListener("DOMContentLoaded", () => {
  fetch("/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;

      // Đảm bảo các phần tử trong header đã được thêm vào DOM
      const menuToggle = document.getElementById("menu-toggle");
      const mobileMenu = document.getElementById("mobile-menu");

      menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    });
});

//script sticky header
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("sticky"); // Thêm lớp khi cuộn qua 50px
    } else {
      header.classList.remove("sticky"); // Loại bỏ lớp khi cuộn trở lại
    }
  });
});
// script import footer

document.addEventListener("DOMContentLoaded", () => {
  // Import footer
  fetch("/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });
});
