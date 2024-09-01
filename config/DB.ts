import mongoose from 'mongoose';
const database = () => {
    //DataBase connection
    mongoose
        .connect(process.env.DB!)
        .then(() => console.log('Connected!'))
        .catch((err: Error) => console.log(err));
}
export default database;