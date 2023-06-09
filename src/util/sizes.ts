export const BASE_SCALE = '0.25rem';

export type SupportedSize = 'sm' | 'md' | 'lg' | 'xl';

/** Shorthand to get scaled sized based on a predefined base scale; Use with css only */
export const size = (multiplier: number, scale?: string) => `calc(${scale || BASE_SCALE} * ${multiplier})`;

export const SIZES: Record<SupportedSize, string> = {
  'sm': size(40),
  'md': size(60),
  'lg': size(80),
  'xl': size(100)
};

export function mediaQueryBuilder(on: 'min' | 'max', size: SupportedSize, rules: string) {
  return `
    @media only screen (${on}-width: ${SIZES[size]}) {
      ${rules}
    }
  `;
}
