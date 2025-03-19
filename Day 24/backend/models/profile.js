const mongoose = require('mongoose');

const profSchema = new mongoose.Schema(
    {
        username: { type: 'string', required: true },
        password: { type: 'string', required: true },
    },
)
const Profile = mongoose.model("Profile", profSchema);

module.exports =  Profile ;