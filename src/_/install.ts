import { Options } from './types';
import { throwError } from './utils';

export const config: {
    debug: boolean;
    domain: string | undefined;
    maxDPR?: number;
    path?: string;
    output?: string;
    step: number;
} = {
    debug: false,
    domain: undefined,
    maxDPR: 2,
    path: '',
    output: undefined,
    step: 10
};

const rInvalidPath = /\?/;
const rValidDomain = /(^https?:\/\/[^/]+)\/?$/;
const rValidStep = /^[1-9][0-9]*/;

export default (options: Options): void => {
    if (!options) {
        throwError(`install options not provided`);
    }
    const { domain, debug, maxDPR, path, step } = options;

    if (!domain || !rValidDomain.test(domain)) {
        throwError(`install domain "${domain}" is invalid`);
    }

    if (path) {
        if (rInvalidPath.test(path)) {
            throwError(`install path "${path}" is invalid`);
        }
        config.path = path.replace(/^\/?(.+?)\/?$/, `$1/`);
    }

    if (step) {
        if (!rValidStep.test(step.toString())) {
            throwError(`install step "${step}" is invalid`);
        }
        config.step = step;
    }

    if (maxDPR) {
        config.maxDPR = maxDPR;
    }

    config.debug = debug;
    if (domain) {
        config.domain = domain.replace(rValidDomain, `$1`);
    }
};
