import { mqBreakpoints } from './variables';

export const mq = {
    mobileOnly: `@media (max-width: ${mqBreakpoints.preTablet})`,
    mobile: `@media (min-width: ${mqBreakpoints.mobile})`,
    mobileM: `@media (min-width: ${mqBreakpoints.mobileM})`,
    mobileL: `@media (min-width: ${mqBreakpoints.mobileL})`,
    tabletOnly: `@media (min-width: ${mqBreakpoints.tablet}) and (max-width: ${mqBreakpoints.preDesktop})`,
    tablet: `@media (min-width: ${mqBreakpoints.tablet})`,
    notTablet: `@media (max-width: ${mqBreakpoints.preTablet}), (min-width: ${mqBreakpoints.desktop})`,
    desktop: `@media (min-width: ${mqBreakpoints.desktop})`,
    notDesktop: `@media (max-width: ${mqBreakpoints.preDesktop})`,
    retinax2: `@media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx)`,
};
