import React from 'react'
import { Stepper, Typography, Step, Button } from '@material-tailwind/react'
import { BiCheck } from 'react-icons/Bi';

const StepComponent = () => {

    const [activeStep, setActiveStep] = React.useState(0);
    const [isLastStep, setIsLastStep] = React.useState(false);
    const [isFirstStep, setIsFirstStep] = React.useState(false);
   
    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div>
        <Stepper
          activeLineClassName="bg-gradient-to-r from-[#E62132] to-[#FDD100]"
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
        >
          <Step activeClassName='bg-gradient-to-r from-[#E62132] to-[#FDD100]' completedClassName="bg-gradient-to-r from-[#E62132] to-[#FDD100]" onClick={() => setActiveStep(0)}>
            {
              activeStep > 0? 
              <BiCheck className="h-5 w-5" />
              :
              <p>1</p>
            }
            <div className="absolute -bottom-[2.5rem] w-max text-center sm:flex hidden flex-col">
            {
                activeStep > 0?
                <Typography
                    variant="h6"
                    color="orange"
                >
                    Verifikasi Email
                </Typography>
                :
                <Typography
                    variant="h6"
                    color={activeStep === 0 ? "gray" : "gray"}
                >
                    Verifikasi Email
                </Typography>
            }
            </div>
          </Step>
          <Step activeClassName='bg-gradient-to-r from-[#E62132] to-[#FDD100]' completedClassName="bg-gradient-to-r from-[#E62132] to-[#FDD100]" onClick={() => setActiveStep(1)}>
            {
              activeStep > 1? 
              <BiCheck className="h-5 w-5" />
              :
              <p>2</p>
            }
            <div className="absolute -bottom-[2.5rem] w-max text-center sm:flex hidden flex-col">
            {
                activeStep > 1?
                <Typography
                    variant="h6"
                    color="orange"
                >
                    Detail Data
                </Typography>
                :
                <Typography
                    variant="h6"
                    color={activeStep === 1 ? "gray" : "gray"}
                >
                    Detail Data
                </Typography>
            }
            </div>
          </Step>
        </Stepper>
    </div>
  )
}

export default StepComponent