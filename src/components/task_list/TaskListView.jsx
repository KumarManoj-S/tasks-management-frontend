import React from 'react'
import TaskView from './TaskView'
import Masonry from 'react-masonry-css'
import '../../css/TaskListView.css'
export class TaskListView extends React.Component {
    
    state = {
        tasks: [
            {
                id: '123',
                name: 'Kesavan is crying123',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}, {value: 'Waste'}, {value: 'Waste'},{value: 'Waste'}],
                dueDate: '12-04-2020'
            },
            {
                id: '124',
                name: 'Kesavan is crying124',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            },
            {
                id: '125',
                name: 'Kesavan is crying125',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            },
            {
                id: '126',
                name: 'Kesavan is crying126',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            },
            {
                id: '127',
                name: 'Kesavan is crying',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            },
            {
                id: '128',
                name: 'Kesavan is crying',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            },
            {
                id: '129',
                name: 'Kesavan is crying',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            },
            {
                id: '130',
                name: 'Kesavan is crying',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            },
            {
                id: '131',
                name: 'Kesavan is crying',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            },
            {
                id: '132',
                name: 'Kesavan is crying',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            },
            {
                id: '133',
                name: 'Kesavan is crying',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            },
            {
                id: '134',
                name: 'Kesavan is crying',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            },
            {
                id: '135',
                name: 'Kesavan is crying',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            },
            {
                id: '136',
                name: 'Kesavan is crying',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            },
            {
                id: '137',
                name: 'Kesavan is crying',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            },
            {
                id: '138',
                name: 'Kesavan is crying',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            },
            {
                id: '139',
                name: 'Kesavan is crying',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            }
        ]
    }

    deleteHandler = taskId => {
        const tasks = this.state.tasks.filter(task => task.id != taskId);
        this.setState({tasks: tasks});
        alert(`Task with id ${taskId} successfully deleted`);
    }

    render() {
        const breakpointColumnsObj = {
            default: 3,
            1100: 2,
            700: 1,
            500: 1
        };
        return(
                <Masonry   breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">{
                    this.state.tasks.map((task) => <TaskView 
                    id = {task.id}
                    name={task.name} 
                    description={task.description}
                    category={task.category}
                    labels={task.labels}
                    dueDate={task.dueDate}
                    deleteHandler = {this.deleteHandler}
                />)}
                </Masonry>
        );
    }
}