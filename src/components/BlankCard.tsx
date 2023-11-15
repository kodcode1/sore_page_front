import { Card } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';


interface BlankCardProps {
  children: React.ReactNode;
  className?: string;
}

const BlankCard =  ({children, className}: BlankCardProps) => {
  return (
    <Card
      sx={{ p: 0, position: 'relative' }}
      className={className}
      elevation={9}
      variant={undefined}
    >
      {children}
    </Card>
  );
};

BlankCard.propTypes = {
  children: PropTypes.node,
};

export default BlankCard;
