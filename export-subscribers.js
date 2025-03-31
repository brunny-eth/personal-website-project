const { MongoClient } = require('mongodb');
const fs = require('fs');
require('dotenv').config(); 

const uri = process.env.MONGODB_URI;
const dbName = 'blog';
const collectionName = 'subscribers';

async function exportSubscribers() {
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    
    // Get all active subscribers
    const activeSubscribers = await collection
      .find({ subscribed: true })
      .toArray();
    
    // Extract just the emails
    const emails = activeSubscribers.map(sub => sub.email);
    
    // Write to file
    fs.writeFileSync('subscribers.csv', emails.join('\n'));
    
    console.log(`Exported ${emails.length} subscribers to subscribers.csv`);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
    console.log('MongoDB connection closed');
  }
}

exportSubscribers().catch(console.error);