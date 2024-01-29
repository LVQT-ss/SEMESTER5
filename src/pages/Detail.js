import React from 'react'
import { ListOfFilms } from '../Data/ListOfFilms'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Button, Container, Typography } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'

const Detail = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const film = ListOfFilms.find((film) => film.id === Number(id)) // Corrected variable name from listOfFilms to ListOfFilms
    console.log(film)

    if (!film) {
        // Handle case when movie is not found
        return <div>Movie not found</div>;
    }

    return (
        <Container maxWidth={false} sx={{ display: "flex", justifyContent: "center", marginTop: "2rem", flexWrap: 'wrap-reverse' }}>

            <Box sx={{ width: { sm: "60%", xs: "100%" } }}>
                <Typography variant="h4" component="h1">
                    {film.title}
                </Typography>
                <Typography variant="body1">
                    {film.description}
                </Typography>
                <Typography variant="body2">
                    Nation: {film.nation}
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: "2rem" }}>
                    Year: {film.year}
                </Typography>
                <iframe
                    className='video'
                    src={film.trailer}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{
                        width: '100%',  // Set the width to 100%
                        height: '400px',  // Set the height as desired
                        border: 'none',  // Remove the border
                        borderRadius: '8px',  // Optional: Add border-radius
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // Optional: Add box shadow
                    }}
                ></iframe>
            </Box>
        </Container>
    )
}

export default Detail
