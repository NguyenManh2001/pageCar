import nodemailer from "nodemailer";

const email = "manh95405@gmail.com";
const pass = "tbrflqoqlzisrikq";
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

// export const mainOptions = {
//   from: email,
//   to: 'manh.131101',
// };
