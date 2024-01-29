import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ListOfFilms } from '../Data/ListOfFilms';
import { Link } from 'react-router-dom';


const defaultTheme = createTheme();

const Album = () => {


    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />

            <main>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 2,
                        pb: 1,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Booking Movies
                        </Typography>
                    </Container>
                </Box>

                <Container sx={{ py: 2 }} maxWidth="md">
                    <Grid container spacing={3}>
                        {ListOfFilms.map((film) => (
                            <Grid item key={film.id} xs={12} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="div"
                                        sx={{
                                            // Adjust height for a bigger card
                                            pt: '130%', // You can experiment with the value
                                        }}
                                        image={film.image}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {film.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {`Nation: ${film.nation}`}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {`Year: ${film.year}`}
                                        </Typography>
                                    </CardContent>

                                    <CardActions>
                                        <Link to={`/detail/${film.id}`}>
                                            <Button size="small">Detail</Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                </Container>
            </main>
        </ThemeProvider>
    );
};

export default Album;
