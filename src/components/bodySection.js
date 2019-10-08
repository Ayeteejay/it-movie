import React from "react";
import Image from "react-bootstrap/Image";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { motion } from "framer-motion";
import Richy from "../images/richy.jpg";
import Postcard from "../images/derry-postcard.jpg";
import Poster from "../images/carnival.jpg";
import HiddenPennywise from "../images/hidden-pennywise.jpg";

const BodyWrapper = styled.div`
  padding: 15em 5em 10em 5em;
`;
const SectionRow = styled(Row)`
  padding: 7em 0em 1em 0em;
`;

const JumpScare = styled.div`
position:absolute:
z-index:0;
padding:2em
`;

const EndingRow = styled(Row)`
  text-align: center;
  padding: 5em 0em 0em 0em;
`;

export default () => {
  return (
    <BodyWrapper>
      <Row>
        <Col lg={12}>
          <h4>Lorem ipsum dolor</h4>
          <h1>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, nonumy
            eirmod tempor dolor sit amet site fuga eaque voluptatum recusandae
            amet dolor sit amet
          </h1>
        </Col>
      </Row>
      <Row className="pb-5">
        <Col lg={6}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quia
            odit necessitatibus voluptatum recusandae asperiores, inventore
            nesciunt sapiente commodi accusamus facere doloremque ea magni
            numquam esse, fuga eaque provident assumenda! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Assumenda totam possimus quod
            provident similique voluptatibus architecto eum. Velit quisquam modi
            sint laboriosam necessitatibus sunt eius nulla aliquid, assumenda
            eaque sapiente.
          </p>

          <p>
            In the summer of 1989, a group of bullied kids band together to
            destroy a shape-shifting monster, which disguises itself as a clown
            and preys on the children of Derry, their small Maine town.
          </p>
        </Col>
        <Col lg={6}>
          <p>
            In the summer of 1989, a group of bullied kids band together to
            destroy a shape-shifting monster, which disguises itself as a clown
            and preys on the children of Derry, their small Maine town.
          </p>
          <p>
            In the summer of 1989, a group of bullied kids band together to
            destroy a shape-shifting monster, which disguises itself as a clown
            and preys on the children of Derry, their small Maine town.
          </p>
        </Col>
      </Row>
      <SectionRow>
        <Col lg={6} className="my-auto">
          <h4>Lorem ipsum dolor</h4>
          <h3>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quia
            odit necessitatibus voluptatum recusandae asperiore."
          </h3>
        </Col>
        <Col lg={6}>
          <motion.div
            animate={{ rotate: 7 }}
            whileHover={{ rotate: 0, scale: 1.5 }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            <Image src={Postcard} fluid />
          </motion.div>
        </Col>
      </SectionRow>
      <SectionRow>
        <Col lg={6}>
          <motion.div
            animate={{ rotate: -5, scale: 0.7 }}
            whileHover={{ rotate: 0, scale: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            <Image src={Richy} fluid />
          </motion.div>
        </Col>
        <Col lg={6} className="my-auto">
          <h4>Lorem ipsum dolor</h4>
          <h3>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quia
            odit necessitatibus voluptatum recusandae asperiore."
          </h3>
        </Col>
      </SectionRow>
      <SectionRow>
        <Col lg={{ span: 6, offset: 3 }}>
          <motion.div
            style={{
              position: "absolute",
              zIndex: 1,
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              padding: "2em"
            }}
            animate={{}}
            whileHover={{ y: 150, opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.4 }}
          >
            <Image src={Poster} fluid />
          </motion.div>
          <JumpScare>
            <Image src={HiddenPennywise} fluid />
          </JumpScare>
        </Col>
      </SectionRow>

      {/* Stuff here */}
      <EndingRow>
        <Col lg={12}>
          <h3>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quia
            odit necessitatibus voluptatum recusandae asperiores, inventore
            nesciunt sapiente commodi accusamus facere doloremque ea magni
            numquam esse."
          </h3>
        </Col>
      </EndingRow>
    </BodyWrapper>
  );
};
