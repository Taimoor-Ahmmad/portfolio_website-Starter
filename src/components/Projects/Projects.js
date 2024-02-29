import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
const projectsDemo=[{
    title:'Math Genie/Current',
    description:'Worked in building the User interface using figma, and coded using next js and tailwind css'
  },
  {
    title:'Term Project in Artificial intelligence',
    description:'Trained model in python to find relative music according to input'
  },
  {
    title:'Barcode and QR code reader',
    description:'Created barcode and QR code reader using YOLO v4 in python'
  },
  {
    title:'Demo project in React js',
    description:'Created Demo Project in react js and tailwind css'
}];
const Projects = () => (
  <div>
   <Section nopadding id="projects">

    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projectsDemo.map((project)=>
      <div>
        {project.title}
        <br />
        {project.description}
        
      </div>)}
    </GridContainer>

   </Section>
  </div>
);

export default Projects;