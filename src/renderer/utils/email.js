const nodemailer = require('nodemailer')

function getAttachments (attachement) {
  let result = []
  attachement.forEach(item => {
    result.push({
      path: item.path,
      encoding: 'base64',
      contentType: 'application/x-mobipocket-ebook',
      filename: item.filename
    })
  })
  return result
}

export function sendMailWithBook (setting, attachement) {
  let transporter = nodemailer.createTransport({
    host: setting.host,
    port: parseInt(setting.port),
    secure: true,
    auth: {
      user: setting.email,
      pass: setting.pass

    }
  })
  let mailOptions = {
    from: `${setting.email.split('@')[0]} <${setting.email}>`,
    to: setting.kindleEmail,
    subject: 'Convert',
    text: 'Start Pushing to kindle',
    attachments: getAttachments(attachement)
  }
  console.log(mailOptions)
  return new Promise(function (resolve, reject) {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error)
        return console.log(error)
      }
      resolve(info)
    })
  })
}
