import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { IRatedCardItem } from './rated-cards/rated-cards';

import styles from './rated-card.module.scss';

interface IRatedCardProps {
  item: IRatedCardItem;
}

export const RatedCard: React.FC<IRatedCardProps> = ({ item }) => {
  return (
    <Card className={styles.card}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={item.url} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div" color="green">
            {`FROM ${item.price}`}
          </Typography>
          <Stack spacing={1}>
            <div className={styles.ratingBlock}>
              <Rating name="size-small" defaultValue={item.rating} size="small" />
              <div className={styles.reviews}>{`(${item.reviews} Reviews)`}</div>
            </div>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
