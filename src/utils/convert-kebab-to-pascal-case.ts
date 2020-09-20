const convertKebabToPascalCase = (text: string): string => {
    return text
        .split('-')
        .map(w => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
        .join('');
}

export default convertKebabToPascalCase;