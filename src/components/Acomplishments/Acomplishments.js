import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: "96% in", text: 'matric'},
  { number: '92 % ', text: 'ntermediate', },
  { number: "4th position", text: 'Lahore Board', },
  { number: 'A grade', text: 'Diploma of AI', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card,index)=>(
        <Box key={index}>
          <BoxNum>{card.number} in</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      )
      )}
    </Boxes>
  </Section>
);

export default Acomplishments;
