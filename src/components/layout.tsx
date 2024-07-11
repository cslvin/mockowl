// src/components/layout.tsx
import { ReactNode } from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import styled from '@emotion/styled';

interface LayoutProps {
    children: ReactNode;
}

const CustomAppBar = styled(AppBar)`
    background-color: #08678C;
`;

const Title = styled(Typography)`
    font-size: 2rem;
`;

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <CustomAppBar position="static">
                <Toolbar>
                    <Title variant="h6">Mock Owl</Title>
                </Toolbar>
            </CustomAppBar>
            <Container>
                {children}
            </Container>
        </div>
    );
};

export default Layout;
