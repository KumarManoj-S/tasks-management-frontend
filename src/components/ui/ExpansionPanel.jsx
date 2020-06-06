import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        zIndex: 10
    },
    details: {
        alignItems: 'center'
    },
    expansionPanelSummary: {
        backgroundColor: 'white !important'
    }
}));

const DetailedExpansionPanel = (props) => {
    const classes = useStyles();
    const { ExpansionPanelSummaryComponent_props, ExpansionPanelSummaryComponent, ExpansionPanelDetailsComponent_props, ExpansionPanelDetailsComponent, ExpansionPanelActionsComponent, expanded } = props;

    return (
        <div className={classes.root}>
            <ExpansionPanel classes={{ root: classes.root }} expanded={expanded} >
                <ExpansionPanelSummary
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                    className={classes.expansionPanelSummary}
                >
                    <ExpansionPanelSummaryComponent {...ExpansionPanelSummaryComponent_props} />
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                    <ExpansionPanelDetailsComponent {...ExpansionPanelDetailsComponent_props} />
                </ExpansionPanelDetails>
                <ExpansionPanelActions>
                    <ExpansionPanelActionsComponent />
                </ExpansionPanelActions>
            </ExpansionPanel>
        </div>
    );
}

export default DetailedExpansionPanel;