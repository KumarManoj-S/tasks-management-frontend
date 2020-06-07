import moment from 'moment';


const taskDTO = (data) => {
    const dueDate = (data.dueDate && data.dueDate != 'Invalid date') ? new moment(data.dueDate).utc().format() : null;
    return {
        name: data.taskName,
        description: data.description || null,
        category: data.category || null,
        labels: (data.labels || []).map(o => o.value),
        dueDate: dueDate,
        status : data.status
    }
}

export default taskDTO;