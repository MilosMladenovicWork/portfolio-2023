import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="MM Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About me" />
        <ProjectsSection sectionId="projects" heading="My Projects" />
        <ContactSection sectionId="contact" heading="Feel free to contact me!" />
      </Page>
    </>
  );
}
