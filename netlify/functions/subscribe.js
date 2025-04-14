
const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Check if request method is POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse request body
    const data = JSON.parse(event.body);
    const { email } = data;

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Valid email is required' })
      };
    }

    // Get Mailchimp API credentials from environment variables
    const apiKey = process.env.MAILCHIMP_API_KEY;
    const listId = process.env.MAILCHIMP_LIST_ID;

    if (!apiKey || !listId) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Server configuration error: Missing Mailchimp credentials' })
      };
    }

    // Extract data center from API key (e.g., us7 from xxx-us7)
    const dataCenter = apiKey.split('-')[1];
    if (!dataCenter) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Invalid API key format' })
      };
    }

    // Set up the request to Mailchimp API
    const url = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${listId}/members`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(`anystring:${apiKey}`).toString('base64')}`
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          SOURCE: 'Touch Keyboard Waitlist'
        }
      })
    });

    const responseData = await response.json();

    // Handle successful subscription
    if (response.ok) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true })
      };
    } 
    // Handle already subscribed case
    else if (responseData.title === 'Member Exists') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'This email is already subscribed', alreadySubscribed: true })
      };
    } 
    // Handle other errors
    else {
      console.error('Mailchimp error:', responseData);
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ error: responseData.title || 'Failed to subscribe' })
      };
    }
  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};
