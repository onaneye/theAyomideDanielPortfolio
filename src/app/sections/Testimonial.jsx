// File: src/components/TestimonialSwiper.jsx
'use client'

import React from "react";
import { Container, Typography, Box, Card, Avatar } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,  EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

// Swiper.use([Autoplay]);
const testimonials = [
  {
    name: "Sophia Brown",
    role: "CEO, TechWave",
    testimonial: "This platform exceeded all my expectations. The attention to detail is phenomenal!",
    avatar: "https://via.placeholder.com/100",
  },
  {
    name: "Liam Johnson",
    role: "Creative Director, Visionary",
    testimonial: "The animations and the user experience are simply unparalleled. Highly recommend it!",
    avatar: "https://via.placeholder.com/100",
  },
  {
    name: "Olivia Smith",
    role: "Founder, EcoWorld",
    testimonial: "Absolutely stunning and smooth interactions. It’s a masterpiece!",
    avatar: "https://via.placeholder.com/100",
  },
  {
    name: "Noah Davis",
    role: "Product Manager, InnovateX",
    testimonial: "This service redefines excellence. Simply breathtaking animations!",
    avatar: "https://via.placeholder.com/100",
  },
];

const Testimonial = () => {
  return (
    <Container maxWidth={false}
    sx={{
      maxWidth: { xs: '1200px', lg: '1000px', md: 'lg' },
      height: '100%',
      color: 'white',
      marginTop: "6rem"
    }}>
       <Box sx={{maxWidth: 'sm', margin: '0 auto'}}>
          <Typography variant="body1" className="text-[#868688] font-light text-center">
            TESTIMONIAL
          </Typography> 
          <Typography 
            variant='h2' 
            className='font-montserrat font-bold text-center mb-12'
            sx={{ fontSize: { xs: '2.5rem', lg: '2.5rem', marginBottom: '3rem' } }}
          >
            Our <strong className="text-[#3bbbf2]">Clients</strong> have a lot to say about us
          </Typography>
        </Box>

      <Box sx={{ width: "100%" }}>
        <Swiper
          modules={[EffectCoverflow, Autoplay]} // Add EffectCoverflow and Autoplay modules
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={40}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Card
                sx={{
                  p: 3,
                  borderRadius: "20px",
                  boxShadow: 10,
                  bgcolor: "#3bbbf2",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  opacity: "0.6",
                  transition: "opacity 0.3s",
                  "&.swiper-slide-active": {
                    opacity: "1",
                  },
                }}
              >
                <Avatar
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  sx={{ width: 80, height: 80, mb: 2 }}
                />
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, mb: 1, textAlign: "center" }}
                >
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {testimonial.role}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  sx={{ mt: 2, fontStyle: "italic" }}
                  className="text-gray-700"
                >
                  "{testimonial.testimonial}"
                </Typography>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
};

export default Testimonial;
