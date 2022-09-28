import { PixelRatio, Platform, StyleSheet } from 'react-native';
import { config } from './install';
import { AnchorObject, Mode, Placeholder, SizeObject } from './types';
const VERSION = `v1`;
const PLACEHOLDER_DIM = 1000;

const actualWidth = (w: number, _step: number): number => {
    const step = _step || config.step;
    return Math.max(step, step * Math.floor(w / step));
};

const actualSize = (size: SizeObject, step: number): SizeObject => {
    const pixelRatio = Math.min(Math.max(1, PixelRatio.get()), config.maxDPR ? config.maxDPR : 2);
    const _actualWidth = actualWidth(size.width * pixelRatio, step);
    let _actualHeight = size.ratio ? _actualWidth * size.ratio : size.height * pixelRatio;
    if (config.debug) {
        console.debug('size and pixelRatio', size, pixelRatio, { _actualWidth, _actualHeight });
    }
    return {
        width: Math.round(_actualWidth),
        height: Math.round(_actualHeight),
        ratio: size.ratio
    };
};

const rAlt = /\/?([^/?#.]+)(?:\.[^/?#]*)?(?:[?#].*)?$/;
export const computeAlt = (alt: string | undefined, src: string): string => {
    if (!alt) {
        const tmp = rAlt.exec(src);
        alt = (tmp && tmp[1]) || `image`;
    }
    return alt;
};

const computePreTransform = (
    { x, y }: AnchorObject,
    focus: string | undefined,
    mode: Mode,
    preTransform = ``
) => {
    const actualFocus = mode !== `contain` && (focus || (y ? (x ? `${y}-${x}` : y) : x));
    return `${preTransform || ``}${actualFocus ? `focus=${actualFocus}/` : ``}`;
};

export const computeSize = (
    width: number,
    height: number,
    ratio: number | undefined
): SizeObject => {
    return {
        height: ratio ? width * ratio : height,
        ratio,
        width
    };
};

const rNoCatchAll = /^v[0-9]+(?:\/|$)|^(rel:)/;
const rPath = /^(?:image:)?(\/*)(.*)$/;
const rQuery = /\?/;
export const computeSrc = (
    anchor: AnchorObject,
    focus: string | undefined,
    mode: Mode = `cover`,
    placeholder: Placeholder | undefined,
    preTransform = ``,
    size: SizeObject,
    src: string,
    step: number
) => {
    const [, , path] = rPath.exec(src) || [];
    const noCatchAll = rNoCatchAll.exec(path);
    const noQuery = !rQuery.test(path);
    const { debug, domain } = config;
    let output;
    let { width, height } = actualSize(size, step);
    if (placeholder === `preview`) {
        if (width > 0 && height > 0) {
            const actualRatio = width / height;
            if (Platform.OS === `web`) {
                output = `preview`;
                width = height = PLACEHOLDER_DIM;
                if (actualRatio > 1) {
                    height /= actualRatio;
                } else {
                    width *= actualRatio;
                }
            } else {
                const downgradeRate = 900 / (width * height);
                width = Math.max(1, Math.floor(width * Math.sqrt(downgradeRate)));
                height = Math.max(1, Math.floor(width / actualRatio));
            }
        } else {
            return undefined;
        }
    }

    const transform = `${computePreTransform(
        anchor,
        focus,
        mode,
        preTransform
    )}${mode}=${width}x${height}`;
    const actualOutput = output ? `/output=${output}` : ``;
    const actualDebug = debug && Platform.OS === 'web' ? `/debug` : ``;

    return noCatchAll
        ? `${domain}/${VERSION}${actualDebug}/${transform}${actualOutput}/${noCatchAll[1] ? `` : `image:`
        }${path}`
        : `${domain}/${path}${noQuery ? `?` : `&`
        }twic=${VERSION}${actualDebug}/${transform}${actualOutput}`;
};

export const computeStyle = (value: any, ratio: number | undefined) => {
    if (ratio) {
        let tmp = value || {};
        if (Array.isArray(value)) {
            tmp = value.reduce((p, c) => {
                return { ...p, ...c };
            }, {});
        }
        tmp = JSON.parse(JSON.stringify(tmp));
        tmp.height = undefined;
        tmp.aspectRatio = 1 / ratio;
        return tmp;
    }
    return value;
};
