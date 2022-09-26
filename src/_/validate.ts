import { trimRegExpFactory } from './utils';

export const validModes = [`contain`, `cover`];
export const rValidMode = trimRegExpFactory(validModes);
export const rValidRatio = trimRegExpFactory(
    `(\\d+(?:\\.\\d+)?)(?:\\s*[\\/:]\\s*(\\d+(?:\\.\\d+)?))?|(none)`
);
