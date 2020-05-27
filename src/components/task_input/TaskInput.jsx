import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '../ui/ExpansionPanel'
import TaskNameInput from './TaskNameInput'
import AdditionalTaskDetailsInput from './AdditionalTaskDetailsInput'


class TaskInput extends Component {
    state = { expanded: false, autoFocus: false, data: {} }
    componentDidMount() {
        document.addEventListener("keydown", this.escFunction, false);
        document.addEventListener('mousedown', this.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.escFunction, false);
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    openTaskInput = () => {
        const { expanded } = this.state;
        if (!expanded) {
            this.setState({ expanded: true, autoFocus: true });
        }
    }
    closeTaskInput = () => {
        this.setState({ expanded: false, autoFocus: false });
    }
    escFunction = (event) => {
        if (event.keyCode === 27) {
            this.closeTaskInput();
        }
    }
    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.closeTaskInput();
        }
    }
    setWrapperRef = (node) => {
        this.wrapperRef = node;
    }
    handleTaskNameInputChange = (taskName) => {
        this.setState((prevState) => ({
            data: {
                ...prevState.data,
                taskName
            }
        }));
    }
    handleDueDateInputChange = (dueDate) => {
        this.setState((prevState) => ({
            data: {
                ...prevState.data,
                dueDate
            }
        }));
    }
    handleLabelsInputChange = (labels) => {
        this.setState((prevState) => ({
            data: {
                ...prevState.data,
                labels
            }
        }));
    }
    render() {
        const { expanded, autoFocus } = this.state;
        return (
            <div ref={this.setWrapperRef}>
                <ExpansionPanel
                    ExpansionPanelSummaryComponent_props={{
                        onClick: this.openTaskInput,
                        autoFocus: autoFocus,
                        onChangeHandler: this.handleTaskNameInputChange
                    }}
                    ExpansionPanelSummaryComponent={TaskNameInput}
                    ExpansionPanelDetailsComponent_props={{
                        onDuedateChange: this.handleDueDateInputChange,
                        onLabelsChange: this.handleLabelsInputChange
                    }}
                    ExpansionPanelDetailsComponent={AdditionalTaskDetailsInput}
                    ExpansionPanelActionsComponent={
                        (props) => (
                            <div>
                                <Button onClick={this.closeTaskInput} size="small">Cancel</Button>
                                <Button onClick={this.closeTaskInput} size="small" color="primary">Add</Button>
                            </div>
                        )
                    }
                    expanded={expanded}
                />
            </div>
        );
    }
}

export default TaskInput;
