
import React from 'react';
import { providers } from '../contexts';

export const PageProvider = ({ children }) => {
    return providers.reduce((acc, Provider) => {
        return <Provider>{acc}</Provider>;
    }, children);
};