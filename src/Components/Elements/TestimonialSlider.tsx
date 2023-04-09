import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "./TestimonialBox";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Wrapper>
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">What They Say?</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <Slider {...settings}>
            <LogoWrapper className="flexCenter">
              <TestimonialBox
                text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
                author="Ralph Waldo Emerson"
              />
            </LogoWrapper>
            <LogoWrapper className="flexCenter">
              <TestimonialBox
                text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
                author="Ralph Waldo Emerson"
              />
            </LogoWrapper>
            <LogoWrapper className="flexCenter">
              <TestimonialBox
                text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
                author="Ralph Waldo Emerson"
              />
            </LogoWrapper>
            <LogoWrapper className="flexCenter">
              <TestimonialBox
                text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
                author="Ralph Waldo Emerson"
              />
            </LogoWrapper>
            <LogoWrapper className="flexCenter">
              <TestimonialBox
                text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
                author="Ralph Waldo Emerson"
              />
            </LogoWrapper>
            <LogoWrapper className="flexCenter">
              <TestimonialBox
                text="Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it."
                author="Ralph Waldo Emerson"
              />
            </LogoWrapper>
          </Slider>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;

const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
