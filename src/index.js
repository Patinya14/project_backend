const app = require('./config/express');
const mongoose = require('./config/mongoose');
const personal = require('./app/Personal/personal.route');
const login = require('./app/Login/login.route');
mongoose.connect(mongoose.url, { useMongoClient: true });

app.use(personal);
app.use(login);

app.listen(3000, () => console.log('Start server on port 3000!'))