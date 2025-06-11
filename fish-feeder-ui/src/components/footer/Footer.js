import { Container } from '../container/Container';
import Logo from '../logo/Logo';
import { 
  SFooter,
  LogoWrapper,
  FooterBottom,
  FooterBottomText
} from './Footer.styled';


const Footer = () => {
  return (
    <SFooter>
        <Container>
            <LogoWrapper>
                <Logo/>
            </LogoWrapper>
            <FooterBottom>
                <FooterBottomText>2025 AutoFEED. All Rights Reserved.</FooterBottomText>
            </FooterBottom>
        </Container>
    </SFooter>
    
  );
};

export default Footer;
