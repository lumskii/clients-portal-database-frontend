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



// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileEncode, FilePondPluginImageResize);


export default function Uploads({details, files, setFiles, setDetails}) {
 

  return (
    <div id="upload">
      <span className="sub_heading">Upload Film Poster</span>
      {/* <FilePond
        allowMultiple={false}
        files={files}
        onupdatefiles={setFiles}
        maxFiles={1}
        allowFileEncode={true}
        name='avatar'
        onChange={({files}) => setDetails({ ...details, avatar: files})}
        value={details.avatar}
      /> */}
    </div>
  );
}
