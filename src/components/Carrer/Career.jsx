import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';
import ProjectData from '../Projects/ProjectData';

const roles = {
  1: '백엔드 개발',
  2: '소프트웨어 개발',
  3: '애플리케이션 개발',
};

const Career = () => {
  const { careers } = useContext(PortfolioContext);
  const [expandedIds, setExpandedIds] = useState([]);

  const toggleCareer = (id) => {
    setExpandedIds((current) => (
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    ));
  };

  return (
    <section id="career">
      <Container>
        <Title title="Career" />
        <p className="section-description">
          C++/MFC 소프트웨어 개발에서 Java/Spring Boot 백엔드 개발로 이어진 경력입니다.
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
                  <button
                    className="career-item__toggle"
                    type="button"
                    aria-expanded={expandedIds.includes(id)}
                    onClick={() => toggleCareer(id)}
                  >
                    {expandedIds.includes(id) ? '주요 업무 접기' : '주요 업무 보기'}
                  </button>
                </div>
                <div className={`career-item__details ${expandedIds.includes(id) ? 'career-item__details--open' : ''}`}>
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
