import React from 'react'
import TaskView from './TaskView'
import Masonry from 'react-masonry-css'
import '../../css/TaskListView.css'
export class TaskListView extends React.Component {
    
    state = {
        tasks: [
            {
                name: 'Kesavan is crying',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            },
            {
                name: 'Kesavan is crying',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            },
            {
                name: 'Kesavan is crying',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            },
            {
                name: 'Kesavan is crying',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            },
            {
                name: 'Kesavan is crying',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            },
            {
                name: 'Kesavan is crying',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            },
            {
                name: 'Kesavan is crying',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            },
            {
                name: 'Kesavan is crying',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            },
            {
                name: 'Kesavan is crying',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            },
            {
                name: 'Kesavan is crying',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            },
            {
                name: 'Kesavan is crying',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            },
            {
                name: 'Kesavan is crying',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            },
            {
                name: 'Kesavan is crying',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            },
            {
                name: 'Kesavan is crying',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            },
            {
                name: 'Kesavan is crying',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            },
            {
                name: 'Kesavan is crying',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            },
            {
                name: 'Kesavan is crying',
                description: 'Cypress fucked me.',
                category: 'Danger',
                labels: [{value: 'Personal'}, {value: 'Waste'}],
                dueDate: '12-04-2020'
            }
        ]
    }

    render() {
        const breakpointColumnsObj = {
            default: 3,
            1100: 2,
            700: 1,
            500: 1
        };
        const items = this.state.tasks.map((task) => <TaskView 
            name={task.name} 
            description={task.description}
            category={task.category}
            labels={task.labels}
            dueDate={task.dueDate}
            />)
        return(
                <Masonry   breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                    {items}      
                </Masonry>
        );
    }
}