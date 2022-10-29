import React from "react";
import { useReactMediaRecorder } from "react-media-recorder";

const AudioRecorder = () => {
  const values = useReactMediaRecorder({ video: false });

  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
    previewAudioStream,
  } = values;

  return (
    <div>
      <p>{status}</p>
      <pre>{JSON.stringify(values, null, 2)}</pre>
      <button onClick={startRecording}>
        {status === "idle" ? "Start Recording" : "Restart Recording"}
      </button>
      <button onClick={stopRecording}>Stop Recording</button>
      <audio src={mediaBlobUrl} controls autoPlay loop />
    </div>
  );
};

export default AudioRecorder;
