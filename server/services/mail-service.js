const nodemailer = require('nodemailer')
const ApiError = require("../exceptions/api-error");

class MailService{
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            }
        })
    }
    async sendNotificationToAdmins(){
        try {
            await this.transporter.sendMail({
                from: process.env.SMTP_USER,
                to: process.env.ADMIN_EMAIL,
                subject: 'Регистрация новой заявки',
                text: '',
                html:
                    `
                    <div>
                    Зарегистрирована новая заявка, пройдите на <a href="${process.env.API_URL}">${process.env.API_URL}</a> для обработки заявки.
                    </div>
                `
            })
            return true;
        }catch (e){
            throw ApiError.BadRequest('Отсутствуют необходимые для запроса значения',e);
        }
    }
}
module.exports = new MailService();