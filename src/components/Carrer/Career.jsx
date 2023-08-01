import React, {useContext, useEffect, useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Fade from "react-reveal/Fade";
import Title from "../Title/Title";
import PortfolioContext from "../../context/context";
import ProjectData from "../Projects/ProjectData";

const Career = () => {
  const {careers} = useContext(PortfolioContext);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="career">
      <Container>
        <div className="career-wrapper">
          <Title title="Career" />
          {careers.map((career) => {
            const {name, id, description, date, img} = career;
            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="career-wrapper__text">
                      <div className="career-wrapper__text-img-wrapper">
                        <img className="career-wrapper__text-img-wrapper-img" src={img} alt="회사로고" />
                      </div>
                      <h2 className="career-wrapper__text-title">{name || '회사 이름'}</h2>
                      <p className="career-wrapper__text-date">
                        {date || 'None'}
                      </p>
                      <div>
                        <p className="career-wrapper__text-info">
                          {description ||
                            ''}
                        </p>
                      </div>
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="career-wrapper-project">
                      <ProjectData projectId={100 - id} />
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Career;
