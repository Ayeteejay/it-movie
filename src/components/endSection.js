import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Bev from "../images/beverly-1.jpg";
import Bill from "../images/bill-1.jpg";
import Cave from "../images/losers-club-cave.jpg";
import Losers from "../images/losers-club-all.jpg";
import Room from "../images/clown-room.jpg";
import Pennywise from "../images/pennywise-with-balloon.jpg";
import Balloon from "../images/red-balloon.png";
import It from "../images/it.svg";
import { motion } from "framer-motion";
import Wave from "react-wavify";

const EndWrapper = styled(Row)`
  padding: 10em 5em;
  background-color: #8d0000;
  text-align: center;
  h3 {
    color: white;
  }
  h4 {
    color: black;
  }
  @media only screen and (max-width: 1500px) {
    padding: 5em 2em 3em 2em;
  }
`;

const PennywiseWrapper = styled(Row)`
  height: 600px;
  background-color: black;
  background-image: url(${Pennywise});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media only screen and (max-width: 1500px) {
    height: 500px;
  }
`;
const BillContainer = styled.div`
  position: absolute;
  width: 500px;
  right: 0px;
  top: 10px;
  z-index: 10;
`;
const BevContainer = styled.div`
  width: 400px;
  position: absolute;
  width: 350px;
  top: 190px;
  left: 0px;
  z-index: 10;
`;

const LosersContainer = styled.div`
  width: 800px;
  position: absolute;
  right: 450px;
  top: 110px;
  z-index: 9;
`;

const CaveWrapper = styled.div`
  position: absolute;
  width: 550px;
  top: 470px;
  right: 100px;
  z-index: 3;
`;

const RoomWrapper = styled.div`
  position: absolute;
  width: 500px;
  top: 400px;
  left: 100px;
  z-index: 0;
`;

const ImageWrapper = styled(Row)`
  position: relative;
  padding: 0 0 30em 0;
  @media only screen and (max-width: 1500px) {
    display: none;
  }
`;

const FooterWrapper = styled(Row)`
  padding: 5em 0 8em 0;
  text-align: center;
  p {
    font-size: 0.7em;
  }
`;

const CopyrightWrapper = styled.div`
  text-align: right;
  @media only screen and (max-width: 600px) {
    text-align: center;
    padding: 3em 0 0 0;
  }
`;

const ItWrapper = styled.div`
  text-align: center;
`;

const BalloonWrapper = styled(Row)`
  padding: 10em 0 5em 0;
  @media only screen and (max-width: 600px) {
    padding: 5em 0 5em 0;
  }
`;
export default () => {
  return (
    <React.Fragment>
      <PennywiseWrapper></PennywiseWrapper>
      <EndWrapper>
        <Container fluid>
          <Row>
            <Col lg={{ span: 8, offset: 2 }}>
              <h4>We all float</h4>
              <h3>
                "Where you going, Eds? If you lived here you'd be home by now!
                Come join the clown, Eds. You'll float down here. We all float
                down here. Yes, we do!"
              </h3>
            </Col>
          </Row>
        </Container>
      </EndWrapper>
      <Row>
        <Wave
          style={{ backgroundColor: "#8d0000", padding: "0" }}
          fill="#000"
          paused={false}
          options={{
            height: 25,
            amplitude: 10,
            speed: 0.4,
            points: 6
          }}
        />
      </Row>

      <ImageWrapper>
        {/* <motion.div
              transition={{ ease: "easeInOut", duration: 1 }}
              whileHover={{ scale: 1.4, y: 30 }}
              style={{ zIndex: 99 }}
            > */}
        <BevContainer>
          <Image src={Bev} fluid />
        </BevContainer>
        {/* </motion.div> */}
        <LosersContainer>
          <Image src={Losers} fluid />
        </LosersContainer>
        <CaveWrapper>
          <Image src={Cave} fluid />
        </CaveWrapper>
        <RoomWrapper>
          <Image src={Room} fluid />
        </RoomWrapper>
        <BillContainer>
          <Image src={Bill} fluid />
        </BillContainer>
      </ImageWrapper>
      <BalloonWrapper>
        <Col lg={{ span: 2, offset: 5 }}>
          <ItWrapper>
            <motion.div
              animate={{
                y: [0, 60, 0, 60, 0],
                x: [0, 15, 0, -20, 0, 15, 0],
                rotate: [0, 5, 0, -3, 0, 5, 0, 3, 0]
              }}
              transition={{
                loop: Infinity,
                yoyo: Infinity,
                ease: "easeInOut",
                duration: 10
              }}
            >
              <Image src={Balloon} fluid style={{ maxWidth: "90px" }} />
            </motion.div>
          </ItWrapper>
        </Col>
      </BalloonWrapper>

      <FooterWrapper>
        <Container>
          <Row>
            <Col sm={2}>
              <ItWrapper>
                <Image src={It} fluid style={{ maxWidth: "80px" }} />
              </ItWrapper>
            </Col>
            <Col sm={{ span: 4, offset: 6 }}>
              <CopyrightWrapper>
                <h5>You'll float too.</h5>
                <p>
                  Powered by Stephen King
                  <br />
                  Copyright &#x24B8; 2019 Adam Jones
                </p>
              </CopyrightWrapper>
            </Col>
          </Row>
        </Container>
      </FooterWrapper>
    </React.Fragment>
  );
};
