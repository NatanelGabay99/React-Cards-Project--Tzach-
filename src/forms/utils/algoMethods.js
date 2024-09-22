export const makeFirstLetterCapital = (text) => {
  return text
    .toLowerCase()
    .trim()
    .split(' ')
    .map(text => text.charAt(0).toUpperCase() + text.slice(1))
    .join(' ');
};


