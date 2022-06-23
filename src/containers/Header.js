import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from '@mui/material';

const Header = () => {
    return (
        <div style={{ flexGrow: 1, marginBottom: 100 }}>
            <AppBar position="static">
                <Toolbar>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to={`/`}>
                        <Button color="inherit">Pendings</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;