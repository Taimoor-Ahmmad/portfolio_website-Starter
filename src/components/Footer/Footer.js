
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+923184521721'>+923184521721</LinkItem>
          <LinkItem href='tel:++921057562'>+923021057562</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:taimoorahmad890@gmail.com'>taimoorahmad890@gmail.com</LinkItem>
          <LinkItem href='mailto:taimoorahmmadofficial530@gmail.com'>taimoorahmmadofficial530@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Find me there</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/Taimoor-Ahmmad">
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://linkedin.com/in/taimoor-Ahmmad">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.discordapp.com/users/1009517474502426654">
          <AiFillFacebook size="3rem"/>
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
