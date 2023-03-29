import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
const projectsDemo=[{
    title:'Project1',
    description:'This is really really long description about this project'
  },
  {
    title:'Project2',
    description:'This is really really long description about this project'
  },
  {
    title:'Project3',
    description:'This is really really long description about this project'
  },
  {
    title:'Project4',
    description:'This is really really long description about this project'
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