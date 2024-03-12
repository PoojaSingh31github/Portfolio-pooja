import React from 'react';

const DownloadCV = () => {
  const PNG_FILE = 'http://localhost:3000/pooja singh resume.pdf';

  const downloadFileAtURL = (url) => {
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className='resumeButton'> 
      <button onClick={() => {downloadFileAtURL(PNG_FILE)}}>Download Resume</button>
    </div>
  );
}

export default DownloadCV;
