import { Box } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import "./HeroSection.overrides.scss";

export default function HeroSection() {
  return (
    <Box>
      <Swiper navigation={true} modules={[Navigation]}>
        <SwiperSlide>
          <Box
            component="img"
            src="http://bigramyweb.inovaeg.com/static/media/banner.5d002eef3c2ca31636eb.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src="http://bigramyweb.inovaeg.com/static/media/banner.5d002eef3c2ca31636eb.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src="http://bigramyweb.inovaeg.com/static/media/banner.5d002eef3c2ca31636eb.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src="http://bigramyweb.inovaeg.com/static/media/banner.5d002eef3c2ca31636eb.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src="http://bigramyweb.inovaeg.com/static/media/banner.5d002eef3c2ca31636eb.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src="http://bigramyweb.inovaeg.com/static/media/banner.5d002eef3c2ca31636eb.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src="http://bigramyweb.inovaeg.com/static/media/banner.5d002eef3c2ca31636eb.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src="http://bigramyweb.inovaeg.com/static/media/banner.5d002eef3c2ca31636eb.webp"
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
