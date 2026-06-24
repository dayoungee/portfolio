import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, resume } = about;

  return (
    <section id="about">
      <Container>
        <Title title="About" />
        <Row className="about-card">
          <Col lg={4} md={5}>
            <div className="about-card__profile">
              <AboutImg alt="윤다영 프로필" filename={img} />
              <div>
                <strong>윤다영</strong>
                <span>Developer · 5 Years</span>
              </div>
            </div>
          </Col>
          <Col lg={8} md={7}>
            <div className="about-card__content">
              <p className="about-card__lead">{paragraphOne}</p>
              <p>{paragraphTwo}</p>
              <div className="about-strengths">
                <div>
                  <strong>Backend</strong>
                  <span>Java · Spring Boot</span>
                </div>
                <div>
                  <strong>Software</strong>
                  <span>C++ · MFC</span>
                </div>
                <div>
                  <strong>Operation</strong>
                  <span>서비스 운영 및 개선</span>
                </div>
                <div>
                  <strong>Collaboration</strong>
                  <span>소통과 협업</span>
                </div>
              </div>
              {resume && (
                <a target="_blank" rel="noopener noreferrer" className="text-link" href={resume}>
                  이력서 보기
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
