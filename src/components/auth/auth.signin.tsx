'use client'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Divider, IconButton, InputAdornment } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { signIn } from 'next-auth/react';

const defaultTheme = createTheme();

export default function AuthSignIn() {
    const [isEmail, setIsEmail] = React.useState(false);
    const [isPassword, setIsPassword] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email') as string;
        const password = data.get('password') as string;
        setIsEmail(false);
        setIsPassword(false);
        if (!email) {
            setIsEmail(true);
        }
        if (!password) {
            setIsPassword(true);
        }
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)', // Thêm box-shadow để tạo bóng
                        padding: '20px', // Thêm padding cho phần nội dung của form
                        borderRadius: '10px', // Thêm bo tròn cho form
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            error={isEmail}
                            helperText={isEmail ? "Email is required." : ""}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type={showPassword ? 'text' : 'password'} // Sử dụng 'text' hoặc 'password' tùy thuộc vào trạng thái của showPassword
                            id="password"
                            autoComplete="current-password"
                            error={isPassword}
                            helperText={isPassword ? "Password is required." : ""}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Divider style={{ flex: '1', margin: '20px 0' }} />
                            <p style={{ margin: '0 10px' }}>Or using</p>
                            <Divider style={{ flex: '1', margin: '20px 0' }} />
                        </div>

                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <div style={{ margin: '20px 0', display: 'flex', justifyContent: 'center' }}>
                            <GitHubIcon 
                                titleAccess='Login with github'
                                style={{ marginRight: '25px', fontSize: '45px', color: '#FFA600', cursor: 'pointer' }}
                                onClick={() => {
                                    signIn('github')
                                }}
                            >
                            </GitHubIcon>
                            <GoogleIcon style={{ fontSize: '48px', color: '#FFA600' }}></GoogleIcon>
                        </div>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
