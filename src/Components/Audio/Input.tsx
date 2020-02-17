import React, { Fragment, FunctionComponent, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { setFile as storeFiles, IFile } from '../../store/ducks/file/index'
import Player from './Player'

interface IUploadProps {
  storeFiles: typeof storeFiles
}

const Upload: FunctionComponent<IUploadProps> = ({ storeFiles }) => {
  const [ files, setFiles ] = useState([])
  const handleUpload = (e: any) => {
    const files = Object.values(e.target.files).map((file: File) => ({
      name: file.name,
      url: URL.createObjectURL(file)
    } as IFile))
    setFiles(files)
    console.log(files)
    storeFiles({ files })
  }
  return (
    <>
      <input
        onChange={handleUpload}
        multiple
        type="file"
      />
      {files.map((file, index) => (
        <Player
          key={`player_${index}`}
          name={file.name}
          url={file.url}
        />
      ))}
    </>
  )
}

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  storeFiles
}, dispatch)

export default connect(null, mapDispatchToProps)(Upload)
