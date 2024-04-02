const mongoose = require('mongoose');

// Define MongoDB connection details
const mongoURI = 'mongodb+srv://shangowtham:41uJmYJOsHBPQxhB@gowtham.f7z1e8v.mongodb.net/Ecomm'; // Update with your MongoDB URI
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Define schema for the product data
const productSchema = new mongoose.Schema({
  ProductID: Number,
  ProductName: String,
  CategoryID: Number,
  SubcategoryID: Number,
  ProductSKU: String,
  ProductPrice: Number,
  DiscountPercentage: Number,
  SortPrice: Number,
  ProductStock: Number,
  WeightCts: Number,
  StoneSizeHeight: Number,
  StoneSizeWidth: Number,
  StoneDimensionLength: Number,
  StoneDimensionWidth: Number,
  StoneDimensionDepth: Number,
  Transparency: String,
  RequiredWire: String,
  Packaging: String,
  NoOfPieces: Number,
  ChemicalComposition: String,
  YouTubeEmbedCode: String,
  ProductDescription: String,
  ViewCounter: Number,
  NewArrivals: String,
  SellAfterOutOfStock: String,
  AlwaysInStock: String,
  SoldTime: Date,
  Clearance: String,
  CreatedAt: Date,
  UpdatedAt: Date,
  attributes: {
    shape_name: String,
    shape_size: String,
    cut_name: String,
    clarity_name: String,
    origin_name: String,
    treatment_name: String,
    master_cut_name: String,
    metal_type: String,
    metal_purity: String,
    metal_color_name: String,
    gold_color: String,
    diamond_color_name: String,
    diamond_clarity: String,
    number_of_accent_stones: Number,
    total_piece_dimensions_l: Number,
    total_piece_dimensions_w: Number,
    total_piece_dimensions_d: Number,
    center_stone_dimensions_l: Number,
    center_stone_dimensions_w: Number,
    center_stone_dimensions_d: Number,
    ring_size: String,
    band_thickness: Number,
    band_width: Number,
    backings_style: String,
    type_of_backings: String,
    type_of_bail: String,
    dimensions_of_bail_l: Number,
    dimensions_of_bail_w: Number,
    dimensions_of_bail_d: Number,
    fancy_jewelry_big_number: String,
    fancy_jewelry_stone_price: Number,
    fancy_jewelry_stone: String,
    gemstone_cats_eye: String,
    gemstone_star_stone: String,
    color_change_stone: String,
    fancy_cut: String,
    deal_of_the_month: String,
    jewel_box: String
  }
});

// Define mongoose model
const Product = mongoose.model('Product', productSchema);

// Connect to MongoDB
mongoose.connect(mongoURI, options)
  .then(() => {
    console.log('Connected to MongoDB');

    // Insert data into MongoDB
    insertData();
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Function to insert data into MongoDB
async function insertData() {
  try {
    const data = {
      ProductID: 1002,
      ProductName: "Sapphire Pendant",
      CategoryID: 102,
      SubcategoryID: null,
      ProductSKU: "SP-2001",
      ProductPrice: 800,
      DiscountPercentage: 15,
      SortPrice: 680,
      ProductStock: 5,
      WeightCts: 1.2,
      StoneSizeHeight: 7,
      StoneSizeWidth: 5,
      StoneDimensionLength: 10,
      StoneDimensionWidth: 7,
      StoneDimensionDepth: 4,
      Transparency: "Transparent",
      RequiredWire: "No",
      Packaging: "Box",
      NoOfPieces: 1,
      ChemicalComposition: "Aluminum oxide",
      YouTubeEmbedCode: null,
      ProductDescription: "A beautiful sapphire pendant suitable for any occasion.",
      ViewCounter: 300,
      NewArrivals: "Yes",
      SellAfterOutOfStock: "No",
      AlwaysInStock: "Yes",
      SoldTime: "2023-04-20T11:45:00Z",
      Clearance: "No",
      CreatedAt: "2023-04-15T08:30:00Z",
      UpdatedAt: "2023-04-20T12:30:00Z",
      attributes: {
        shape_name: "Oval",
        shape_size: "Large",
        cut_name: "Cabochon",
        clarity_name: "Opaque",
        origin_name: "Natural",
        treatment_name: null,
        master_cut_name: null,
        metal_type: "Silver",
        metal_purity: "925",
        metal_color_name: "White",
        gold_color: null,
        diamond_color_name: null,
        diamond_clarity: null,
        number_of_accent_stones: null,
        total_piece_dimensions_l: 25,
        total_piece_dimensions_w: 15,
        total_piece_dimensions_d: 5,
        center_stone_dimensions_l: null,
        center_stone_dimensions_w: null,
        center_stone_dimensions_d: null,
        ring_size: null,
        band_thickness: null,
        band_width: null,
        backings_style: null,
        type_of_backings: null,
        type_of_bail: null,
        dimensions_of_bail_l: null,
        dimensions_of_bail_w: null,
        dimensions_of_bail_d: null,
        fancy_jewelry_big_number: null,
        fancy_jewelry_stone_price: null,
        fancy_jewelry_stone: null,
        gemstone_cats_eye: null,
        gemstone_star_stone: null,
        color_change_stone: null,
        fancy_cut: null,
        deal_of_the_month: null,
        jewel_box: null
      }
    };

    // Insert the data into the MongoDB collection
    await Product.create(data);
    console.log('Data inserted into MongoDB');
  } catch (error) {
    console.error('Error inserting data into MongoDB:', error);
  } finally {
    // Disconnect from MongoDB after inserting data
    mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}
