'use client';

import { AppBar, Toolbar, Typography } from '@mui/material';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <AppBar position="static" className="bg-primary">
                <Toolbar>
                    <Typography variant="h6" className="text-white font-nunito text-3xl"> {/* Increase font size and apply Nunito font */}
                        Mock Owl
                    </Typography>
                </Toolbar>
            </AppBar>
            <main className="p-4">
                {children}
            </main>
        </div>
    );
};

export default Layout;
