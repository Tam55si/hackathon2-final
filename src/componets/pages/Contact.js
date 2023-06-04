
import Layout from '../Layout';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
    return (
        <Layout>
            < Box sx={{ my: 10, ml: 10, '& h4': { fontweight: 'bold', mb: 2 } }}>
                <Typography variant="h4">
                    Contact Here
                </Typography>
                <p>

                </p>
            </Box>
            <Box sx={{
                m: 3, width: '500px', ml: 10,
                '@media (max-width:400px)': { width: '250px', },
            }}>
                <TableContainer component={Paper}>
                    <Table aria-label="contact table">
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    sx={{ bgcolor: "black", color: "white" }}
                                    align="center"
                                >
                                    Contact Details
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <SupportAgentIcon sx={{ color: "black", pt: 1 }} /> 1800-5688-89632
                                    (toll free)
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <EmailIcon sx={{ color: "red", pt: 1 }} /> help@myresume.com
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <CallIcon sx={{ color: "green", pt: 1 }} /> ********56
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Layout>

    )
}

export default Contact
