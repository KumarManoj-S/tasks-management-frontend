import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '../ui/ExpansionPanel'
import TaskNameInput from './TaskNameInput'
import AdditionalTaskDetailsInput from './AdditionalTaskDetailsInput'


class TaskInput extends Component {
    state = { expanded: true }
    render() {
        const { expanded } = this.state;
        return (
            <div>
                <ExpansionPanel
                    ExpansionPanelSummaryComponent={TaskNameInput}
                    ExpansionPanelDetailsComponent={AdditionalTaskDetailsInput}
                    ExpansionPanelActionsComponent={
                        (props) => (
                            <div>
                                <Button size="small">Cancel</Button>
                                <Button onClick={() => { this.setState({ expanded: "false" }) }} size="small" color="primary">Add</Button>
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
