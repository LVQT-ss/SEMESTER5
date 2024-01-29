import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Movie Theaters
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function About() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <CssBaseline />
                <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
                    <Typography variant="h2" component="h1" gutterBottom>
                        About Our Movie Theaters
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                        {'Welcome to a cinematic experience like no other!'}
                    </Typography>
                    <Typography variant="body1">
                        At Your Movie Theaters, we are passionate about providing you with the
                        best movie-watching experience. Our state-of-the-art theaters, comfortable
                        seating, and cutting-edge audio-visual technology promise to transport you
                        into the heart of the stories on the big screen.
                    </Typography>
                    <Typography variant="body1">
                        Whether you're a film enthusiast or just looking for a night of
                        entertainment, we have a diverse selection of movies for every taste.
                        From blockbuster hits to indie gems, we curate a lineup that caters to
                        all audiences.
                    </Typography>
                </Container>

            </Box>
        </ThemeProvider>
    );
}
