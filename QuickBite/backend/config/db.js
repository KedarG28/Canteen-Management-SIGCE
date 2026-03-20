const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;



// ## Step 6: Define Your Models Start creating your Mongoose schemas in the `models/` folder (e.g., `User.js`, `FoodItem.js`, `Order.js`). Use the schemas provided in the previous step as a template.

// ## Step 7: Update package.json Scripts
// To make running the server easier, update the `scripts` section in your `package.json`:

// ```json
// "scripts": {
//   "start": "node index.js",
//   "dev": "nodemon index.js"
// }
// ```

// ## Step 8: Start the Server
// Run the following command to start your backend in development mode:

// ```bash
// npm run dev
// ```

// ---

// ### Verification Checklist
// 1. **Server Status**: Does the terminal say "Server running on port 5000"?
// 2. **Database Status**: Does the terminal say "MongoDB Connected..."?
// 3. **CORS**: Ensure `app.use(cors())` is present in `index.js` so your React frontend can communicate with this API.