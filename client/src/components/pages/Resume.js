import React from 'react';

import resumeFile from '../files/Zac Hobba TECHNICAL-RESUME.pdf'

export default function Resume() {
    return (
      <div className='resumeContainer'>
          <iframe src={resumeFile} width="100%" height="900px"></iframe>
    </div>
  );
}