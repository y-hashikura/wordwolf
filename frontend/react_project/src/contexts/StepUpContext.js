import React, { createContext } from 'react';
import { useStepUp } from '../hooks';

export const StepUpContext = createContext();

export const StepUpProvider = ({ children }) => {
    const { stepUps, increaseStepUps, decreaseStepUps, setStepUpsTo } = useStepUp();

    return (
        <StepUpContext.Provider value={{ stepUps, increaseStepUps, decreaseStepUps, setStepUpsTo }}>
            {children}
        </StepUpContext.Provider>
    );
};