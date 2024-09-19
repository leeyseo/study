import PropTypes from "prop-types";
import React from "react";
import { About } from "./About";
import { Playground } from "./Playground";
import { Work } from "./Work";
import "./style.css"; // 스타일 파일도 가져오기

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
            {/* 나머지 경력 사항... */}
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
  footerClassName: PropTypes.string
};

