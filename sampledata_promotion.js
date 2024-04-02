const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb+srv://shangowtham:41uJmYJOsHBPQxhB@gowtham.f7z1e8v.mongodb.net/';

// Database Name
const dbName = 'promotions';

// Sample data to insert
const sampleData = {
  "Promotions": [
    {
      "PromotionID": 1,
      "PromotionName": "Spring Sale",
      "PromotionType": "Discount",
      "StartDate": new Date("2024-03-01T00:00:00Z"),
      "EndDate": new Date("2024-03-15T23:59:59Z"),
      "Description": "Get 20% off on all spring collection items.",
      "IsActive": true,
      "CreatedAt": new Date("2024-02-15T12:00:00Z"),
      "UpdatedAt": new Date("2024-02-20T08:30:00Z")
    }
  ],
  "PromotionConditions": [
    {
      "ConditionID": 1,
      "PromotionID": 1,
      "ConditionType": "Minimum Purchase Amount",
      "ConditionValue": "50",
      "CreatedAt": new Date("2024-02-20T08:30:00Z"),
      "UpdatedAt": new Date("2024-02-20T08:30:00Z")
    }
  ],
  "PromotionDiscounts": [
    {
      "DiscountID": 1,
      "PromotionID": 1,
      "DiscountType": "Percentage",
      "DiscountValue": "20",
      "MaxDiscountAmount": null,
      "CreatedAt": new Date("2024-02-20T08:30:00Z"),
      "UpdatedAt": new Date("2024-02-20T08:30:00Z")
    }
  ],
  "PromotionProducts": [
    {
      "ProductID": 1,
      "PromotionID": 1,
      "CreatedAt": new Date("2024-02-20T08:30:00Z"),
      "UpdatedAt": new Date("2024-02-20T08:30:00Z")
    },
    {
      "ProductID": 2,
      "PromotionID": 1,
      "CreatedAt": new Date("2024-02-20T08:30:00Z"),
      "UpdatedAt": new Date("2024-02-20T08:30:00Z")
    }
  ],
  "PromotionUsers": [
    {
      "UserID": 1,
      "PromotionID": 1,
      "UserName": "John Doe",
      "Email": "john@example.com",
      "CreatedAt": new Date("2024-02-20T08:30:00Z"),
      "UpdatedAt": new Date("2024-02-20T08:30:00Z")
    }
  ]
};

// Function to insert sample data into the promotions database
async function insertSampleData() {
  // Create a new MongoClient
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Connect to the MongoDB server
    await client.connect();

    // Create the promotions database
    const db = client.db(dbName);

    // Insert sample data into the respective collections
    for (const collectionName in sampleData) {
      if (Object.hasOwnProperty.call(sampleData, collectionName)) {
        const documents = sampleData[collectionName];
        await db.collection(collectionName).insertMany(documents);
        console.log(`Inserted ${documents.length} documents into collection ${collectionName}.`);
      }
    }
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    // Close the connection
    await client.close();
  }
}

// Call the function to insert sample data into the promotions database
insertSampleData();
