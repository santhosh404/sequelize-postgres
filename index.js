const express = require('express');
const { sequelize } = require('./models');
const { UserRoute } = require('./routes/user.route');
const { PostRoute } = require('./routes/post.route');


//Initialize the app
const app = express();

//Adding JSON Middleware
app.use(express.json())

// Sync the db
sequelize.sync({ alter: true }).then(() => {
    console.log("Drop and re-sync db.");
})

//Defining the routes
app.use('/api/user', UserRoute);
app.use('/api/post', PostRoute);


const PORT = process.env.PORT || 5052; 
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});