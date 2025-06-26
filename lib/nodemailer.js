import nodemailer from "nodemailer"
const NODEMAILER_EMAIL_ADDRESS = "mstph.iderkaoui@gmail.com"
const NODEMAILER_PASSWORD = "whgh pvby wbjl ythl"
const NODEMAILER_SERVICE = "gmail"

const mailer = nodemailer.createTransport({
    service: NODEMAILER_SERVICE,
    auth: {
        pass: NODEMAILER_PASSWORD,
        user: NODEMAILER_EMAIL_ADDRESS
    }
})


export default mailer