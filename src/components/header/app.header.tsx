'use client'
import Link from 'next/link';
import './app.css'
import { Avatar, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ApartmentIcon from '@mui/icons-material/Apartment';
import WorkIcon from '@mui/icons-material/Work';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import MonitorIcon from '@mui/icons-material/Monitor';
import BuildIcon from '@mui/icons-material/Build';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import InterestsIcon from '@mui/icons-material/Interests';
import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"; import { Logout, PersonAdd, Settings } from '@mui/icons-material';
;
const AppHeader = () => {
    const { data: session } = useSession();
    const [isHeaderFixed, setHeaderFixed] = useState(false);


    // DROP DOWN MENU PROFILE
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        const handleScroll = () => {
            // Kích thước mà bạn muốn headerSecond trở thành fixed
            const threshold = 50;
            const scrollY = window.scrollY;

            if (scrollY > threshold && !isHeaderFixed) {
                setHeaderFixed(true);
            } else if (scrollY <= threshold && isHeaderFixed) {
                setHeaderFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isHeaderFixed]);
    return (
        <Box>
            <Box className='header-desktop'>
                <Box className='headerFisrt'>
                    <Box className='listHeader'>
                        <Link className='item' href='/'>
                            <LocalOfferIcon className='icon'></LocalOfferIcon>
                            Khuyến mãi</Link>
                        <Link className='item' href='/'>
                            <ApartmentIcon className='icon'></ApartmentIcon>
                            Hệ thống Showroom</Link>
                        <Link className='item' href='/'>
                            <WorkIcon className='icon'></WorkIcon>
                            Tư vấn doanh nghiệp</Link>
                        <Link className='item' href='/d'>
                            <HeadsetMicIcon className='icon'></HeadsetMicIcon>
                            Liên hệ</Link>
                        <Link className='item' href='/'>
                            <MonitorIcon className='icon'></MonitorIcon>
                            Tin công nghệ</Link>
                        <Link className='item' href='/' >
                            <BuildIcon className='icon'></BuildIcon>
                            Xâu dựng cấu hình</Link>
                    </Box>
                </Box>
                <Box className={`headerSecond ${isHeaderFixed ? 'fixed' : ''}`}>
                    <Box className="teko-col">
                        <InterestsIcon style={{ color: "#5FE7FF", margin: "0 10px", height: "35px", width: "35px" }}></InterestsIcon>
                        <Box className="category">
                            <MenuIcon style={{ color: "#82869E", margin: "0 10px" }}></MenuIcon>
                            <a href='#'>Danh mục sản phẩm</a>
                        </Box>
                    </Box>
                    <Box className="searchContain">
                        <Box sx={{ paddingLeft: "10px", width: "100%", height: "37px", border: "none", background: "#F5F5F5", borderRadius: "5px", display: "flex", alignItems: "center" }}>
                            <input style={{ outline: "none" }} type="text" placeholder='Nhập từ khoá cần tìm' />
                            <SearchIcon style={{ color: "#616161", cursor: "pointer" }} />
                        </Box>
                        <p style={{ marginBottom: 0, whiteSpace: "nowrap", marginTop: "0.5rem", cursor: "pointer" }}>
                            <a>Tết không lo</a>
                            &nbsp;&nbsp;&nbsp;
                            <a>Tết không lo</a>
                            &nbsp;&nbsp;&nbsp;
                            <a>Tết không lo</a>
                            &nbsp;&nbsp;&nbsp;
                            <a>Tết không lo</a>
                            &nbsp;&nbsp;&nbsp;
                            <a>Tết không lo</a>
                        </p>
                    </Box>
                    {session ?
                        (<>
                            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                <Tooltip title="Account settings">
                                    <IconButton
                                        onClick={handleClick}
                                        size="small"
                                        sx={{ ml: 2 }}
                                        aria-controls={open ? 'account-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                    >
                                        <Avatar src={session.user ? session.user.image ?? '' : ''} sx={{ width: 32, height: 32 }}></Avatar>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&::before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={handleClose}>
                                    <Avatar /> Profile
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Avatar /> My account
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <PersonAdd fontSize="small" />
                                    </ListItemIcon>
                                    Add another account
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <Settings fontSize="small" />
                                    </ListItemIcon>
                                    Settings
                                </MenuItem>
                                <MenuItem onClick={() => { handleClose(); signOut(); }}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </>) : (<>
                            <a style={{ textDecoration: 'none' }} href="/auth/signin">
                                <AccountCircleIcon style={{ marginRight: "10px", marginLeft: "25px", color: "#999CAF" }} />
                                <div>
                                    <div typeof="body" color="textSecondary" className="css-1ajy8lg">Đăng nhập</div>
                                    <div typeof="body" color="textSecondary" className="css-1ajy8lg">Đăng ký</div>
                                </div>
                            </a>
                        </>)}

                    <NotificationsNoneIcon style={{ margin: "0 20px", color: "#999CAF", fontSize: "30px" }}></NotificationsNoneIcon>
                    <Box className="cartShopping">
                        <ShoppingCartIcon style={{ marginRight: "10px", marginLeft: "25px", color: "#999CAF" }}></ShoppingCartIcon>
                        <div>
                            <div typeof="body" color="textSecondary" className="title css-1ajy8lg">Giỏ hàng của bạn</div>
                            <div typeof="body" color="textSecondary" className="title css-1ajy8lg">(0) sản phẩm</div>
                        </div>
                    </Box>
                </Box>
            </Box>
            <Box className='header-Mobile'>
                <Box className='search'>
                    <SearchIcon style={{ marginLeft: '25px', position: 'absolute', color: '#808080' }} />
                    <input className='input-search' placeholder='Bạn muốn mua gì hôm nay?' />
                    <ShoppingCartIcon className='shopping-cart' />
                </Box>

            </Box>
        </Box >


    );
};

export default AppHeader;
