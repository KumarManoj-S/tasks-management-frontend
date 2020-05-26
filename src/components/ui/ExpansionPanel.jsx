import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    details: {
        alignItems: 'center',
    },
    expansionPanelSummary: {
        backgroundColor: 'white !important'
    }
}));

const DetailedExpansionPanel = (props) => {
    const classes = useStyles();
    const { ExpansionPanelSummaryComponent, ExpansionPanelDetailsComponent, ExpansionPanelActionsComponent, expanded } = props;

    return (
        <div className={classes.root}>
            <ExpansionPanel >
                <ExpansionPanelSummary
                    expanded={expanded}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                    className={classes.expansionPanelSummary}
                >
                    <ExpansionPanelSummaryComponent />
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                    <ExpansionPanelDetailsComponent />
                </ExpansionPanelDetails>
                <ExpansionPanelActions>
                    <ExpansionPanelActionsComponent />
                </ExpansionPanelActions>
            </ExpansionPanel>
        </div>
    );
}

export default DetailedExpansionPanel;