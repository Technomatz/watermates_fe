import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Circle } from '@mui/icons-material';
import { Divider } from '@mui/material';

const steps = ['Order Confirmed', 'Shipped', 'Out for Delivery', 'Delivered'];

const CustomStepIcon = ({ index, activeStep, label }) => {
  const isActive = index === activeStep;
  const isCompleted = index < activeStep;
  return (
    <Box
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Circle style={{ color: 'green' }} fontSize="10px" />
      <span style={{ color: isActive || isCompleted ? 'primary' : 'disabled' }}>
        {label}
      </span>
    </Box>
  );
};

CustomStepIcon.propTypes = {
  index: PropTypes.number.isRequired,
  activeStep: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default function OrderDetailStapper({ currentStape }) {
  return (
    <Box sx={{ width: '36vw' }}>
      <Stepper activeStep={currentStape} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              StepIconComponent={() => (
                <CustomStepIcon
                  index={index}
                  activeStep={currentStape}
                  label={label}
                />
              )}
              style={{ fontSize: '14px' }}
            />
          </Step>
        ))}
      </Stepper>
      <Divider sx={{ marginTop: '1rem' }} />
    </Box>
  );
}
