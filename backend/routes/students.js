const router = require('express').Router();
let Student = require('../models/student.model');
//adding
const nodemailer = require("nodemailer");

router.route('/').get((req, res) => {
    Student.find()
        .then(students => res.json(students))
        .catch(err => res.status(400).json('Error: ' +err));
});


router.route('/add').post((req, res) => {
    const title = req.body.title;
    const studentid = Number(req.body.studentid);
    const studentemail = req.body.studentemail;
    const color = req.body.color;
    const start= Date.parse(req.body.start);
    const end= Date.parse(req.body.end);

    const newStudent = new Student({
        title,
        studentid,
        studentemail,
        color,
        start,
        end,
    });
//objects
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
        user: 'destini.howell80@ethereal.email', // generated ethereal user
        pass: 'hu8NmD9bjqY44UNc4p', // generated ethereal password
     },
     tls:{
        rejectUnauthorized:false
      }
    });

    let info =  transporter.sendMail({
        from: 'destini.howell80@ethereal.email', // sender address
        to: studentemail, // list of receivers
        subject: "confirmation email", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>whats up</b>", // html body
      });
      
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  //ends above
    newStudent.save()
        .then(() => res.json('Student added!'))
        .catch(err => res.status(400).json('Error: ' +err));

});

router.route('/:id').delete((req, res) => {
  Student.findByIdAndDelete(req.params.id)
    .then(() => res.json('Student deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
