"use server";

import { Resend } from "resend";
import { prisma } from "../utils/prisma";
import { getUserId } from "./user-action";

export async function RemoveReserver(userId: string) {
  try {
    const user = await prisma.reserve.delete({
      where: {
        id: userId,
      },
    });
    return { message: "User deleted successfully" };
  } catch (error) {
    return { message: "Something went wrong!" };
  }
}

export async function createEmailTemplate(
  name: string,
  phone: string,
  quantity: string,
  time: string,
  date: string
) {
  const html = `
  <!DOCTYPE html>
  <html lang="fa" dir="rtl">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>درخواست رزرو میز</title>
      <style>
          body { font-family: Arial, sans-serif; background-color: #f5f5f5; direction: rtl; text-align: right; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 20px auto; background: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); }
          .header { background-color: #007bff; color: white; padding: 15px; text-align: center; border-radius: 10px 10px 0 0; font-size: 20px; font-weight: bold; }
          .content { padding: 20px; font-size: 16px; color: #333; }
          .info { background: #f1f1f1; padding: 10px; border-radius: 5px; margin-bottom: 10px; }
          .footer { text-align: center; padding: 15px; font-size: 14px; color: #777; }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">درخواست رزرو جدید</div>
          <div class="content">
              <p>یک درخواست رزرو جدید دریافت شد:</p>
              <div class="info"><strong>نام متقاضی:</strong> ${name}</div>
              <div class="info"><strong>شماره تماس:</strong> ${phone}</div>
              <div class="info"><strong>تعداد نفرات:</strong> ${quantity}</div>
              <div class="info"><strong>تاریخ:</strong> ${date}</div>
              <div class="info"><strong>زمان:</strong> ${time}</div>
              <p>لطفاً در اسرع وقت با متقاضی تماس بگیرید.</p>
          </div>
          <strong class="footer">تمامی حقوق محفوظ است.</strong>
      </div>
  </body>
  </html>`;

  return html;
}

export async function getReserveRequests() {
  return await prisma.reserve.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}
export async function AddReserve(formData: FormData) {
  const userId = await getUserId();
  if (!userId) return null;
  const { name, phone, persons, time, date } = Object.fromEntries(
    formData.entries()
  );
  try {
    const reserve = await prisma.reserve.create({
      data: {
        name: name as string,
        phone: phone as string,
        quantity: Number(persons),
        time: time as string,
        date: date as string,
        userId: userId,
      },
    });

    const resend = new Resend(process.env.RESEND_API_KEY as string);
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.EMAIL_USER as string,
      subject: "درخواست رزرو میز ",
      html: await createEmailTemplate(
        name as string,
        phone as string,
        persons as string,
        time as string,
        date as string
      ),
    });

    return { message: "Reservation added successfully" };
  } catch (error) {
    return { message: "Something went wrong!" };
  }
}
