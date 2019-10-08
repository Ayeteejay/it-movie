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

const EndWrapper = styled(Row)`
  padding: 10em 5em;
  background-color: #8d0000;
  text-align: center;
  h3 {
    color: white;
  }
`;

const PennywiseWrapper = styled(Row)`
  height: 600px;
  background-color: black;
  background-image: url(${Pennywise});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const BillContainer = styled.div`
  position: absolute;
  width: 500px;
  right: 0px;
  top: 50px;
  z-index: 999;
`;
const BevContainer = styled.div`
  width: 500px;
  width: 350px;
  top: 400px;
  z-index: 2;
`;

const LosersContainer = styled.div`
  width: 800px;
  position: absolute;
  right: 150px;
  top: 110px;
  z-index: 0;
`;

const CaveWrapper = styled.div`
  position: absolute;
  width: 500px;
  top: 350px;
  right: 50px;
  z-index: 99;
`;

const RoomWrapper = styled.div`
  position: absolute;
  width: 400px;
  top: 250px;
  left: 50px;
  z-index: 0;
`;

const ImageWrapper = styled(Row)`
  position: relative;
  padding: 0 0 30em 0;
`;

export default () => {
  return (
    <React.Fragment>
      <PennywiseWrapper></PennywiseWrapper>
      <EndWrapper>
        <Container fluid>
          <Row>
            <Col lg={{ span: 8, offset: 2 }}>
              <h3>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                eius architecto numquam voluptatibus ercitationem fugit ea, et
                eos, sint animi molestiae necessitatibus voluptate sequi
                laudantium alias eius."
              </h3>
            </Col>
          </Row>
          <ImageWrapper>
            <BevContainer>
              <Image src={Bev} fluid />
            </BevContainer>
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
        </Container>
      </EndWrapper>

      <Row>
        <Col lg={12}>
          <p>
            Copyright © 2019 Kyriba Corp. All rights reserved. Kyriba and the
            “kyriba” logo are trademarks of Kyriba Corp.
          </p>
        </Col>
      </Row>
    </React.Fragment>
  );
};
