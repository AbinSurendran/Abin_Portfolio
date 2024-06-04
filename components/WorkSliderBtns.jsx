// "use client";

// import { useSwiper } from "swiper/react";
// import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

// const WorkSliderBtns = ({containerStyles, btnStyles, iconsStyles }) => {
// const swiper = useSwiper();
//     return (
//     <div className="{containerStyles}">
//         <button className={btnStyles} onclick={() => swiper.slidePrev()}>
//             <PiCaretLeftBold className="{iconsStyles}" />
//         </button>
//         <button className={btnStyles} onclick={() => swiper.slideNext()}>
//             <PiCaretRightBold className="{iconsStyles}" />
//         </button>
//     </div>
//   )
// }

// export default WorkSliderBtns

// "use client";

// import { useSwiper } from "swiper/react";
// import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"; // Importing both left and right icons

// const WorkSliderBtns = ({ containerStyle, btnStyle, iconsStyle }) => {
//   const swiper = useSwiper();
//   return (
//     <div className={containerStyle}>
//       <button className={btnStyle} onClick={() => swiper.slidePrev()}>
//         <PiCaretLeftBold className={iconsStyle} />
//       </button>
//       <button className={btnStyle} onClick={() => swiper.slideNext()}>
//         <PiCaretRightBold className={iconsStyle} /> {/* Using the right arrow for the next button */}
//       </button>
//     </div>
//   );
// };

// export default WorkSliderBtns;

"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
