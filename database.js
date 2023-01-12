const mongoose = require('mongoose');

const { MONGO_URL } = process.env || process.env.MONGO_URL;

mongoose.set('strictQuery', true);
mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log(`Database connected Successfuly`)).catch((err) => console.log(err));