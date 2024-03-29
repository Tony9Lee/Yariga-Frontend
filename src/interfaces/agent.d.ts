import { BaseKey } from '@pankod/refine-core';
import { ReactNode } from 'react';

export interface AgentCardProp {
    id?: BaseKey | undefined,
    name: string,
    email: string,
    avatar: string,
    noOfProperties: number
}

export interface InfoBarProps {
    icon: ReactNode,
    name: string
}
