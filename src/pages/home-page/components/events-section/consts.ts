import { type SwiperProps } from 'swiper/react/swiper-react'

import { DisplayBreakpoints } from 'src/helpers/consts'

export const eventsSliderOptions: SwiperProps = {
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 60,
	breakpoints: {
		[DisplayBreakpoints.Xs]: {
			slidesPerView: 2,
		},
		[DisplayBreakpoints.Lg]: {
			slidesPerView: 3,
		},
		[DisplayBreakpoints.Xxl]: {
			slidesPerView: 4,
		},
	},
}
