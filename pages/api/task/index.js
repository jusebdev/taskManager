import Task from '../../../models/Task'
import dbConnect from '../../../utils/db'


export default async (req, res) => {
const {method} = req;

await dbConnect();


if(method === 'POST'){
    try {
        const newTask = await new Task(req.body).save();
        res.status(200).json({data:newTask},'Task added Successfully')

    } catch (error) {
        res.status(500).json({message:'Internal Server Error '})
        console.log(error)
    }
};


if(method === 'GET'){
    try{
        const tasks = await Task.find();
        res.status(200).json(tasks)
    }catch(error){
        res.status().json({message:'Internal Server Error '})
        console.log(error);
    }
}

}

