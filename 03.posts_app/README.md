### 1. `.env` file syntax

Create a `.env` file in your backend project folder:

```
PORT=5000
MONGO_URI="mongodb://127.0.0.1:27017/myDatabase"
JWT_SECRET="your_secret_key"
```

Remember: Don't use spaces around `=`.

### 2. How to access in Node.js (Express)

First, install dotenv:

```
npm install dotenv
```

Then, in your `server.js`:

```
require("dotenv").config();

const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT;

console.log(mongoURI);
console.log(port);
```

### 3. Use MongoDB URI to connect

```
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
```

Important: Add `.env` to your `.gitignore` file so your database credentials and secrets aren't uploaded to GitHub.