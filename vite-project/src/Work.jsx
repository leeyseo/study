import React from "react";
import { About } from "./About";
import { Playground } from "./Playground";
import { Home } from "./Home";
import "./style.css";

export const PortfolioAboutPage = () => {
  return (
    <div className="portfolio-about-page">
      <div className="div-2">
        <div className="section">
          <div className="about-2">
            <p className="hi-i-m-leeyseo-ML">
              Hi I’m leeyseo,
              <br />
              ML engineer &amp; <br />
              web dev
            </p>
            <p className="p">This is practice page and still developing</p>
          </div>
          <div className="contact">
            <div className="overlap-group">
              <p className="text-wrapper-3">I am thrilled to answer to your next project</p>
              <img className="image" alt="Image" src="image.svg" />
            </div>
            <img className="seperator" alt="Seperator" src="seperator.svg" />
            <div className="text-wrapper-4">makifkarasu@outlook.com</div>
            <div className="text-wrapper-5">View Resume</div>
          </div>
          <div className="info">
            <p className="text-wrapper-6">
              Organic and Polygonal Modeling, UV Layout, Texturing, Retopology, Ilustration, Sound Design
            </p>
            <div className="text-wrapper-7">Main Software</div>
            <div className="text-wrapper-8">Main Skills</div>
            <p className="text-wrapper-9">
              Pixologic ZBrush, Autodesk Maya, The Foundry Mari, Arnold Renderer, Blender, Forger
            </p>
            <div className="text-wrapper-10">Adobe CC, Figma, Ableton</div>
          </div>
          <img className="element" alt="Element" src="1.png" />
        </div>
        <div className="navigation-bar">
          <div className="menu">
            <About className="about-instance" />
            <Home className="home" text="Home" />
            {/* <Work className="work-instance" text="Work" /> */}
            <Playground className="playground-instance" />
          </div>
        </div>
        <div className="group">
          <footer className="footer">
            <div className="leeyseo">leeyseo_2024</div>
            <div className="insta">instagram</div>
            <div className="text-wrapper-11">Linkedin</div>
            <div className="text-wrapper-12">Notion</div>
          </footer>
        </div>
      </div>
    </div>
  );
};
