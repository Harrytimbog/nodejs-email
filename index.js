const nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "5e0ad524876d4b",
    pass: "978a471096c37a"
  }
});


const message = {
  from: 'Harriemannie@gmail.com', // Sender address
  to: 'Harrytimbog@gmail.com',         // List of recipients
  subject: 'Harrie is the lone Wolf | DroneWolf', // Subject line
  html: '<h1>Purchase your Holystone drones!</h1><p>Get your <b>Holystone</b> today!</p>'
  // text: 'Purchase your Holystone drones! Get your Holystone' // Plain text body
};
transport.sendMail(message, function (err, info) {
  if (err) {
    console.log(err)
  } else {
    console.log(info);
  }
});
