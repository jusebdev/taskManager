import mongoose from 'mongoose';

const tokenSchema = new mongoose.Schema({
	title: { type: String, required: true },
	completed: { type: Boolean, default: false },
	status: [{ type: String, enum: ["Pending", "In Progress", "Done"] }],
});

export default mongoose.models.Task || mongoose.model('Task',tokenSchema)
