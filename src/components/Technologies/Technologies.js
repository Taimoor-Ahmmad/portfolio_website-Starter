import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <div>
    <Section id='tech'>
      <SectionDivider/>
      <br />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I have worked in the range of Technologies in the world of website.
      </SectionText>
      <List>
        <ListItem>
          <DiReact size='3rem'/>
          <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
        </ListItem>

        <ListItem>
          <DiFirebase size='3rem'/>
          <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
           Typescript <br />
           Javascript <br />
          </ListParagraph>
        </ListContainer>
        </ListItem>

        <ListItem>
          <DiZend size='3rem'/>
          <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            photoshop and FIGMA
          </ListParagraph>
        </ListContainer>
        </ListItem>
       
      </List>
    </Section>
  </div>
);

export default Technologies;
