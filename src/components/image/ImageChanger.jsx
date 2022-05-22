import React, {useState} from 'react';
import {Box, Button} from "@mui/material";
import {StyledImageChanger, StyledUploadFile} from "../style";
import {toast} from "react-toastify";
import {uploadAvatarRequest} from "../../rest/api";
import imageCompression from "browser-image-compression";

const fileOptions = {
    maxSizeMB: 10,
    maxWidthOrHeight: 1920,
    useWebWorker: true
}

const compressFile = async (image, options) => {
    try {
        return await imageCompression(image, options);
    } catch (error) {
        console.log("Failed to compress file", error);
    }
}

const ImageChanger = () => {
    const [file, setFile] = useState(undefined);

    const selectFile = (event) => {
        setFile(event.target.files[0])
    }

    const handleUpload = () => {
        compressFile(file, fileOptions)
            .then((compressed) => {
                console.log("INIT SIZE: ", file.size);
                console.log('COMPRESSED SIZE: ', compressed.size);
                uploadAvatarRequest(compressed)
                    .then(resp => {
                        setFile(resp.data.message)
                        toast.success(resp.data.message);
                        document.location.reload();
                    }).catch((err) => {
                    console.log("FILE SIZE: ", compressed.size);
                    toast.error('Failed to upload image');
                })
            }).catch(err => {
        });
    }

    return (
        <StyledImageChanger>
            <StyledUploadFile>
                <input type="file" name="upload-photo" onChange={selectFile} title="Choose avatar"/>
                <i className="fa fa-arrow-up"></i>
            </StyledUploadFile>
            <Box ml={2}>
                <Button
                    style={{color: '#fdd835', backgroundColor: '#006E7F'}} variant="contained"
                    onClick={handleUpload}
                >
                    Change avatar
                </Button>
            </Box>
        </StyledImageChanger>
    );
};

export default ImageChanger;