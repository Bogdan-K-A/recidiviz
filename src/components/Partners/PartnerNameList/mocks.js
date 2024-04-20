import partner0 from "../../../assets/svg/partnersImg/IMAGE.svg";
import partner1 from "../../../assets/svg/partnersImg/IMAGE-1.svg";
import partner2 from "../../../assets/svg/partnersImg/IMAGE-2.svg";
import partner3 from "../../../assets/svg/partnersImg/IMAGE-3.svg";
import partner4 from "../../../assets/svg/partnersImg/IMAGE-4.svg";
import partner5 from "../../../assets/svg/partnersImg/IMAGE-5.svg";
import { Autoplay } from "swiper/modules";

export const PARTNES_NAME = [
  { img: partner0, alt: "reform" },
  { img: partner1, alt: "schmidt futures" },
  { img: partner2, alt: "right on crime" },
  { img: partner3, alt: "moz://a" },
  { img: partner4, alt: "aclu" },
  { img: partner5, alt: "y" },
];

export const PARAMS = {
  slidesPerView: 5,
  spaceBetween: 20,
  modules: [Autoplay],
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    reverseDirection: true,
  },
  loop: true,
  className: "mySwiper",
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    440: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
};
