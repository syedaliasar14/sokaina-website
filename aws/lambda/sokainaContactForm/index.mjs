import AWS from 'aws-sdk';

const ses = new AWS.SES({ region: 'us-east-1' });
const senderEmail = 'sasar@pratt.edu';
const recipientEmail = 'sasar@pratt.edu';

export const handler = async (event) => {
  const { email, message } = JSON.parse(event.body);
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (!email || !message) {
    return {
      statusCode: 400,
      headers: headers,
      body: JSON.stringify({ error: 'Both fields are required.' }),
    };
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    return {
      statusCode: 400,
      headers: headers,
      body: JSON.stringify({ error: 'Email is invalid.' }),
    };
  }

  const params = {
    Source: senderEmail,
    Destination: {
      ToAddresses: [recipientEmail],
    },
    Message: {
      Subject: {
        Data: `New Message from Website Contact Form`,
        Charset: 'UTF-8',
      },
      Body: {
        Html: {
          Data: `<p><strong>Message from:</strong> ${email}</p><p>${message}</p>`,
          Charset: 'UTF-8',
        },
        Text: {
          Data: `Message from: ${email}\n\n${message}`,
          Charset: 'UTF-8',
        },
      },
    },
  };

  try {
    await ses.sendEmail(params).promise();
    return {
      statusCode: 200,
      headers: headers,
      body: JSON.stringify({ success: 'Email sent successfully!' }),
    };
  } catch (error) {
    console.error('Error sending email', error);
    return {
      statusCode: 500,
      headers: headers,
      body: JSON.stringify({ error: 'Failed to send email.' }),
    };
  }
};
