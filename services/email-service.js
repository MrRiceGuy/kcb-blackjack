var nodemailer = require('nodemailer');

module.exports = {
    SendEmail : function(recipients, subject, body, callback){
        var transporter = buildTransporter();

        const mailOptions = {
            from: 'kcb.emailer@gmail.com', // sender address
            to: recipients, // list of receivers
            subject: subject, // Subject line
            html: body// plain text body
          };

          // callback params err, info
          transporter.sendMail(mailOptions, callback);
    }
}

function buildTransporter(){
    return transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'kcb.emailer@gmail.com',
               pass: '***'
           }
       });
}