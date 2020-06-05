import React from "react";
import TaskView from "./TaskView";
import Masonry from "react-masonry-css";
import "../../css/TaskListView.css";
import TaskFilter from "../task_filter/TaskFilter";
import moment from "moment";

export class TaskListView extends React.Component {
  state = {
    tasks: [
      {
        id: "123",
        name: "Kesavan is crying123",
        description: "Cypress fucked me.",
        category: "Danger",
        labels: [
          { value: "Personal" },
          { value: "Waste" },
          { value: "Waste" },
          { value: "Waste" },
          { value: "Waste" },
        ],
        dueDate: "2020-06-13T06:43:00Z",
      },
      {
        id: "124",
        name: "Need to send email",
        description: "Email content : Yesterday night, there was a security attack in one of our internal deployments, darwin (data pipeline framework), on which some of us are working. One of the machines was compromised to carry out a DDOS attack against remote hosts",
        category: "Danger",
        labels: [{ value: "Personal" }, { value: "Waste" }],
        dueDate: "12-04-2020",
      },
      {
        id: "125",
        name: "Kesavan is crying125",
        description: "Cypress fucked me.",
        category: "Danger",
        labels: [{ value: "Personal" }, { value: "Waste" }],
        dueDate: "12-04-2020",
      },
      {
        id: "126",
        name: "Kesavan is crying126",
        description: "Cypress fucked me.",
        category: "Danger",
        labels: [{ value: "Personal" }, { value: "Waste" }],
        dueDate: "12-04-2020",
      },
      {
        id: "127",
        name: "Kesavan is crying",
        description: "Cypress fucked me.",
        category: "Danger",
        labels: [{ value: "Personal" }, { value: "Waste" }],
        dueDate: "12-04-2020",
      },
      {
        id: "128",
        name: "Kesavan is crying",
        description: "Cypress fucked me.",
        category: "Danger",
        labels: [{ value: "Personal" }, { value: "Waste" }],
        dueDate: "12-04-2020",
      },
      {
        id: "129",
        name: "Kesavan is crying",
        description: "Cypress fucked me.",
        category: "Danger",
        labels: [{ value: "Personal" }, { value: "Waste" }],
        dueDate: "12-04-2020",
      },
      {
        id: "130",
        name: "Kesavan is crying",
        description: "Cypress fucked me.",
        category: "Danger",
        labels: [{ value: "Personal" }, { value: "Waste" }],
        dueDate: "12-04-2020",
      },
      {
        id: "131",
        name: "Kesavan is crying",
        description: "Cypress fucked me.",
        category: "Danger",
        labels: [{ value: "Personal" }, { value: "Waste" }],
        dueDate: "12-04-2020",
      },
      {
        id: "132",
        name: "Kesavan is crying",
        description: "Cypress fucked me.",
        category: "Danger",
        labels: [{ value: "Personal" }, { value: "Waste" }],
        dueDate: "12-04-2020",
      },
      {
        id: "133",
        name: "Kesavan is crying",
        description: "Cypress fucked me.",
        category: "Danger",
        labels: [{ value: "Personal" }, { value: "Waste" }],
        dueDate: "12-04-2020",
      },
      {
        id: "134",
        name: "Kesavan is crying",
        description: "Cypress fucked me.",
        category: "Danger",
        labels: [{ value: "Personal" }, { value: "Waste" }],
        dueDate: "12-04-2020",
      },
      {
        id: "135",
        name: "Kesavan is crying",
        description: "Cypress fucked me.",
        category: "Danger",
        labels: [{ value: "Personal" }, { value: "Waste" }],
        dueDate: "12-04-2020",
      },
      {
        id: "136",
        name: "Kesavan is crying",
        description: "Cypress fucked me.",
        category: "Danger",
        labels: [{ value: "Personal" }, { value: "Waste" }],
        dueDate: "12-04-2020",
      },
      {
        id: "137",
        name: "Kesavan is crying",
        description: "Cypress fucked me.",
        category: "Danger",
        labels: [{ value: "Personal" }, { value: "Waste" }],
        dueDate: "12-04-2020",
      },
      {
        id: "138",
        name: "Kesavan is crying",
        description: "Cypress fucked me.",
        category: "Danger",
        labels: [{ value: "Personal" }, { value: "Waste" }],
        dueDate: "12-04-2020",
      },
      {
        id: "139",
        name: "Kesavan is crying",
        description: "Cypress fucked me.",
        category: "Danger",
        labels: [{ value: "Personal" }, { value: "Waste" }],
        dueDate: "12-04-2020",
      },
    ],
  };

  deleteHandler = (taskId) => {
    const tasks = this.state.tasks.filter((task) => task.id != taskId);
    this.setState({ tasks: tasks });
    alert(`Task with id ${taskId} successfully deleted`);
  };

  render() {
    const breakpointColumnsObj = {
      default: 3,
      1100: 2,
      700: 1,
      500: 1,
    };
    const tasks = this.isFilterApplied()
      ? this.getFilteredTasks()
      : this.state.tasks;
    const items = tasks.map((task) => (
      <TaskView
        id={task.id}
        name={task.name}
        description={task.description}
        category={task.category}
        labels={task.labels}
        dueDate={task.dueDate}
        deleteHandler={this.deleteHandler}
      />
    ));
    return (
      <div className="task-list-view">
        <TaskFilter
          applicableFilters={this.getFiltersApplicable()}
          onFiltersChange={this.onFiltersChange}
        />
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
      dueDate: moment(task.dueDate).from(),
    }));
    const filteredTasks = transformedTasksForFiltering.filter((task) => {
      return this.validateFilterForTask(task);
    });
    const filterdTaskIds = filteredTasks.map((task) => task.id);
    return this.state.tasks.filter((task) => filterdTaskIds.includes(task.id));
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
    const dateAsDueIn = (task) => moment(task.dueDate).from();
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
