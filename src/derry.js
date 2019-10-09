import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Title from "./images/it.svg";
import Image from "react-bootstrap/Image";
import Intro from "./components/introSection";
import Haunted from "./images/haunted-house.jpg";
import Body from "./components/bodySection";
import End from "./components/endSection";
import Fade from "react-reveal";

const TitleWrapper = styled(Image)`
  padding: 5em;
  max-width: 300px;
`;
const Line = styled.span`
  background-color: #db0000;
  left: 0;
  margin: 0 auto;
  max-width: 1px;
  position: absolute;
  right: 0;
  width: 100%;
  z-index: 2;
  bottom: -200px;
  height: 200px;
`;

const HauntedHouseWrapper = styled(Row)`
  height: 600px;
  background-color: black;
  background-image: url(${Haunted});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 1500px) {
    height: 400px;
  }
`;
const ItWrapper = styled.div`
  text-align: center;
`;

class Derry extends React.Component {
  render() {
    return (
      <Container fluid>
        <Fade>
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <ItWrapper>
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 1, 0.1]
                  }}
                  transition={{
                    ease: "easeInOut",
                    duration: 3,
                    loop: Infinity,
                    yoyo: Infinity
                  }}
                >
                  <TitleWrapper src={Title} fluid />
                </motion.div>
              </ItWrapper>
              <Line></Line>
            </Col>
          </Row>
        </Fade>
        <Fade>
          <Row>
            <Container>
              <Intro></Intro>
            </Container>
          </Row>
          <HauntedHouseWrapper></HauntedHouseWrapper>
        </Fade>
        <Fade>
          <Row>
            <Container>
              <Body></Body>
            </Container>
          </Row>
        </Fade>
        <Fade>
          <Row>
            <Container fluid>
              <End></End>
            </Container>
          </Row>
        </Fade>
      </Container>
    );
  }
}
export default Derry;
