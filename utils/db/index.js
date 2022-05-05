
const mongoose = require('mongoose');


const DB_Link = process.env.DB_URL


if(!DB_Link){
    throw new Error(
        'please define DB URL'
    )
}

let cached = global.mongoose;

if(!cached){
    cached = global.mongoose ={conn:null,promise:null}
}

const dbConnect = async()=>{
    if(cached.conn){
        return cached.conn;
    };
    if (!cached.promise){
        const options ={
            useUnifiedTopology:true,
        }
        cached.promise = mongoose.connect(DB_Link,options).then((mongoose)=>{
            return mongoose;
        })
    };
    cached.conn =await cached.promise;
    return cached.conn

}

export default dbConnect;
