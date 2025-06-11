import styled from 'styled-components';

export const SFooter = styled.footer`
  background-color: #1c2c39;

`

export const FooterContainer = styled.div`
  color: white;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 4px solid #007BFF;
  max-width: 1220px;
  margin: 0 auto;
`;

export const LogoWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding-top: 10px;
    margin-bottom: 10px;
`

export const FooterColumn = styled.div`
  flex: 1;
  padding: 0 20px;

  h3 {
    font-size: 1.2em;
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
  }

  a {
    color: white;
    text-decoration: none;
    margin-bottom: 5px;
    display: block;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 15px;
`;

export const SocialIcon = styled.a`
  color: white;
  font-size: 1.8em;

  &:hover {
    color: #007BFF;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  font-size: 0.9em;
  border-top: 1px solid #ffffff33;
  padding-top: 10px;
  max-width: 1220px;
  margin: 0 auto;
  margin-top: 20px;
  padding-bottom: 10px;
`;

export const FooterBottomText = styled.p`
    text-align: center;
    font-family: Lato;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: white;
`