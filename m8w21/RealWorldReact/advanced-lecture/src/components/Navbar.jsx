import { NavLink } from "react-router";
import { AppBar, Button, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (newOpen) => {
        setIsOpen(newOpen);
    }

    return ( 
    <nav>
        <AppBar position="fixed">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={()=>toggleDrawer(true)}
                >
                    <MenuIcon />
                    {/* <Button onClick={()=>toggleDrawer(true)}>Open Menu</Button> */}
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Retro Shop
                </Typography>
            </Toolbar>
        </AppBar>
        <Drawer open={isOpen} onClick={()=>toggleDrawer(false)}>
            <List>
                <ListItem
                    button
                    component={NavLink}
                    to="/"
                    end
                >
                    <ListItemText primary="Home"/>
                </ListItem>
                <ListItem
                button
                component={NavLink}
                to="/products"
                end
                >
                    <ListItemText primary="Products"/>
                </ListItem>
                <ListItem
                button
                component={NavLink}
                to="/products/Sony"
                end
                >
                    <ListItemText primary="Sony"/>
                </ListItem>
                <ListItem
                button
                component={NavLink}
                to="/products/Nintendo"
                end
                >
                    <ListItemText primary="Nintendo"/>
                </ListItem>
                <ListItem
                button
                component={NavLink}
                to="/products/Microsoft"
                end
                >
                    <ListItemText primary="Microsoft"/>
                </ListItem>
                {/* <NavLink
                to="/products/Microsoft"
                end
                >
                    Microsoft
                </NavLink> */}
            </List>
        </Drawer>

    </nav> 
    );
}

export default Navbar;