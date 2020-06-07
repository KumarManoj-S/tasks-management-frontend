import Dialog from "@material-ui/core/Dialog";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React from "react";
import TaskInput from "../task_input/TaskInput";

export default function EditTaskDialog(props) {
  const task = props.task;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose = () => {
    props.closeDialogHandler();
  };

  const updateHandler = (data) => {
    props.updateHandler(props.taskIndex, data);
    handleClose();
  };
  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={props.open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <TaskInput
          isUpdate={true}
          task={task}
          cancelHandler={handleClose}
          updateHandler={updateHandler}
          expanded={true}
          taskName={task.taskName}
          description={task.description}
          dueDate={task.dueDate}
          labels={task.labels}
        />
      </Dialog>
    </div>
  );
}
