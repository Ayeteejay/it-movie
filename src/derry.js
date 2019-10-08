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

const TitleWrapper = styled(Image)`
  padding: 7em;
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
  bottom: -150px;
  height: 200px;
`;

const HauntedHouseWrapper = styled(Row)`
  height: 600px;
  background-color: black;
  background-image: url(${Haunted});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

class Derry extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <motion.div
              animate={{}}
              transition={{ ease: "easeInOut", duration: 1 }}
              whileHover={{ scale: 1.4, y: 30 }}
            >
              <TitleWrapper src={Title} fluid />
            </motion.div>
            <Line></Line>
          </Col>
        </Row>
        <Row>
          <Container>
            <Intro></Intro>
          </Container>
        </Row>
        <HauntedHouseWrapper></HauntedHouseWrapper>
        {/* <Row>
          <Col lg={{ span: 10, offset: 1 }}>
            <Image src={Haunted} fluid />
          </Col>
        </Row> */}
        <Row>
          <Container>
            <Body></Body>
          </Container>
        </Row>

        <Row>
          <Container fluid>
            <End></End>
          </Container>
        </Row>
      </Container>
    );
  }
}
export default Derry;
