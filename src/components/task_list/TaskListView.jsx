import React from "react";
import TaskView from "./TaskView";
import Masonry from "react-masonry-css";
import "../../css/TaskListView.css";
import TaskFilter from "../task_filter/TaskFilter";
import moment from "moment";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import {
  getTasks,
  updateTasks,
  deleteTasks,
  updateStatus,
} from "../../api/tasks";
import PacmanLoader from "react-spinners/PacmanLoader";
import { TASK_WITHOUT_DATE_FILTER_LABEL } from "../../constants";

export class TaskListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      loading: false,
    };
  }

  componentDidUpdate(prevProps) {
    const { category, lastCreatedTask } = this.props;
    if (
      prevProps.category !== category ||
      prevProps.lastCreatedTask !== lastCreatedTask
    ) {
      this.loadTasks(category);
    }
  }

  taskAttributeModifier = (task) => {
    const dueDate = moment(task.dueDate).format("YYYY-MM-DDThh:mm");
    const labels = task.labels.map((label) => {
      return { label: label, value: label };
    });
    return { ...task, dueDate, labels };
  };

  loadTasks = (category) => {
    this.setState({ loading: true });
    getTasks(category)
      .then((tasks) => {
        let tasksWithInValidDates = tasks.filter((t) => !t.dueDate);
        let tasksWithValidDates = tasks.filter((t) => t.dueDate);
        tasksWithValidDates = (tasksWithValidDates || []).sort(function (a, b) {
          var keyA = new Date(a.dueDate),
            keyB = new Date(b.dueDate);
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        });
        return [...tasksWithValidDates, ...tasksWithInValidDates];
      })
      .then((tasks) => {
        console.log(tasks);
        const modifiedDueDatesAndLabels = tasks.map(this.taskAttributeModifier);
        this.setState({ tasks: modifiedDueDatesAndLabels, loading: false });
      })
      .catch((e) =>
        alert("Error fetching the tasks! Please try again!" + String(e))
      );
  };

  componentDidMount() {
    const { category } = this.props;
    this.loadTasks(category);
  }

  updateHandler = (taskIndex, taskToUpdate) => {
    let tasks = this.state.tasks;
    updateTasks(tasks[taskIndex]._id, taskToUpdate).then((updatedTask) => {
      tasks[taskIndex] = this.taskAttributeModifier(updatedTask);
      this.setState({ tasks: tasks });
    });
  };

  deleteHandler = (taskId) => {
    deleteTasks(taskId).then((response) => {
      if (response === 200) {
        const tasks = this.state.tasks.filter((task) => task._id !== taskId);
        this.setState({ tasks: tasks });
      }
    });
  };

  updateStatusHandler = (taskIndex, status) => {
    let tasks = this.state.tasks;
    updateStatus(tasks[taskIndex]._id, status).then((updatedTask) => {
      tasks[taskIndex].status = updatedTask.status;
      this.setState({ tasks: tasks });
    });
  };

  render() {
    const { category } = this.props;
    const { loading } = this.state;
    const breakpointColumnsObj = {
      default: 3,
      1100: 2,
      700: 1,
      500: 1,
    };
    const tasks = this.isFilterApplied()
      ? this.getFilteredTasks()
      : this.state.tasks;
    const items = tasks.map((task, index) => (
      <TaskView
        taskIndex={index}
        id={task._id}
        taskName={task.name || task.taskName}
        description={task.description}
        category={task.category}
        labels={task.labels}
        dueDate={task.dueDate}
        status={task.status || false}
        deleteHandler={this.deleteHandler}
        updateHandler={this.updateHandler}
        updateStatusHandler={this.updateStatusHandler}
      />
    ));
    if (loading) {
      return (
        <div>
          <PacmanLoader
            css={{ marginTop: 300, marginLeft: "38%" }}
            size={30}
            color={"#1568ac"}
            loading={true}
          />
        </div>
      );
    }
    if (items.length === 0) {
      return (
        <div>
          <TaskFilter
            applicableFilters={this.getFiltersApplicable()}
            onFiltersChange={this.onFiltersChange}
          />
          <Grid container justify="center">
            <Box mt={10}>
              <Typography color="textSecondary">
                {this.isFilterApplied()
                  ? "No matching tasks"
                  : `You haven't created any task in the ${category} category!`}
              </Typography>
            </Box>
          </Grid>
        </div>
      );
    }
    return (
      <div className="task-list-view">
        <TaskFilter
          applicableFilters={this.getFiltersApplicable()}
          onFiltersChange={this.onFiltersChange}
        />
        <br />
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {items}
        </Masonry>
      </div>
    );
  }

  isFilterApplied = () => {
    for (let filter in this.state.selectedFilters) {
      if (
        this.state.selectedFilters[filter] &&
        this.state.selectedFilters[filter].length
      ) {
        return true;
      }
    }
    return false;
  };
  onFiltersChange = (selectedFilters) => {
    this.setState({ selectedFilters });
  };
  getFilteredTasks = () => {
    const transformedTasksForFiltering = this.state.tasks.map((task) => ({
      ...task,
      labels: task.labels.map((l) => l.value),
      dueDate:
        task.dueDate !== "Invalid date"
          ? moment(task.dueDate).from()
          : TASK_WITHOUT_DATE_FILTER_LABEL,
    }));
    const filteredTasks = transformedTasksForFiltering.filter((task) => {
      return this.validateFilterForTask(task);
    });
    const filterdTaskIds = filteredTasks.map((task) => task._id);
    const result = this.state.tasks.filter((task) =>
      filterdTaskIds.includes(task._id)
    );
    return result;
  };
  validateFilterForTask = (task) => {
    let isValid = false;
    for (let filterKey in this.state.selectedFilters) {
      let valuesToSatisfy = this.state.selectedFilters[filterKey];
      for (let value of valuesToSatisfy) {
        isValid = Array.isArray(task[filterKey])
          ? task[filterKey].some((val) => val === value)
          : task[filterKey] === value;
        if (isValid) {
          break;
        }
      }
      if (!isValid && valuesToSatisfy.length > 0) {
        return false;
      }
    }
    return isValid;
  };
  getFiltersApplicable = () => {
    const labelsSetList = this.state.tasks.reduce((labelsSet, task) => {
      task.labels.forEach((label) => {
        if (!labelsSet.has(task.label)) {
          labelsSet.add(label.value);
        }
      });
      return labelsSet;
    }, new Set());
    const dateAsDueIn = (task) => {
      if (task.dueDate === "Invalid date")
        return TASK_WITHOUT_DATE_FILTER_LABEL;
      return moment(task.dueDate).from();
    };
    const dueDatesSet = this.state.tasks.reduce((duesSet, task) => {
      if (!duesSet.has(dateAsDueIn(task))) {
        duesSet.add(dateAsDueIn(task));
      }
      return duesSet;
    }, new Set());
    return [
      {
        filterKey: "labels",
        filterName: "Labels",
        values: Array.from(labelsSetList),
      },
      {
        filterKey: "dueDate",
        filterName: "Due In",
        values: Array.from(dueDatesSet),
      },
    ];
  };
}
