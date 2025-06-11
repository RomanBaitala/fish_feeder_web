import React from 'react';
import Logo from '../logo/Logo';
import { Container } from '../container/Container';
import { SHeader, HeaderWrapper } from './Header.styled';

const Header = () => {

    return (
        <SHeader>
            <Container>
                <HeaderWrapper>
                    <Logo />
                </HeaderWrapper>
            </Container>
        </SHeader>
    );
};

export default Header;
