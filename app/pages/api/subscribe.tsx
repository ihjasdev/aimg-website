// pages/api/subscribe.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type SubscribeRequestBody = {
  email: string;
};

type SuccessResponse = {
  success: true;
};

type ErrorResponse = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>
) {
  // Check for correct HTTP method
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Type cast the request body
    const { email } = req.body as SubscribeRequestBody;

    // Validate email
    if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      return res.status(400).json({ message: 'Valid email is required' });
    }

    // Here you would add code to add the email to your newsletter service
    // For example with Mailchimp, ConvertKit, etc.
    
    // Example with a newsletter service (commented out)
    // const response = await newsletterService.addSubscriber(email);
    
    // For demo purposes, we'll log the email and return success
    console.log(`Newsletter subscription request for: ${email}`);
    
    return res.status(200).json({ success: true });
  } catch (error) {
    // Type narrowing for error handling
    const errorMessage = error instanceof Error 
      ? error.message 
      : 'An unknown error occurred';
      
    console.error('Newsletter subscription error:', errorMessage);
    return res.status(500).json({ message: errorMessage });
  }
}