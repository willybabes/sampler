import React, { FunctionComponent } from 'react'

interface IFile {
  name: string,
  url: string
}

const Player: FunctionComponent<IFile> = ({ name, url }) => {
  const audioContext = new AudioContext()
  let currentBuffer
  const visualizeAudio = (url: string) => {
    fetch(url)
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
      .then(audioBuffer => visualize(audioBuffer));
  }
  const visualize = (thing: any) => {
    console.log(thing)
  }

  const filterData = (audioBuffer: any) => {
    const rawData = audioBuffer.getChannelData(0)
    const samples = 70
    const blockSize = Math.floor(rawData.length / samples)
    const filteredData = []
    for (let i = 0; i < samples; i++) {
      filteredData.push(rawData[i * blockSize])
    }
    return filteredData
  }

  const handleClick = (e: any) => {
    visualizeAudio(url)
    // sound.currentTime = 0
    // sound.play()
  }
  return (
    <>
      <div>{name}</div>
      <audio src={url}></audio>
      <button onClick={handleClick}>Play</button>
    </>
  )
}

export default Player
