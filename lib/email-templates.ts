export const getAdminNotificationHtml = (
  name: string,
  email: string,
  message: string
) => {
  return `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${name}</li>
      <li>Email: ${email}</li>
    </ul>
    <h3>Message</h3>
    <p>${message}</p>
  `;
};

export const getClientThankYouHtml = (name: string, message: string) => {
  return `
    <p>Hi ${name},</p>
    <p>Thank you for reaching out through my portfolio.</p>
    <p>I’ve received your message and will get back to you as soon as possible.</p>
    <br/>
    <p><strong>Your Message:</strong></p>
    <p>${message}</p>
    <br/>
    <p>Regards,<br/>Prabhat Saini</p>
  `;
};
