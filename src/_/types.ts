export type Mode = `contain` | `cover`;

export interface AnchorObject {
    x: string | undefined;
    y: string | undefined;
}

export interface Attributes {
    alt?: string;
    anchor?: string;
    focus?: string;
    mode?: Mode;
    preTransform?: string;
    ratio?: number | string;
    step?: number | string;
    style?: any;
    src: string;
}

export interface Options {
    debug: boolean;
    domain: string | undefined;
    path: string;
    output: string | undefined;
    step: number;
}

export interface SizeObject {
    width: number;
    height: number;
    ratio: number | undefined;
}

export interface WrapperState {
    width: number;
    height: number;
}
