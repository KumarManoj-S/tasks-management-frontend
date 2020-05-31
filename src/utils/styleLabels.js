const styledLabels = (arr) => {
    const prefixedLabels = arr.map(x => '#' + x.value);
    return prefixedLabels.reduce((a, b) => a + ' ' + b, '');
};

export default styledLabels