import React, { createContext } from 'react';
import { useStepUp } from '../hooks';

export const StepUpContext = createContext();

export const StepUpProvider = ({ children }) => {
    const { stepUps, increaseStepUps, decreaseStepUps } = useStepUp();

    return (
        <StepUpContext.Provider value={{ stepUps, increaseStepUps, decreaseStepUps }}>
        {children}
        </StepUpContext.Provider>
    );
};