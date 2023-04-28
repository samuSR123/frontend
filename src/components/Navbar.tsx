import React, {FC, ReactElement} from "react";
import {Box, 
        Link, 
        Container, 
        IconButton, 
        Menu, 
        MenuItem, 
        Toolbar, 
        Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { routes } from "../routes";
import { NavLink } from "react-router-dom";
import { relative } from "path";

const Navbar: FC = (): ReactElement => {
    const [anchorElnav, setAnchorElNav] = React.useState(null);

        const handleOpenNavMenu = (event: any) => {
            setAnchorElNav(event.currentTarget);
         };

         const handleCloseNavMenu = () => {
            setAnchorElNav(null);
         };

         return (
            <Box
                sx={{
                    width: "100%",
                    height: "auto",
                    backgroundColor: "primary.main",
                    top: "0",
                    left: "0",
                    position: "fixed",
                    color: "secondary.main",
                }}
            >
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex"},
                            }}
                        >
                            <img width="50px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/McDonald%27s_SVG_logo.svg/3000px-McDonald%27s_SVG_logo.svg.png"/>
                            </Typography>
                            <Box sx={{flexGrow: 1, display: { xs:"flex", md: "none"}}}>-
                                <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElnav}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "left",
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "left"
                                    }}
                                    open={Boolean(anchorElnav)}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        display: { xs:"block", md: "none" },
                                    }}
                                >
                                    {routes.map((page) => (
                                    <Link
                                        key={page.key}
                                        component={NavLink}
                                        to={page.path}
                                    >
                                        <MenuItem onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page.title}</Typography>
                                        </MenuItem>
                                    </Link>
                                    ))}
                                </Menu>
                            </Box>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: "flex", md: "none"} }}
                            >
                            <img width="50px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/McDonald%27s_SVG_logo.svg/3000px-McDonald%27s_SVG_logo.svg.png"/>
                            </Typography>
                            <Box sx={{flexGrow: 1, display: { xs: "none", md: "flex"}}}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                        marginLeft: "1rem",
                                    }}
                                >
                                    {routes.map((page) => (
                                        <Link
                                            key={page.key}
                                            component={NavLink}
                                            to = {page.path}
                                            color="white"
                                            underline="none"
                                            variant="button"
                                            sx={ {fontSize: "large", marginLeft: "2rem" }}
                                        >
                                            {page.title}
                                        </Link>
                                    ))}
                                </Box>
                            </Box>
                        </Toolbar>
                    </Container>
                </Box>
         );
    };

export default Navbar;