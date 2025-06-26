import mongoose from "mongoose";


const Schema = new mongoose.Schema({
    title: {
        type: Object,
        required: true,
        default: {}
    },
    order: {
        type: Number
    },
    subtitles: {
        type: [Object],
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
    conclusion: {
        type: Object,
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
});



const Expriences = mongoose.models.experiences || mongoose.model("experiences", Schema)

export default Expriences