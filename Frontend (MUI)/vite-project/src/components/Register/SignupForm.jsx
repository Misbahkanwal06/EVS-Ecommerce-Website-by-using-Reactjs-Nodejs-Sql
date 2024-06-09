

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Box, Typography, Container, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';





function SignupForm() {

    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [validationError, setValidationError] = useState({});
    const navigate = useNavigate();

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const validate = (userObj) => {
        const error = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

        if (!fname) {
            error.name = 'Customer name is required!';
        }
        if (!email) {
            error.email = 'User Email is required!';
        } else if (!emailRegex.test(email)) {
            error.email = 'Please enter a valid email address';
        }
        if (!password) {
            error.password = 'User Password is required!';
        } else if (!passwordRegex.test(password)) {
            error.password =
                'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.';
        }
        return error;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const customer = { fname, lname, email, password, gender };
        const errors = validate(customer);
        setValidationError(errors);

        if (Object.keys(errors).length === 0) {
            try {
                const res = await axios.post('http://localhost:3008/api/v1/customer/create', customer);
                if (res.data.send === 'Customer registered successfully') {
                    alert('Customer registered successfully');
                    navigate('/login');
                } else {
                    alert('User cannot be created');
                }
            } catch (error) {
                console.error('Error registering user', error);
            }
        }
    };

    return (
        <>
            <Container maxWidth="sm" sx={{ mb: 5, p: '3' }}>
                <Box display="flex" justifyContent="space-between" mt={5} >
                    <Typography variant="h5">Create Your Account</Typography>
                    <Typography variant='p'>
                        Already have an account?
                        <Link
                            to="/login"
                            style={{ color: 'blue', textDecoration: 'none' }}
                        >
                            Sign in
                        </Link>
                        {/* <Link to="/login" sx={{color:'red'}} >Sign in</Link> */}
                    </Typography>
                </Box>

                <Box mt={2} component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="First name"
                                value={fname}
                                onChange={(e) => setFName(e.target.value)}
                                error={Boolean(validationError.fname)}
                                helperText={validationError.fname}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Last name"
                                value={lname}
                                onChange={(e) => setLName(e.target.value)}
                                required
                            />
                        </Grid>
                    </Grid>

                    <Box mt={2}>
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={Boolean(validationError.email)}
                            helperText={validationError.email}
                            required
                        />
                    </Box>
                    <Box mt={2}>
                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={Boolean(validationError.password)}
                            helperText={validationError.password}
                            required
                        />
                    </Box>
                    <Box mt={2}>
                        <FormControl fullWidth required>
                            <InputLabel>Gender</InputLabel>
                            <Select
                                value={gender}
                                onChange={handleGenderChange}
                            >
                                <MenuItem value="">
                                    <em>Select gender</em>
                                </MenuItem>
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="female">Female</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box mt={3}>
                        <Button type="submit" variant='contained' sx={{ backgroundColor: 'pink', color: 'white' }} fullWidth>
                            Sign Up
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default SignupForm;
