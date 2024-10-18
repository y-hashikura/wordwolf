
import React from 'react';
import { providers } from '../contexts';

export const PageProvider = ({ children }) => {
    // カスタムプロバイダの分処理を繰り返す
    return providers.reduce((acc, Provider) => {
        return <Provider>{acc}</Provider>;
    }, children);
};