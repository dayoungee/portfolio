import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import Modal from '../Modal/Modal';
import Slider from '../Slider/Slider';

const projectStacks = {
  1: ['C#', 'Unity', 'Game'],
  2: ['C++', 'MFC', 'TCP', 'MySQL'],
  3: ['Java', 'Spring Boot', 'AWS', 'Jenkins'],
  4: ['Java', 'Spring Boot', 'Redis', 'OAuth2'],
};

const Projects = () => {
  const { projects } = useContext(PortfolioContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  const openModal = (id) => {
    setSelectedId(id);
    setModalOpen(true);
  };

  return (
    <section id="projects">
      <Modal close={() => setModalOpen(false)} open={modalOpen} id={selectedId} />
      <Container>
        <Title title="Side Projects" />
        <p className="section-description">
          새로운 기술을 익히고 직접 구현하며 경험을 넓혀온 사이드 프로젝트입니다.
        </p>
        <div className="project-grid">
          {projects.map((project) => {
            const { title, info, repo, id, date } = project;
            return (
              <article className="project-card" key={id}>
                <div className="project-card__media">
                  <Slider id={id} />
                  <span className="project-card__number">
                    0
                    {id}
                  </span>
                </div>
                <div className="project-card__body">
                  <p className="project-card__date">{date}</p>
                  <h3>{title}</h3>
                  <p className="project-card__summary">{info}</p>
                  <ul className="tag-list">
                    {(projectStacks[id] || []).map((stack) => <li key={stack}>{stack}</li>)}
                  </ul>
                  <div className="project-card__actions">
                    <button type="button" className="text-link" onClick={() => openModal(id)}>
                      상세보기
                      <span aria-hidden="true">→</span>
                    </button>
                    {repo && (
                      <a className="text-link text-link--muted" href={repo} target="_blank" rel="noopener noreferrer">
                        GitHub
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
