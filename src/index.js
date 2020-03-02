exports.min = arr => isValid(arr) ? Math.min(...arr) : 0;

exports.max = arr => isValid(arr) ? Math.max(...arr) : 0;

exports.avg = arr => isValid(arr) ? arr.reduce((acc, el) => acc + el, 0) / arr.length : 0;

const isValid = arr => arr && arr.length;