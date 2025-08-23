import {AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React, {useState} from "react";

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const menuItems = [
        {text: 'Home', href: '#home'},
        {text: 'Projects', href: '#projects'},
        {text: 'About', href:  '#about'},
        {text: 'Contact', href: '#contact'},
    ];

    return(
        <>
            <AppBar position="static" style={{backgroundColor: '#1e3a8a'}}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Samidu
                    </Typography>
                    {/*desktop menu (hidden on small screens)*/}
                    <div sx={{display: {xs: 'none', sm: 'block'}}}>
                        {menuItems.map((item) => (
                            <Button color="inherit" href={item.href} key={item.text}>
                                {item.text}
                            </Button>
                        ))}
                    </div>
                    {/*mobile menu button (only shown on small screens)*/}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={() => setDrawerOpen(true)}
                        sx={{display: {sm: 'none'}}}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/*mobile drawer*/}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <List>
                    {menuItems.map((item) => (
                        <ListItem button component="a" href={item.href} key={item.text} onClick={() => setDrawerOpen(false)}>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>

        </>
    );
};

export default Header;