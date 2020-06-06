import React, { Component } from 'react';
import AsyncMutliSelect from '../ui/AsyncMutliSelect';
import { getLabels } from '../../api/labels';

class LabelSelect extends Component {
    state = { values: this.props.labels || [], options: [] };

    async componentDidMount() {
        await getLabels()
            .then(data => data.map(value => ({ label: value, value })))
            .then((options) => {
                this.setState({ options: options })
            })
            .catch(() => {
                this.setState({ options: [] })
            })

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
