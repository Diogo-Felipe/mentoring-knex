const express = require("express");

const app = express();

const { gyms } = require("./routes/gym");

app.use(express.json());

app.use("/gyms", gyms);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
