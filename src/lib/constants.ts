export const NAME = 'Ricardo Soares';
export const AVAILABLE = false;

export const LOCALES = ['en', 'pt'] as const;
export type Locales = (typeof LOCALES)[number];
