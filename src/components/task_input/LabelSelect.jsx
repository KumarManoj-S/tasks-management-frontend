import React, { Component } from 'react';
import AsyncMutliSelect from '../ui/AsyncMutliSelect';

class LabelSelect extends Component {
    state = { values: [], options: [] };

    componentDidMount() {
        const options = [
            { label: 'gym', value: 'gym' },
            { label: 'sport', value: 'sport' },
            { label: 'health', value: 'health' }
        ]
        this.setState({ options: options })
    }

    handleInputChange = (newValue) => {
        const { onChangeHandler } = this.props;

        this.setState({ values: newValue });
        onChangeHandler(newValue);
    };

    filterLabels = (inputValue) => {
        const { options } = this.state;
        return options.filter(option =>
            option.label.toLowerCase().includes(inputValue.toLowerCase())
        );
    };

    getLabels = inputValue =>
        new Promise(resolve => {
            setTimeout(() => {
                resolve(this.filterLabels(inputValue));
            }, 100);
        });

    render() {
        const { values } = this.state;

        return (
            <AsyncMutliSelect
                loadOptions={this.getLabels}
                handleInputChange={this.handleInputChange}
                values={values}
                placeholder="Select Labels"
            />
        );
    }
}

export default LabelSelect;
