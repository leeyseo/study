import PropTypes from "prop-types";
import React from "react";
import { About } from "./About";
import { Playground } from "./Playground";
import { Work } from "./Work";
import "./style.css";

export const PortfolioWorkPage = ({ property1, footerClassName }) => {
  return (
    <div className="portfolio-work-page">
      <div className="navigation-bar">
        <div className="menu">
          <About className="about-instance" />
          <Work className="work-instance" />
          <Playground className="playground-instance" />
        </div>
      </div>
      <div className="section">
        <div className="headline">
          <div className="hello-i-m-leeyseo">
            Hello, I’m <br />
            leeyseo.
          </div>
          <img className="img" alt="Img" src="image.svg" />
          <p className="machine-learning">
            Machine learning engineer,
            <br />
            backend developer,
            <br />
            student devops
          </p>
        </div>
        <div className="body">
          <div className="element-PROJECT-NAME">01 / history</div>
          <p className="element">
            가톨릭대학교 컴퓨터정보공학부 20학번
            <br />
            2020 가톨릭대학교 공과대학 학생회 창공 기획부원
            <br />
            2020 가톨릭대 학생혁신기획단 창립단원
            <br />
            2021 가톨릭대학교 공과대학 학생회 초롱 홍부부원
            <br />
            2021 가톨릭대 학생혁신기획단 부단장
            <br />
            2021 할리데이비슨 인증중고차 프로젝트 참가
            <br />
            2021 대학혁신지원사업 가톨릭대 유일 장학생
            <br />
            2021 가톨릭대 컴퓨터정보공학부 성적 장학생(4.33)
            <br />
            2021 교내 프로그래밍 대회 수상
            <br />
            2022 nvidia 딥러닝 교육 이수
            <br />
            2023 정보처리산업기사
            <br />
            2023 해군, 해병대 AI경진대회 수상
            <br />
            2023 병장 만기전역
            <br />
            2023 UMC 5th 챌린저(server)
            <br />
            2024 LG AIMERS 참가 및 수료
            <br />
            2024 가톨릭대 축제기획단 대외협력팀 부팀장
            <br />
            2024 산업공학인공지능 학부연구생
            <br />
            2024 가톨릭대 ICT02 튜터
            <br />
            2024 GDSC(Google Developer Student Club_CUK)
            <br />
            2024 AWS cloud club 2nd
            <br />
            2024 pixel과 함께하는 데이터 분석 경진대회 수상
            <br />
            2024 가톨릭대 컴퓨터정보공학부 성적 장학생(4.36)
            <br />
            2024 코드블라썸 머신러닝 자동매칭 서비스 개발
            <br />
            2024 kakao x goorm 구름톤 유니브 가톨릭대 대표
          </p>
          <img className="seperator" alt="Seperator" src="seperator.svg" />
          <img className="element-2" alt="Element" src="1.png" />
        </div>
        <div className="body-2">
          <div className="element-PROJECT-NAME-2">02 / information</div>
          <p className="experimental">
            email: dandyi2525@gmail.com
            <br />
            github: leeyseo
            <br />
            university: Catholic University Of Korea
            <br />
            major: computer information engineering
          </p>
          <div className="link">Project WIP</div>
          <div className="thumbnail" />
          <img className="seperator-2" alt="Seperator" src="seperator-2.svg" />
        </div>
      </div>
      <div className={`footer ${footerClassName}`}>
        <div className="leeyseo">leeyseo_2024</div>
        <div className="insta">instagram</div>
        <div className="text-wrapper-3">Linkedin</div>
        <div className="text-wrapper-4">Notion</div>
      </div>
    </div>
  );
};

PortfolioWorkPage.propTypes = {
  property1: PropTypes.oneOf(["default"]),
};
