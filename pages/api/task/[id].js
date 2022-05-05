import Task from "../../../models/Task";
import dbConnect from "../../../utils/db";

export default async (req, res) => {
	const { method } = req;
	const {id} = req;
	await dbConnect();

	if (method === "PUT") {
		try {
			const result = await Task.findByIdAndUpdate(id,{$set:req.body},{new: true}).save();
			res.status(200).json({ data: result }, "Task added Successfully");
		} catch (error) {
			res.status(500).json({ message: "Internal Server Error " });
			console.log(error);
		}
	}

	if (method === "DELETE") {
		try {
			await Task.findByIdAndDelete(id);
			res.status(200).json({ message:'Task Eliminated'  });
		} catch (error) {
			res.status().json({ message: "Internal Server Error "  });
			console.log(error);
		}
	}
};
