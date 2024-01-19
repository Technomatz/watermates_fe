// import React from 'react';
// import Sidebar from '../SideBar/Index';

// function Favorites() {
//   return (
//     <div>
//       <Sidebar />
//       Favorites
//     </div>
//   );
// }

// export default Favorites;

// MuiCard.js

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Sidebar from '../SideBar/Index';

const MuiCard = ({ imageSrc, title, description, onFavoriteClick }) => {
  return (
    <div>
      <Sidebar />
      <Card>
        <CardMedia component="img" height="140" image={imageSrc} alt={title} />
        <CardContent>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Button onClick={onFavoriteClick} variant="contained" color="primary">
            Add to Favorites
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default MuiCard;
