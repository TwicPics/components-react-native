import { config } from './install';
import { AnchorObject, Mode, Placeholder } from './types';
import { regExpFinderFactory, trimRegExpFactory } from './utils';
import { rValidMode, rValidPlaceholder, rValidRatio } from './validate';

const isPositiveNumber = (value: number) => !isNaN(value) && value > 0;
const trimOrUndefined = regExpFinderFactory<string | undefined>(trimRegExpFactory(`.+?`));
const trimTransformOrUndefined = trimRegExpFactory(`.+?`, `[\\s\\/]`);

export const parseAlt = trimOrUndefined;

const rAnchor = /\b(?:(left|right)|(bottom|top))\b/g;
export const parseAnchor = (anchor: string | undefined): AnchorObject => {
    const trimmed = anchor ? trimOrUndefined(anchor) : undefined;
    let x;
    let y;
    if (trimmed) {
        let tmp;
        while ((tmp = rAnchor.exec(trimmed))) {
            if (tmp[1]) {
                x = tmp[1];
            } else {
                y = tmp[2];
            }
        }
    }
    return {
        x,
        y
    };
};
export const parseFocus = trimOrUndefined;
export const parseMode = regExpFinderFactory<Mode | undefined>(rValidMode);
export const parsePlaceholder = (placeholder: Placeholder | undefined): Placeholder | undefined => {
    if (placeholder === `none`) {
        return undefined;
    }
    return placeholder
        ? rValidPlaceholder.test(placeholder)
            ? placeholder
            : `preview`
        : `preview`;
};
export const parsePreTransform = regExpFinderFactory<string | undefined>(
    trimTransformOrUndefined,
    (p) => p && `${p}/`
);
export const parseRatio = (value: number | string = 1): number | undefined => {
    if (value === `none`) {
        return undefined;
    }
    let number: number | undefined;
    if (typeof value === `number`) {
        number = value;
    } else if (value) {
        const parsed = rValidRatio.exec(value);
        if (parsed) {
            const [, , width, height] = parsed;
            number = (height ? Number(height) : 1) / Number(width);
        } else {
            number = 1;
        }
    }
    return number ? (isPositiveNumber(number) ? number : undefined) : undefined;
};

const rImage = /^(image:)?\/*/;
export const parseSrc = (value: string): string => {
    const tmp = trimOrUndefined(value);
    return tmp ? tmp.replace(rImage, `image:${config.path}`) : `placeholder:red`;
};

export const parseStep = (value: number | string | undefined): number => {
    let tmp: any;
    if (typeof value !== `number`) {
        const trimmed = trimOrUndefined(value);
        // eslint-disable-next-line no-param-reassign
        tmp = trimmed && Number(trimmed);
    } else {
        tmp = value;
    }
    return isPositiveNumber(tmp) ? tmp : undefined;
};
