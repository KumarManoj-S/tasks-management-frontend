import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '../ui/ExpansionPanel'
import TaskNameInput from './TaskNameInput'
import AdditionalTaskDetailsInput from './AdditionalTaskDetailsInput'
import Alert from '../ui/Alert';
import { createTasks } from '../../api/tasks'


class TaskInput extends Component {
    state = { expanded: this.props.expanded || false, autoFocus: false, open: false, data: this.props.task || {} }
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
    handleTaskDescriptionInputChange = (description) => {
        this.setState((prevState) => ({
            data: {
                ...prevState.data,
                description
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
    showAlert = () => {
        this.setState({ open: true });
    }
    hideAlert = () => {
        this.setState({ open: false });
    }
    addTask = async () => {
        const { data } = this.state;
        const { category, handleCreateTask } = this.props;
        try {
            await createTasks({ category, ...data })
                .then(data => {
                    this.showAlert();
                    this.closeTaskInput();
                    handleCreateTask(data._id);
                })
                .catch(() => alert("Error! Please try again!"));

        }
        catch (e) {
            console.log("error", e)
        }
    }

    updateHandler = () => {
        this.props.updateHandler(this.state.data);
    }

    getAction = () => {
        const { data: { taskName } } = this.state;
        if (this.props.isUpdate) {
            return <div>
                <Button onClick={this.props.cancelHandler} size="small">Cancel</Button>
                <Button onClick={this.updateHandler} size="small" color="primary">Update</Button>
            </div>
        } else {
            return <div>
                <Button onClick={this.closeTaskInput} size="small">Cancel</Button>
                <Button onClick={this.addTask} disabled={(taskName || '').length === 0} size="small" color="primary">Add</Button>
            </div>
        }
    }
    render() {
        const action = this.getAction();
        const { expanded, autoFocus, open } = this.state;
        return (
            <div ref={this.setWrapperRef}>
                <Alert open={open} handleClose={this.hideAlert} message="The task has been created successfully!" />
                <ExpansionPanel
                    ExpansionPanelSummaryComponent_props={{
                        onClick: this.openTaskInput,
                        autoFocus: autoFocus,
                        onChangeHandler: this.handleTaskNameInputChange,
                        name: this.props.taskName
                    }}
                    ExpansionPanelSummaryComponent={TaskNameInput}
                    ExpansionPanelDetailsComponent_props={{
                        onDuedateChange: this.handleDueDateInputChange,
                        onLabelsChange: this.handleLabelsInputChange,
                        onDescriptionChange: this.handleTaskDescriptionInputChange,
                        description: this.props.description,
                        dueDate: this.props.dueDate,
                        labels: this.props.labels
                    }}
                    ExpansionPanelDetailsComponent={AdditionalTaskDetailsInput}
                    ExpansionPanelActionsComponent={
                        (props) => (
                            action
                        )
                    }
                    expanded={expanded}
                />
            </div>
        );
    }
}

export default TaskInput;
