import React from "react";
import Image from "react-bootstrap/Image";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { motion } from "framer-motion";
import Richy from "../images/richy.jpg";
import Postcard from "../images/derry-postcard.jpg";
import Poster from "../images/carnival.jpg";
import HiddenPennywise from "../images/hidden-pennywise.jpg";
import Fade from "react-reveal";

const BodyWrapper = styled.div`
  padding: 12em 5em 10em 5em;
  @media only screen and (max-width: 1500px) {
    padding: 8em 2em 5em 2em;
  }
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
      <Fade>
        <Row>
          <Col lg={12}>
            <h4>Chapter One</h4>
            <h1>
              The terror, which would not end for another twenty-eight years--if
              it ever did end--began, so far as I know or can tell, with a boat
              made from a sheet of newspaper floating down a gutter swollen with
              rain.
            </h1>
          </Col>
        </Row>
        <Row className="pb-5">
          <Col lg={6}>
            <p>
              The boat bobbed, listed, righted itself again, dived bravely
              through treacherous whirlpools, and continued on its way down
              Witcham Street toward the traffic light which marked the
              intersection of Witcham and Jackson. The three vertical lenses on
              all sides of the traffic light were dark this afternoon in the
              fall of 1957, and the houses were all dark, too. There had been
              steady rain for a week now, and two days ago the winds had come as
              well. Most sections of Derry had lost their power then, and it was
              not back on yet. A small boy in a yellow slicker and red galoshes
              ran cheerfully along beside the newspaper boat. The rain had not
              stopped, but it was finally slackening.
            </p>
          </Col>
          <Col lg={6}>
            <p>
              In that autumn of 1957, eight months before the real horrors began
              and twenty-eight years before the final showdown, Stuttering Bill
              was ten years old. Bill had made the boat beside which George now
              ran. He had made it sitting up in bed, his back propped against a
              pile of pillows, while their mother played Für Elise on the piano
              in the parlor and rain swept restlessly against his bedroom
              window.
            </p>
            <p>
              About three-quarters of the way down the block as one headed
              toward the intersection and the dead traffic light, Witcham Street
              was blocked to motor traffic by smudgepots and four orange
              sawhorses.
            </p>
          </Col>
        </Row>
      </Fade>
      <Fade>
        <SectionRow>
          <Col lg={6} className="my-auto">
            <h4>Derry, Maine</h4>
            <h3>
              "All I know is that it was still afloat and still running on the
              breast of the flood when it passed the incorporated town limits."
            </h3>
          </Col>
          <Col lg={6}>
            <motion.div
              animate={{ rotate: 4 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              whileHover={{ rotate: 0, scale: 1.5 }}
              whileTap={{ rotate: 0, scale: 1.5 }}
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
              whileTap={{ rotate: 0, scale: 1 }}
              transition={{ ease: "easeInOut", duration: 1 }}
            >
              <Image src={Richy} fluid />
            </motion.div>
          </Col>
          <Col lg={6} className="my-auto">
            <h4>The Sewer</h4>
            <h3>
              "The face of the clown in the stormdrain was white, there were
              funny tufts of red hair on either side of his bald head, and there
              was a big clown-smile painted over his mouth."
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
              whileTap={{ y: 150, opacity: 0 }}
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
            <h4>Pennywise the dancing clown</h4>
            <h3>"You'll laugh, you'll cry, you'll cheer, you'll die."</h3>
          </Col>
        </EndingRow>
      </Fade>
    </BodyWrapper>
  );
};
