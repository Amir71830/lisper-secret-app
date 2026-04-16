// HINTS:
// 1. Import express and axios

// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
import express from 'express';
import axios from 'axios';
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.set("views", path.join(__dirname, "../views"));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    try{
        const response = await axios.get('https://secrets-api.appbrewery.com/random');
        res.render('index',{secret:response.data.secret, user :response.data.username});
        console.log(response.data);
    }
    catch (error) {
        console.error('Error fetching secret:', error);
        res.status(500).send('Error fetching secret');
    }

});




const PORT = process.env.PORT || 3000;