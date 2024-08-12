import React, { useState } from 'react';
import { startRecording, stopRecording } from './recordingService';
import { convertToSignLanguage } from './convertService';
import './css folder/SpeechToSign.css'; // Make sure the path is correct

const SpeechToSign = () => {
  const [recording, setRecording] = useState(false);
  const [status, setStatus] = useState('Not Recording');
  const [transcribedText, setTranscribedText] = useState('');
  const [videoPath, setVideoPath] = useState('');

  const handleStartRecording = async () => {
    try {
      await startRecording();
      setRecording(true);
      setStatus('Recording...');
    } catch (error) {
      alert('Error starting recording');
    }
  };

  const handleStopRecording = async () => {
    try {
      await stopRecording();
      setRecording(false);
      setStatus('Not Recording');
    } catch (error) {
      alert('Error stopping recording');
    }
  };

  const handleConvert = async () => {
    setStatus('Converting...');
    try {
      const result = await convertToSignLanguage();
      setTranscribedText(result.transcribedText);
      setVideoPath(result.videoPath);
      setStatus('Conversion Completed');
    } catch (error) {
      setStatus('Conversion Failed');
      alert('Error during conversion');
    }
  };

  return (
    <div className="speech-to-sign-wrapper">
      <h1>Speech to Sign Language Conversion</h1>
      <div className="controls">
        <button onClick={handleStartRecording} disabled={recording}>
          Start Recording
        </button>
        <button onClick={handleStopRecording} disabled={!recording}>
          Stop Recording
        </button>
        <button onClick={handleConvert} disabled={recording}>
          Convert to Sign Language
        </button>
      </div>
      <p>Status: {status}</p>
      {transcribedText && <p>Transcribed Text: {transcribedText}</p>}
      {videoPath && (
        <div>
          <p>Converted Video:</p>
          <video src={videoPath} controls width="600" />
        </div>
      )}
    </div>
  );
};

export default SpeechToSign;
