import { Component } from "react";
type Mode = `contain` | `cover`;
interface Attributes {
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
interface Options {
    debug: boolean;
    domain: string | undefined;
    path: string;
    output: string | undefined;
    step: number;
}
interface WrapperState {
    width: number;
    height: number;
}
export const installTwicPics: (options: Options) => void;
export class TwicImg extends Component<Attributes, WrapperState> {
    constructor(props: Attributes);
    render(): JSX.Element;
}

//# sourceMappingURL=types.d.ts.map
