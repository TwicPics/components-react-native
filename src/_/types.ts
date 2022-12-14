export type Mode = `center` | `contain` | `cover` | `repeat` | `stretch`;
export type Placeholder = `none` | `preview`;

export interface AnchorObject {
    x: string | undefined;
    y: string | undefined;
}

export interface Attributes {
    alt?: string;
    anchor?: string;
    focus?: string;
    mode?: Mode;
    placeholder?: Placeholder;
    preTransform?: string;
    ratio?: number | string;
    step?: number | string;
    style?: any;
    src: string;
}

export interface Options {
    debug: boolean;
    domain: string | undefined;
    maxDPR?: number;
    path?: string;
    output?: string;
    step?: number;
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
