import React from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import { Card, FormControl, InputLabel, TextField } from '@mui/material';
import { server } from '../../constance';
import { flexbox } from '@mui/system';
import { Field } from 'formik';

// Register the plugins
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileEncode,
  FilePondPluginImageResize
);

export default function Uploads({ Upload }) {
  return (
    <>
      <FormControl
        style={{ width: '100%' }}
        sx={{
          gridColumn: 'span 4',
          textAlign: 'center',
          margin: '20px 0 80px 0',
          alignItems: 'center',
        }}
      >
        <Card
          variant="outlined"
          sx={{
            width: '400px',
            display: 'grid',
            textAlign: 'center',
            alignItems: 'center',
            padding: '20px',
            fontWeight: 'bold',
          }}
        >
          <label htmlFor="file">Film Poster</label>
          <Upload />
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
