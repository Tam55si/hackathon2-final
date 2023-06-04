import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Typography } from '@mui/material'
const Footer = () => {
    return (
        <>
            <Box sx={{ textAlign: 'center', bgcolor: '#1A1A19', color: 'goldenrod', p: 3 }}>
                <Box sx={{
                    my: 3, '& svg': {
                        fontSize: '60px',
                        cursor: 'pointer',
                        mr: 2,
                    },
                    '& svg:hover': {
                        color: '#20DAA5',
                        transform: 'translateX(5px)',
                        transition: 'all 400ms',
                    }
                }}>
                    <a href="https://www.instagram.com/">
                        <InstagramIcon sx={{ color: 'goldenrod' }} />
                    </a>
                    <a href="https://twitter.com/i/flow/login">
                        <TwitterIcon sx={{ color: 'goldenrod' }} />
                    </a>
                    <a href="https://github.com/">
                        <GitHubIcon sx={{ color: 'goldenrod' }} />
                    </a>
                    <a href="https://www.youtube.com/">
                        <YouTubeIcon sx={{ color: 'goldenrod' }} />
                    </a>
                    <a href="https://www.linkedin.com/">
                        <LinkedInIcon sx={{ color: 'goldenrod' }} />
                    </a>

                </Box>

                <Typography variant='h5' sx={{
                    '@media (max-width:550px) ': {
                        fontSize: '1rem',
                    }
                }}>
                    All Rights Reserved &copy; RESUMESTORE
                </Typography>
            </Box>
        </>
    )
}

export default Footer
