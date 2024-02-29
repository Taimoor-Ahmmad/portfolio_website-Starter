import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: "96% in", text: 'matric and topped in area'},
  { number: '92 % in', text: 'intermediate and got excellent marks', },
  { number: "4th position in", text: 'Lahore Board', },
  { number: 'A grade in', text: 'Diploma of AI', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card,index)=>(
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      )
      )}
    </Boxes>
  </Section>
);

export default Acomplishments;
