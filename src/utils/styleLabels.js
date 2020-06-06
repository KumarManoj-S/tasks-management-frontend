const styledLabels = (arr) => {
    const prefixedLabels = arr.map(x => '#' + x);
    return prefixedLabels.reduce((a, b) => a + ' ' + b, '');
};

export default styledLabels