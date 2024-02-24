'use client'
import Link from 'next/link';
import '../../app/styles/app.css'
import { Box } from '@mui/material';
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
import { useEffect, useState } from 'react';
const AppHeader = () => {
    const [isHeaderFixed, setHeaderFixed] = useState(false);

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
                    <Box className="login">
                        
                            <a style={{textDecoration: 'none'}} href="/login">
                                <Box className="login">
                                    <AccountCircleIcon style={{ marginRight: "10px", marginLeft: "25px", color: "#999CAF" }} />
                                    <div>
                                        <div typeof="body" color="textSecondary" className="css-1ajy8lg">Đăng nhập</div>
                                        <div typeof="body" color="textSecondary" className="css-1ajy8lg">Đăng ký</div>
                                    </div>
                                </Box>
                            </a>
                    </Box>
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
