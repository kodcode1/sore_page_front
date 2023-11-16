import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export interface ProductInterface {
    title: string,
    images: string
    }

export default function CardLayers3d(props:ProductInterface) {
  return (
    <Box
      sx={{
        perspective: '1000px',
        transition: 'transform 0.4s',
        '& > div, & > div > div': {
          transition: 'inherit',
        },
        '&:hover': {
          '& > div': {
            transform: 'rotateY(30deg)',
            '& > div:nth-child(2)': {
              transform: 'scaleY(0.9) translate3d(20px, 30px, 40px)',
            },
            '& > div:nth-child(3)': {
              transform: 'translate3d(45px, 50px, 40px)',
            },
          },
        },
      }}
    >
      <Card
        variant="outlined"
        sx={{
          minHeight: '280px',
          width: 320,
          backgroundColor: '#fff',
          borderColor: '#000',
        }}
      >
        <CardCover
          sx={{

            backdropFilter: 'blur(1px)',
          }}
        >
        </CardCover>
        <img style={{height:"250px"}} src={props?.images}/>
        <CardContent
          sx={{
            alignItems: 'self-end',
            justifyContent: 'flex-end',
            backdropFilter: 'blur(1px)',
            borderColor: '#777',
          }}
        >
          <Typography level="h2" fontSize="lg" textColor="#2196f3" m={2}>
            {props.title}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}