const styleLabels = (arr) => {
    const val = arr.map(o => o.value);
    let data;
    val.forEach(element => {
        if (data) {
            data = data + '#' + element + ' ';
        }
        else {
            data = '#' + element + ' ';
        }
    });
    return data;
};

export default styleLabels