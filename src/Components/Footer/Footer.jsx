import React from 'react';
import { Box, Typography, Stack, IconButton } from '@mui/material';
import {Grid} from '../index'
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { ColorPaletter } from '../index';

function Footer() {
    return <ColorPaletter children={
         <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 4 }}>
            <Grid container spacing={4} justifyContent="center">
                {/* Column 1: About Us */}
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" gutterBottom>
                        About Us
                    </Typography>
                    <Typography variant="body2">
                        We are a leading tech company dedicated to delivering the best user experience and services. Follow us to stay updated!
                    </Typography>
                </Grid>

                {/* Column 2: Quick Links */}
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" gutterBottom>
                        Quick Links
                    </Typography>
                    <Stack spacing={1}>
                        <Typography variant="body2">Home</Typography>
                        <Typography variant="body2">About</Typography>
                        <Typography variant="body2">Services</Typography>
                        <Typography variant="body2">Contact</Typography>
                    </Stack>
                </Grid>

                {/* Column 3: Contact */}
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" gutterBottom>
                        Contact Us
                    </Typography>
                    <Typography variant="body2">Email: contact@yourcompany.com</Typography>
                    <Typography variant="body2">Phone: +123-456-7890</Typography>
                    <Typography variant="body2">Address: 123 Tech Street, City</Typography>
                </Grid>

                {/* Column 4: Social Media */}
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" gutterBottom>
                        Follow Us
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <IconButton color="inherit" href="https://facebook.com" target="_blank">
                            <Facebook />
                        </IconButton>
                        <IconButton color="inherit" href="https://twitter.com" target="_blank">
                            <Twitter />
                        </IconButton>
                        <IconButton color="inherit" href="https://instagram.com" target="_blank">
                            <Instagram />
                        </IconButton>
                        <IconButton color="inherit" href="https://linkedin.com" target="_blank">
                            <LinkedIn />
                        </IconButton>
                    </Stack>
                </Grid>
            </Grid>

            {/* Footer Bottom */}
            <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Typography variant="body2">
                    © {new Date().getFullYear()} Your Company. All rights reserved.
                </Typography>
            </Box>
        </Box>}
    />
}

export default Footer;
