require('dotenv').config();

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const nano = require('nano')(`http://${user}:${password}@localhost:5984`);
const dbName = process.env.DB_NAME;
const db = nano.db.use(dbName);

// verificar si existe la base de datos
// const dbConnect = async () => {
//     try {
//         const dbList = await nano.db.list();
//         if (!dbList.includes(dbName)) {
//             await nano.db.create(dbName);
//             console.log(`Database ${dbName} created!`);
//         } else {
//             console.log(`Database ${dbName} already exists.`);
//         }
//     } catch (err) {
//         console.log(err);
//     }
// }
 module.exports = nano;





