import { FireTruckOutlined, Lock, StarBorder } from '@mui/icons-material';
import { Box } from '@mui/material';
import React from 'react';
import './secondaryFooter.css';

function SecondaryFooter() {
  return (
    <div style={{ position: 'absolute', bottom: '0' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <div className="secondaryfooter">
          <span>
            <FireTruckOutlined className="footericons" />
          </span>
          <span className="footerText"> Fast Delovery</span>
        </div>
        <div className="secondaryfooter">
          <span>
            <StarBorder className="footericons" />
          </span>
          <span className="footerText">Five star quality</span>
        </div>
        <div className="secondaryfooter">
          <span>
            <Lock className="footericons" />
          </span>
          <span className="footerText">Highly secured</span>
        </div>
      </Box>
    </div>
  );
}

export default SecondaryFooter;
