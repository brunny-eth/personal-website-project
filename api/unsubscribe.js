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
    
    // Update subscription status
    const result = await collection.updateOne(
      { email },
      { 
        $set: { 
          subscribed: false,
          unsubscribedDate: new Date()
        } 
      }
    );
    
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Email not found' });
    }
    
    return res.status(200).json({ message: 'Unsubscribed successfully' });
  } catch (error) {
    console.error('Unsubscription error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
}