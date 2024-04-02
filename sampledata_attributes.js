const mongoose = require('mongoose');
const sampleData = require('./sampleData'); // Assuming sampleData.js contains the sample data

// Define MongoDB connection details
const mongoURI = 'mongodb+srv://shangowtham:41uJmYJOsHBPQxhB@gowtham.f7z1e8v.mongodb.net/Ecomm'; // Update with your MongoDB URI
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Define schema for the attribute data
const attributeSchema = new mongoose.Schema({
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
});

// Define mongoose model for the attribute schema
const Attribute = mongoose.model('Attribute', attributeSchema);

// Connect to MongoDB
mongoose.connect(mongoURI, options)
  .then(async () => {
    console.log('Connected to MongoDB');

 

    try {
      const result = await Attribute.insertMany(sampleData);
      console.log(`${result.length} documents inserted.`);
    } catch (error) {
      console.error('Error inserting data:', error);
    } finally {
      // Close the connection
      mongoose.disconnect();
    }
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));



