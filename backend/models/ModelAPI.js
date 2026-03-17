import mongoose from 'mongoose';

const modelApiSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    accuracy: { type: String },
    size: { type: String },
    link: { type: String }
});

export default mongoose.model('ModelAPI', modelApiSchema);
