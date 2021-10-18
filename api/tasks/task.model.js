const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true,
        default: "to do"
    },
    user_id: {
        type: mongoose.Types.ObjectId,
        required: true
    }
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;