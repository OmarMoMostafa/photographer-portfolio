const portfolio = document.querySelector(".portfolio");
const itemImages = document.querySelectorAll(".item .image");
const items = document.querySelectorAll(".item");

const imageView = document.querySelector(".image-view");
const viewedImage = imageView.querySelector("img.viewed");
const blurredBg = imageView.querySelector(".blurred-bg");
const cancelBtn = imageView.querySelector(".cancel");

let viewedItem;

const pageOverlay = document.querySelector(".page-overlay");
const scrollRightBtn = document.querySelector(".scroll-right");
const scrollLeftBtn = document.querySelector(".scroll-left");

//-----------------------------------------------------------------------------------//

const portLoadHandler = () => {
  for (i = 0; i < itemImages.length; i++) {
    ANIMATION_DELAY = `${i / 10 + 2}s`;
    itemImages[
      i
    ].style.animation = `enter-down 0.4s ease-in-out ${ANIMATION_DELAY} 1 forwards`;
  }
};

const imageViewHide = () => {
  imageView.style.display = "none";
  pageOverlay.style.display = "none";
};

const imageViewShow = () => {
  imageView.style.display = "flex";
  pageOverlay.style.display = "block";
};

const itemClickHandler = (e) => {
  if (window.innerWidth > 600) {
    imageViewShow();
    viewedItem = e.path.filter((el) => el.className == "item")[0];
    viewedImage.setAttribute("src", viewedItem.querySelector(".image").src);
    blurredBg.setAttribute("src", viewedItem.querySelector(".image").src);
  }
};

const scrollRightHandler = () => {
  portfolio.scrollBy(520, 0);
};

const scrollLeftHandler = () => {
  portfolio.scrollBy(-520, 0);
};

// --------------------------------------------------------------------------//

window.addEventListener("load", portLoadHandler);
items.forEach((item) => {
  item.addEventListener("click", (e) => {
    itemClickHandler(e);
  });
});
cancelBtn.addEventListener("click", imageViewHide);
pageOverlay.addEventListener("click", imageViewHide);
scrollRightBtn.addEventListener("click", scrollRightHandler);
scrollLeftBtn.addEventListener("click", scrollLeftHandler);
