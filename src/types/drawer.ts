/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IDrawerSlice {
    active: string;
    setActive: (value: string) => void;
}

export interface IDrawerScreen {
    id: number;
    name: string;
    component: any;
}
