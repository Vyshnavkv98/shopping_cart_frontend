import axios from "axios";


const url =`https://api.cloudinary.com/v1_1/dvxprkre3/image/upload`

const uploadImageToCloudinary = async (image) => {
    console.log(image)
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset","hn5yx4md");

    const response = await axios.post(url, formData);

    return response.data;
};

export default uploadImageToCloudinary;