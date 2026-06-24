import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import Modal from '../Modal/Modal';
import Slider from '../Slider/Slider';

const projectStacks = {
  1: ['C#', 'Unity'],
  2: ['C++', 'MFC', 'TCP', 'MySQL'],
  3: ['Java', 'Spring Boot', 'JPA', 'AWS', 'Jenkins'],
  4: ['Java', 'Spring Boot', 'Spring Security', 'Redis', 'JWT'],
};

const projectRoles = {
  1: '개인 프로젝트 · 게임 로직 및 기능 구현',
  2: '개인 프로젝트 · 클라이언트 및 통신 기능 구현',
  3: '7인 팀 프로젝트 · 팀장 / Question API 및 CI/CD 담당',
  4: '6인 팀 프로젝트 · 회원 도메인 및 인증 기능 담당',
};

const projectOrder = [4, 3, 2, 1];

const Projects = () => {
  const { projects } = useContext(PortfolioContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  const openModal = (id) => {
    setSelectedId(id);
    setModalOpen(true);
  };

  const orderedProjects = projectOrder
    .map((id) => projects.find((project) => project.id === id))
    .filter(Boolean);

  return (
    <section id="projects">
      <Modal close={() => setModalOpen(false)} open={modalOpen} id={selectedId} />
      <Container>
        <Title title="Side Projects" />
        <p className="section-description">
          새로운 기술을 익히고 직접 구현하며 경험을 넓혀온 사이드 프로젝트입니다.
        </p>
        <div className="project-grid">
          {orderedProjects.map((project, index) => {
            const { title, info, repo, id, date } = project;
            return (
              <article className="project-card" key={id}>
                <div className="project-card__media">
                  <Slider id={id} />
                  <span className="project-card__number">
                    0
                    {index + 1}
                  </span>
                </div>
                <div className="project-card__body">
                  <p className="project-card__date">{date}</p>
                  <h3>{title}</h3>
                  <p className="project-card__role">{projectRoles[id]}</p>
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
