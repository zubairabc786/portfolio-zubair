"use client";
import React, { useEffect } from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import Services from "./services/Services";
import Project from "./project/Project";
import Skills from "./Skills/Skills";
import Reviews from "./reviews/Reviews";
import Blog from "./Blog/Blog";
import Contact from "./contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: false,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
    const interval = setInterval(() => {
      AOS.refresh();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Project />
      <Skills />
      <Reviews />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;
