import express from 'express';
import cors from 'cors';
import { adminRoutes } from './routes/adminRoutes.js'; // Importing specific export (not default)

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH"],
    credentials: true,
  })
);

app.use('/admin', adminRoutes);

app.listen(9080, () => {
  console.log("Server is running on port 8080");
});
