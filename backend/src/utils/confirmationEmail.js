
/**
 * Confirmation Email!
 *   This email will confirm your user cause we don't
 *   want the bot crew etc hanging out in the application
 */
module.exports = function (referrer, jwt, username) {

  const helper = require('sendgrid').mail;
  const fromEmail = new helper.Email('team@example.com');
  const toEmail = new helper.Email(username);
  const subject = 'New Account Creation';
  const text = `click here to confirm your account:\n ${referrer}/#/confirm?token=${jwt}`
  const content = new helper.Content('text/plain', text);
  const mail = new helper.Mail(fromEmail, subject, toEmail, content);
   

  const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
  const request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

  sg.API(request, function (error, response) {
    if (error) {
      console.log('Error response received');
    }
    console.log(response.statusCode);
    console.log(response.body);
    console.log(response.headers);
  });
}