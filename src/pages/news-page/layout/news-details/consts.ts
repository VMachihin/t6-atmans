import { type SwiperProps } from 'swiper/react/swiper-react'

import { DisplayBreakpoints } from 'src/helpers/consts'

export const gallerySliderOptions: SwiperProps = {
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 10,
	breakpoints: {
		[DisplayBreakpoints.Sm]: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		[DisplayBreakpoints.Md]: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		[DisplayBreakpoints.Lg]: {
			slidesPerView: 3,
			spaceBetween: 15,
		},
		[DisplayBreakpoints.Xl]: {
			slidesPerView: 4,
			spaceBetween: 15,
		},
		[DisplayBreakpoints.Xxl]: {
			slidesPerView: 5,
			spaceBetween: 20,
		},
	},
}
