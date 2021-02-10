import { LoremIpsum } from "react-lorem-ipsum";
import { Hero } from "../components/Hero";
import { Layout } from "../components/Layout";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import FirstSectionImage from "../static/images/nathan-dumlao-kLmt1mpGJVg-unsplash.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faShieldAlt,
  faShieldVirus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
const StyledContentWrapper = styled.div`
  max-width: 1000px;
  padding: 0 16px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: center;
  gap: 32px;
  align-items: center;
  overflow: hidden;
  img {
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const IconGrid = styled.div`
  display: flex;
  margin: 64px 0;
  div {
    flex: 1 1;
    display: flex;
    justify-content: center;
  }
`;

const FirstSectionMotion = motion.custom(StyledContentWrapper);
const SecondSectionMotion = motion.custom(StyledContentWrapper);
const FAMotion = motion.custom(FontAwesomeIcon);
const Index = () => {
  const [Section, SectionInView] = useInView({
    triggerOnce: false,
    rootMargin: "-300px 0px",
  });
  const [SecondSection, SecondSectionInView] = useInView({
    triggerOnce: false,
    rootMargin: "-300px 0px",
  });
  return (
    <Layout>
      <Hero />
      <FirstSectionMotion
        animate={{
          opacity: SectionInView ? 1 : 0,
          x: SectionInView ? 0 : 100,
        }}
        transition={{ opacity: { duration: 1 }, x: { duration: 1 } }}
        ref={Section}
      >
        <SectionGrid>
          <ImageWrapper>
            <img src={FirstSectionImage} />
          </ImageWrapper>
          <div>
            <h2>Section Heading</h2>
            <LoremIpsum p={2} random={false} />
          </div>
        </SectionGrid>
      </FirstSectionMotion>
      ]
      <SecondSectionMotion
        animate={{
          opacity: SecondSectionInView ? 1 : 0,
          x: SecondSectionInView ? 0 : -100,
        }}
        transition={{ opacity: { duration: 1 }, x: { duration: 1 } }}
        ref={SecondSection}
      >
        <SectionGrid>
          <ImageWrapper>
            <img src={FirstSectionImage} />
          </ImageWrapper>
          <div>
            <h2>Section Heading</h2>
            <IconGrid>
              <motion.div
                animate={{
                  opacity: SecondSectionInView ? 1 : 0,
                  y: SecondSectionInView ? 0 : 20,
                }}
              >
                <FontAwesomeIcon icon={faShieldAlt} size="4x" />
              </motion.div>
              <motion.div
                animate={{
                  opacity: SecondSectionInView ? 1 : 0,
                  y: SecondSectionInView ? 0 : 20,
                }}
              >
                <FontAwesomeIcon icon={faClock} size="4x" />
              </motion.div>
              <motion.div
                animate={{
                  opacity: SecondSectionInView ? 1 : 0,
                  y: SecondSectionInView ? 0 : 20,
                }}
              >
                {" "}
                <FontAwesomeIcon icon={faUsers} size="4x" />
              </motion.div>
            </IconGrid>
            <LoremIpsum p={1} random={false} />
          </div>
        </SectionGrid>
      </SecondSectionMotion>
    </Layout>
  );
};

export default Index;
