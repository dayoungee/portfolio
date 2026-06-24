import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';
import ProjectData from '../Projects/ProjectData';

const roles = {
  1: 'Backend Developer',
  2: 'Software Developer',
  3: 'Application Developer',
};

const Career = () => {
  const { careers } = useContext(PortfolioContext);

  return (
    <section id="career">
      <Container>
        <Title title="Career" />
        <p className="section-description">
          애플리케이션 개발에서 시작해 실서비스 백엔드 개발과 운영으로 경험을 확장했습니다.
        </p>
        <div className="career-timeline">
          {careers.map((career) => {
            const { name, id, description, date, img } = career;
            return (
              <article className="career-item" key={id}>
                <span className="career-item__dot" />
                <div className="career-item__meta">
                  <img src={img} alt={`${name} 로고`} />
                  <p>{date}</p>
                  <h3>{name}</h3>
                  <strong>{roles[id]}</strong>
                  <span>{description}</span>
                </div>
                <div className="career-item__details">
                  <ProjectData projectId={100 - id} />
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Career;
