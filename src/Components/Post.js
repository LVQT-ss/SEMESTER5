// Post.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Post = ({ title, author, content, date, imageUrl }) => {
    const cardStyle = {
        background: `url(${imageUrl}) center/cover no-repeat`, // Set the image as the background
        color: 'white', // Set text color to white for better visibility
        paddingBottom: '40px', // Increase bottom padding
    };

    return (
        <Card sx={cardStyle}>
            <CardContent>
                <Box sx={{ pt: '75%' }} /> {/* Placeholder for the aspect ratio of the background image */}
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    {author} - {date}
                </Typography>
                <Typography variant="body2">
                    {content}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Post;
