import nodemailer from 'nodemailer';

export default async (req, res)=>{
    const {name, email, message}=req.body;
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            user: process.env.user,
            pass: process.env.pass,
        }
    });

    try {
        const emailRes = await transporter.sendMail({
            from:email,
            to:'mhdginola@gmail.com',
            subject:'contact berhasil dari ${name}',
            html: '<p>you have a new submission </p><br/><p><strong>${message}</strong></p>',        
        });
        console.log('pesan terkirim', emailRes.messageId);
    } catch (error) {
        console.log(error);
    }

    res.status(200).json(req.body);
}