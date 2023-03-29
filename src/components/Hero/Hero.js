import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <div>
    <Section row nopadding>

      <LeftSection>
        <SectionTitle main center>
            welcome to <br/>
            my personal <br/>
            Portfolio
        </SectionTitle>
        <SectionText>
          {/* the purpose is to help others! */}
        </SectionText>

        <Button onClick={()=>window.location="https://google.com"}>Learn more</Button>
      </LeftSection>

    </Section>
  </div>
);

export default Hero;