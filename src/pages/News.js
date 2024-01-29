// News.js
import React from 'react';
import Post from '../Components/Post';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const News = () => {
    // Example data for breaking news about the movie "Better Call Saul"
    const breakingNews = {
        id: 1,
        title: 'Breaking News: "Better Call Saul" Movie Announced!',
        author: 'Entertainment Insider',
        content: 'In a surprising turn of events, the highly acclaimed TV series "Better Call Saul" is officially getting its own movie! Fans of the "Breaking Bad" spin-off have been eagerly awaiting more from the beloved character, Saul Goodman.',
        date: 'February 15, 2024',
        imageUrl: 'https://th.bing.com/th/id/OIP.vB48Qx3BQJAWWYw-CcK6DAHaGO?rs=1&pid=ImgDetMain', // Replace with the actual image URL
    };

    // Example data for a second post
    const secondPost = {
        id: 2,
        title: 'Exclusive Interview with "Better Call Saul" Cast and Crew',
        author: 'Hollywood Reporter',
        content: 'As the excitement builds for the upcoming "Better Call Saul" movie, we sat down with the cast and crew for an exclusive interview. Learn about behind-the-scenes moments, new plot details, and what fans can expect from this highly anticipated cinematic experience.',
        date: 'February 16, 2024',
        imageUrl: 'https://wallpapercave.com/wp/wp1930577.jpg', // Replace with the actual image URL
    };

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Post
                        title={breakingNews.title}
                        author={breakingNews.author}
                        content={breakingNews.content}
                        date={breakingNews.date}
                        imageUrl={breakingNews.imageUrl}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Post
                        title={secondPost.title}
                        author={secondPost.author}
                        content={secondPost.content}
                        date={secondPost.date}
                        imageUrl={secondPost.imageUrl}
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default News;
