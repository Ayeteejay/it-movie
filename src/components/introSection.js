import React from "react";
import Image from "react-bootstrap/Image";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Pennywise from "../images/pennywise-intro.jpg";
import { motion } from "framer-motion";

const IntroWrapper = styled(Row)`
  padding: 20em 5em;
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
  bottom: -500px;
  height: 250px;
`;

export default () => {
  return (
    <IntroWrapper>
      <Col lg={6} style={{ zIndex: 1 }}>
        <h1>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, nonumy eirmod
          tempor dolor sit amet.
        </h1>
        <p>
          In the summer of 1989, a group of bullied kids band together to
          destroy a shape-shifting monster, which disguises itself as a clown
          and preys on the children of Derry, their small Maine town.
        </p>
      </Col>
      <Col lg={6}>
        <motion.div
          style={{ zIndex: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          whileHover={{ scale: 1.3, y: 30 }}
        >
          <Image src={Pennywise} fluid />
        </motion.div>
      </Col>
      <Line></Line>
    </IntroWrapper>
  );
};
