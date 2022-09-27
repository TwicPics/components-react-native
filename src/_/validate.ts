import { Placeholder } from './types';
import { trimRegExpFactory } from './utils';

export const validModes = [`contain`, `cover`];
export const rValidMode = trimRegExpFactory(validModes);
export const validPlaceholders: Array<Placeholder> = [`none`, `preview`];
export const rValidPlaceholder = trimRegExpFactory(validPlaceholders);
export const rValidRatio = trimRegExpFactory(
    `(\\d+(?:\\.\\d+)?)(?:\\s*[\\/:]\\s*(\\d+(?:\\.\\d+)?))?|(none)`
);
