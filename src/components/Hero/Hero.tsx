import styled from "styled-components";
import { motion } from "framer-motion";
import HeroImage from "../../static/images/ben-kolde-xdLXPic3Wfk-unsplash.jpg";

const StyledHero = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  img {
    object-fit: cover;
    width: 100%;
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
        <motion.h1>Hello</motion.h1>
      </StyledOverlayMotion>

      <img src={HeroImage} alt="Hero" />
    </StyledHeroMotion>
  );
};

export default Hero;
