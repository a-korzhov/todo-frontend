import React, {useState} from 'react';
import {Box, Button} from "@mui/material";
import {StyledImageChanger, StyledUploadFile} from "../style";
import {toast} from "react-toastify";
import {uploadAvatarRequest} from "../../rest/api";

const ImageChanger = () => {
    const [file, setFile] = useState(undefined);

    const selectFile = (event) => {
        setFile(event.target.files[0])
    }

    const handleUpload = () => {
        uploadAvatarRequest(file)
            .then(resp => {
                setFile(resp.data.message)
                toast.success(resp.data.message);
                document.location.reload();
            }).catch((err) => {
            toast.error('Failed to upload image');
        })
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