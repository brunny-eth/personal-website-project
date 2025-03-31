const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
const dbName = 'blog';
const collectionName = 'subscribers';

export default async function handler(req, res) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    
    // Check if already subscribed
    const existing = await collection.findOne({ email });
    if (existing && existing.subscribed) {
      return res.status(200).json({ message: 'Already subscribed' });
    }
    
    // Add new subscriber or update existing one
    await collection.updateOne(
      { email }, 
      { 
        $set: { 
          email,
          subscribed: true,
          subscribedDate: new Date()
        } 
      },
      { upsert: true }
    );
    
    return res.status(201).json({ message: 'Subscribed successfully' });
  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
}