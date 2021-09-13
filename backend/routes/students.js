const router = require('express').Router();
let Student = require('../models/student.model');
//adding
const nodemailer = require("nodemailer");
require('dotenv').config(); 

router.route('/').get((req, res) => {
    Student.find()
        .then(students => res.json(students))
        .catch(err => res.status(400).json('Error: ' +err));
});


router.route('/add').post((req, res) => {
    const title = req.body.title;
    const name = req.body.name;
    const studentid = Number(req.body.studentid);
    const studentemail = req.body.studentemail;
    const major = req.body.major;
    const color = req.body.color;
    const start= Date.parse(req.body.start);
    const end= Date.parse(req.body.end);

    const newStudent = new Student({
        title,
        name,
        studentid,
        studentemail,
        major,
        color,
        start,
        end,
    });
//objects
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",//"smtp.ethereal.email",
        port: 465,//587,
        secure: true,//false, // true for 465, false for other ports
        auth: {
        user: process.env.MAIL_USERNAME,//'destini.howell80@ethereal.email', // generated ethereal user
        pass: process.env.MAIL_PASS, // generated ethereal password
     },
     tls:{
        rejectUnauthorized:false
      }
    });

    let info =  transporter.sendMail({
        from: process.env.MAIL_USERNAME,// 'destini.howell80@ethereal.email', // sender address
        to: studentemail, // list of receivers
        subject: "Laptop booking confirmation email", // Subject line
        text: "Hello world?", // plain text body
        html: "<div><p>Hello,</p> <p>This email is to confirm that you have successfully booked your laptop. You may collect your laptop anytime between 8 am to 5 pm on any of the weekdays from EUS office in McConnel Engineering Building. You will be asked to show your vaccine passports when picking up laptops.</p><p>Best,</br>Mahroo Rahman</br>Tech Rental Manager</br>Engineering Undergraduate Society of McGill University</br>Cell: (438) 725-8697 | Office: (514) 398-4396 </br>techrental@mcgilleus.ca | wiki.mcgilleus.ca</p></div>", // html body
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
