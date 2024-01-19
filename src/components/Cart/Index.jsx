import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { ShoppingCart, LocationOn, Payment } from '@mui/icons-material';

const steps = ['My Cart', 'Delivery Information', 'Payment'];

// Custom StepIcon component with custom icons and labels
const CustomStepIcon = ({ index, activeStep, label }) => {
  const icons = [ShoppingCart, LocationOn, Payment];
  const IconComponent = icons[index];
  const isActive = index === activeStep;
  const isCompleted = index < activeStep;
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <IconComponent
        color={isActive ? 'primary' : isCompleted ? 'primary' : 'disabled'}
      />
      <span style={{ color: isActive || isCompleted ? 'primary' : 'disabled' }}>
        {label}
      </span>
    </div>
  );
};

CustomStepIcon.propTypes = {
  index: PropTypes.number.isRequired,
  activeStep: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default function CartStepper({ currentStape }) {
  return (
    <Box sx={{ width: '100%', marginTop: '15vh' }}>
      {/* Assuming activeStep is a state variable representing the current active step */}
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
            />
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
