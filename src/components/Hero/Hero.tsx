import styled from "styled-components";
import { motion } from "framer-motion";
import HeroImage from "../../static/images/ben-kolde-xdLXPic3Wfk-unsplash.jpg";

const StyledHero = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const StyledOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

const StyledHeroText = styled.h1`
  font-size: 4rem;
`;

const StyledHeroMotion = motion.custom(StyledHero);
const StyledOverlayMotion = motion.custom(StyledOverlay);

const Hero = () => {
  return (
    <StyledHeroMotion
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <StyledOverlayMotion
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <StyledHeroText>Hello</StyledHeroText>
      </StyledOverlayMotion>

      <img src={HeroImage} alt="Hero" />
    </StyledHeroMotion>
  );
};

export default Hero;
