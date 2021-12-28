import React from 'react';

export const Banner: React.FC<any> = ({ el }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${el})`,
        width: '100%',
        height: '550px',
        backgroundPosition: 'center',
      }}
    >
      Banner
    </div>
  );
};
