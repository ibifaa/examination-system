// test-email.js
import { Resend } from "resend";

const resend = new Resend("re_VvJB9mVb_BetY9xE4Fidp8ZqxbbVvAmHs"); // paste key directly, no env

const { data, error } = await resend.emails.send({
  from: "onboarding@resend.dev",
  to: "ibifaaibisakiaruoture@gmail.com", // your real email
  subject: "Test",
  html: "<p>Test email</p>",
});

console.log("data:", data);
console.log("error:", error);