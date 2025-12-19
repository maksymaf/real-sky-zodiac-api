require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', require('./routes/zodiac.route'))
app.get('/isalive', (req, res) => {
    res.status(200).json({message: "it works"});    
});

async function main() {
    try{
        app.listen(PORT, () => {
            console.log(`Server is listening on http://localhost:3000`);
        });
    }catch(error){
        console.error(error.message);
        process.exit(1);
    }
}

main();
