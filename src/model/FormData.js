import mongoose from 'mongoose';

const FormDataSchema = new mongoose.Schema({
    image: String,
    title: String,
    sub_title: String,
    description:String,
    live_link:String,
}, {collection:"projects",versionKey: false,  timestamps: true });

const FormData = mongoose.models.FormData || mongoose.model('FormData', FormDataSchema);

export default FormData;
