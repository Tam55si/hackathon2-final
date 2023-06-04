
import Layout from "../Layout";
import { Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const About = () => {
    return (
        <Layout>
            <Box sx={{
                my: 15,
                textAlign: 'center',
                p: 2,
                '& h4': {
                    fontweight: 1000,
                    my: 2,
                    fontSize: '2.3rem',
                },
                '@media(max-width:600px)': {
                    mt: 0,
                    '& h4': {
                        fontSize: '1.5rem'
                    }
                }
            }}>
                <Typography variant='h4'>
                    WELCOME TO THE RESUMESTORE:-
                </Typography>
                <p>
                    Tanmoy Si:-         <br />Email : tanmoy.si20@gmail.com <br /><a href="https://github.com/Tam55si">
                        <GitHubIcon />
                    </a>
                </p>
                <p>
                    Agnibha Ghosh:-     <br />Email : agnibha66@gmail.com <br /><a href="https://github.com/agnibha66">
                        <GitHubIcon /></a>
                </p>
                <p>
                    Himanshu Sharma:-   <br />Email : himanshus906@gmail.com<br /><a href="https://github.com/">
                        <GitHubIcon /></a>
                </p>
                <br />
                <p>

                </p>
            </Box>
        </Layout>

    )
}

export default About
