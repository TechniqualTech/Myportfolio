// Example function to retrieve all documents
import dbConnect from '@/lib/dbConnect'; // Ensure you have a dbConnect function
import FormData from '@/model/FormData'; // Import your model

const getAllData = async () => {
    await dbConnect(); // Connect to MongoDB

    try {
        const documents = await FormData.find(); // Retrieve all documents
        console.log('Documents:', documents);
        return documents;
    } catch (error) {
        console.error('Error retrieving documents:', error);
        throw error;
    }
};

export default getAllData;
