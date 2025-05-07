import mongoose from "mongoose";

const SchemaExperience = new mongoose.Schema({
    title: {
        type: Object,
        required: true,
        default: {}
    },
    subtitles: {
        type: [Object],
        required: false,
        default: []
    },
    problem: {
        type: Object,
        required: false,
        default: []
    },

    solution: {
        type: Object,
        required: false,
        default: []
    },

    takeaways: {
        type: [Object],
        required: false
    },

    challanges: {
        type: [Object],
        required: false,
        default: []
    },

    technologies: {
        type: [String],
        required: false,
        default: []
    },
    links: {
        type: [Object],
        required: false,
        default: []
    },
    media: {
        type: [Object],
        required: false,
        default: []
    },
})

const Project = mongoose.models.Project || mongoose.model("Project", SchemaExperience)
export default Project