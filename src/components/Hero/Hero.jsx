import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Hero = () => (
  <section id="hero">
    <Container className="hero-layout">
      <div className="hero-copy">
        <p className="hero-eyebrow">5년차 개발자</p>
        <h1 className="hero-title">
          <span>윤다영</span>
          {' Portfolio'}
        </h1>
        <p className="hero-description">
          애플리케이션 개발부터 백엔드 API 개발과 서비스 운영까지,
          <br className="desktop-break" />
          다양한 환경에서 경험을 쌓아왔습니다.
        </p>
        <div className="hero-actions">
          <Link className="button button--primary" to="projects" smooth duration={800}>
            프로젝트 보기
          </Link>
          <Link className="button button--ghost" to="career" smooth duration={800}>
            경력 살펴보기
          </Link>
        </div>
        <ul className="hero-stack" aria-label="주요 기술">
          <li>Java</li>
          <li>Spring Boot</li>
          <li>Redis</li>
          <li>AWS · Azure</li>
        </ul>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="hero-visual__glow" />
        <div className="code-card">
          <div className="code-card__top">
            <span />
            <span />
            <span />
            <strong>service.yml</strong>
          </div>
          <div className="code-card__body">
            <p>
              <b>service:</b>
              {' reliable-api'}
            </p>
            <p>
              <b>runtime:</b>
              {' java'}
            </p>
            <p>
              <b>framework:</b>
              {' spring-boot'}
            </p>
            <p>
              <b>status:</b>
              {' '}
              <em>healthy</em>
            </p>
          </div>
        </div>
        <div className="status-card">
          <span className="status-card__dot" />
          <div>
            <strong>함께 만드는 개발</strong>
            <small>소통과 협업을 중요하게 생각합니다</small>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default Hero;
