import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Grid, Paper, Typography, TextField, Button, Box } from '@mui/material';

function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signin = async (e) => {
        e.preventDefault();
        const user = { email, password };
        try {
            const res = await axios.post('http://localhost:3008/api/v1/customer/login', user);
            if (res.data.send === 'Successful login') {
                let { obj } = res.data;
                localStorage.setItem('userdata', JSON.stringify(obj));
                alert('Successful login');
                navigate('/'); // Redirect to home after successful login
            } else {
                alert('Invalid Email or password');
            }
        } catch (error) {
            console.log('Error:', error);
            alert('Error logging in. Please try again.');
        }
    };


    return (
        <Container component="main" maxWidth="xs" sx={{mb:5}}>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Paper elevation={6} sx={{ padding: 4 }}>
                    <Typography component="h1" variant="h5" align="center" gutterBottom>
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={signin} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant='contained'
                            color="primary"
                            // sx={{ mt: 3, mb: 2 }}
                            sx={{ backgroundColor: 'pink', color: 'white', mt:3,mb:2 }}
                        >
                            Sign In
                        </Button>
                        <Typography align="center">
                            New Member?{' '}
                            <Link to="/signup" style={{ color: 'blue', textDecoration: 'none' }}>
                                Register here
                            </Link>
                        </Typography>
                    </Box>
                </Paper>
            </Box>
        </Container>
    )
}

export default LoginForm
