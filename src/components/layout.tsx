// src/components/layout.tsx
import { ReactNode } from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">Mock Owl</Typography>
                </Toolbar>
            </AppBar>
            <Container>
                {children}
            </Container>
        </div>
    );
};

export default Layout;
