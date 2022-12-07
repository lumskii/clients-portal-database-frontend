import React from 'react'
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import { Card, FormControl, InputLabel, TextField } from '@mui/material';
import { server } from '../../constance';
import { flexbox } from '@mui/system';



// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileEncode, FilePondPluginImageResize);


export default function Uploads({details, files, setFiles, setDetails, onChangeFile}) {
  

  return (
    <>
      <FormControl
        fullWidth
        sx={{
          gridColumn: "span 4",
          textAlign: "center",
          margin: "20px 0 80px 0",
          alignItems: "center",
        }}
      >
        <Card variant="outlined" sx={{ width: "400px", display: "grid", textAlign: "center", alignItems: "center", padding: "20px", fontWeight: "bold"}}>
          <label htmlFor="file">Film Poster</label>
          <TextField 
            fullWidth
            variant="filled"
            type="file"
            onChange={onChangeFile}
            // onChange={({files}) => setDetails({ ...details, avatar: files})}
            value={details.avatar}
            name="avatar"
          />
          </Card>
        {/* <FilePond
        allowMultiple={false}
        files={files}
        onupdatefiles={setFiles}
        maxFiles={1}
        allowFileEncode={true}
        onChange={onChangeFile}
        // onChange={({files}) => setDetails({ ...details, avatar: files})}
        value={details.avatar}
        filePosterHeight={50}
        // server={`${server}/v1/upload`}
      /> */}
      </FormControl>
    </>
  );
}
