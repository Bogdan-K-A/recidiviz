import partnerLogo0 from "../../../assets/images/partnersLogo/IMAGE.png";
import partnerLogo1 from "../../../assets/images/partnersLogo/IMAGE-1.png";
import partnerLogo2 from "../../../assets/images/partnersLogo/IMAGE-2.png";
import partnerLogo3 from "../../../assets/images/partnersLogo/IMAGE-3.png";
import partnerLogo4 from "../../../assets/images/partnersLogo/IMAGE-4.png";
import partnerLogo5 from "../../../assets/images/partnersLogo/IMAGE-5.png";
import { Autoplay } from "swiper/modules";

export const PARTNNER_ITEMS = [
  {
    img: partnerLogo0,
    text: "TED Talks",
  },
  {
    img: partnerLogo1,
    text: "The New York Times",
  },
  {
    img: partnerLogo2,
    text: "StateScoop",
  },
  {
    img: partnerLogo3,
    text: "Associated Press",
  },
  {
    img: partnerLogo4,
    text: "Time",
  },
  {
    img: partnerLogo5,
    text: "Freethink",
  },
];

export const PARAMS = {
  slidesPerView: 5,
  // spaceBetween: 20,
  modules: [Autoplay],
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
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
