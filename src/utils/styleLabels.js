const styledLabels = (arr) => {
    let data;
    arr.forEach(element => {
        if (data) {
            data = data + '#' + element + ' ';
        }
        else {
            data = '#' + element + ' ';
        }
    });
    return data;
};

export default styledLabels