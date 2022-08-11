import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import axios from "axios";



export default function AddFotoProduct({ onChangeImage }) {


    const uploadHandler = async (args) => {
        console.log("masuk sini")
        try {
            const formData = new FormData();
            formData.append("file", args.file);

            const processImage = await axios
                .post(
                    `https://ordercoffee-app.herokuapp.com/menu/`,
                    formData,
                    { headers: { "content-type": "multipart/form-data" } }
                )
                .then((res) => {
                    message.success("berhasil Upload File")
                    console.log(res)
                    // onChangeImage(res.data.data.filename)
                });
        } catch (e) {
            console.log(e, "apa errornya")
            message.error("Upload failed");
        }
    };


    return (
        <Upload customRequest={(args) => uploadHandler(args)} multiple={false}>
            <Button style={{ backgroundColor: "rgba(3, 189, 59, 0.8)", color: 'white' }} icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
    )
}

