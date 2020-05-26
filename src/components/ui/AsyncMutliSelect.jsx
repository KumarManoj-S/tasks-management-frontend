import React, { Component } from 'react';
import AsyncCreatableSelect from 'react-select/async-creatable';
import makeAnimated from 'react-select/animated';
import InputLabel from '@material-ui/core/InputLabel';

const animatedComponents = makeAnimated();

export default class AsyncMutliSelect extends Component {
    render() {
        const { loadOptions, handleInputChange, values, placeholder } = this.props;
        return (
            <div>
                <InputLabel htmlFor="async-multi-select">
                    vkndfkv
                </InputLabel>
                <div id="async-multi-select">
                    <AsyncCreatableSelect
                        isMulti
                        cacheOptions
                        components={animatedComponents}
                        value={values}
                        defaultOptions
                        loadOptions={loadOptions}
                        onChange={handleInputChange}
                        placeholder={placeholder}
                    />
                </div>
            </div>
        );
    }
}