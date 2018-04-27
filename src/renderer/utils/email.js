const nodemailer = require('nodemailer')

export function sendMailWithBook () {
  let transporter = nodemailer.createTransport({
    host: 'smtp.163.com',
    port: 465,
    secure: true,
    auth: {
      user: 'jyx15221613915@163.com',
      pass: '123456789jyx'

    }
  })
  let mailOptions = {
    from: 'jyx15221613915 <jyx15221613915@163.com>',
    to: '15221613915@kindle.cn',
    subject: 'Convert',
    text: 'Pushing to kindle from ' + 'C:\\Users\\mickle.jiang\\Downloads\\小狗钱钱.mobi',
    attachments: [
      {
        path: 'C:\\Users\\mickle.jiang\\Downloads\\小狗钱钱.mobi',
        encoding: 'base64',
        contentType: 'application/x-mobipocket-ebook',
        filename: '小狗钱钱.mobi'
      }
    ]
  }
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
    console.log('Message sent: %s', info.messageId)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
  })
}
