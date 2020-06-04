import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React from "react";
import AdditionalTaskDetailsInput from '../task_input/AdditionalTaskDetailsInput';
import TaskNameInput from '../task_input/TaskNameInput'
import { DialogContent } from "@material-ui/core";
import TaskInput from "../task_input/TaskInput";


export default function EditTaskDialog(props) {
  const task = props.task;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose = () => {
    props.closeDialogHandler();
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={props.open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
          <TaskInput isUpdate={true} cancelHandler={handleClose} updateHandler={handleClose} expanded={true} name={task.name} description={task.description} dueDate={task.dueDate} labels={task.labels}/>
      </Dialog>
    </div>
  );
}
