//const tailwindColorToRgb = require('tailwind-color-to-rgb');
import tailwindColorToRgb from 'tailwind-color-to-rgb';

export const useTranslateColor = (tailwindPrimaryColor, tailwindSecondaryColor) => {
    const colorFix = tailwindPrimaryColor.split('bg-');
    const colorFix2 = tailwindSecondaryColor.split('bg-');

    const fixedPrimaryColor = colorFix[1];
    const fixedSecondaryColor = colorFix2[1];

    const spaceSeparatedColor = tailwindColorToRgb(fixedPrimaryColor);
    const spaceSeparatedColor2 = tailwindColorToRgb(fixedSecondaryColor);

    const rgb = spaceSeparatedColor.split(' ');
    const rgb2 = spaceSeparatedColor2.split(' ');

    const rgbPrimaryColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
    const rgbSecondaryColor = `rgb(${rgb2[0]},${rgb2[1]},${rgb2[2]})`;

    return {rgbPrimaryColor, rgbSecondaryColor, fixedPrimaryColor, fixedSecondaryColor}
}