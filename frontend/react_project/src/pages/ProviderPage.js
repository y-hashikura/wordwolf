

import React from 'react';
import { providers } from '../contexts';

export const ProviderPage = ({ children }) => {
    // 全体で状態を共有するContext APIを用いて管理するため、
    // メインコンポーネントを各種カスタムプロバイダで囲う
    return providers.reduce((acc, Provider) => {
        return <Provider>{acc}</Provider>;
    }, children);
};