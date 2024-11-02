import { type SwiperProps } from 'swiper/react/swiper-react'

import { DisplayBreakpoints } from 'src/helpers/consts'

export const monthsSliderOptions: SwiperProps = {
	slidesPerView: 1,
	spaceBetween: 2,
	breakpoints: {
		[DisplayBreakpoints.Sm]: {
			slidesPerView: 2,
		},
		[DisplayBreakpoints.Md]: {
			slidesPerView: 3,
		},
		[DisplayBreakpoints.Lg]: {
			slidesPerView: 6,
		},
		[DisplayBreakpoints.Xxl]: {
			slidesPerView: 10,
			spaceBetween: 10,
		},
	},
}
