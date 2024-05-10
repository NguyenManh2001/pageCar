import nodemailer from "nodemailer";


import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: any, res: NextApiResponse) {
  const data = req.searchParams.data;
  const tas = JSON.parse(data);
  const email = "manh95405@gmail.com";
  const pass = "tbrflqoqlzisrikq";
  const formatItemString = `
  Họ và Tên: ${tas.name}
  Số điện thoại: ${tas.number}
  Địa chỉ: ${tas.address}
  Nhãn hiệu ô tô: ${tas.icon}
  Năm sản xuất: ${tas.year}
  Loại dịch vụ: ${tas.type}
`;
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});
   try {
    await transporter.sendMail({
      from: "manh95405@gmail.com",
      to: 'manh.131101@gmail.com',
      subject: "Đăng ký dịch vụ chạy xe",
      text: formatItemString,
    });
    // return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.log(error);
  }
  
}
