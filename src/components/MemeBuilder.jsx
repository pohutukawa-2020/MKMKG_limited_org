import React from 'react'
import { Route } from 'react-router-dom'

import TextInput from './TextInput'
import BigImage from './BigImage'
import ReturnToImageList from './ReturnToImageList'

function MemeBuilder(props) {
  return (
    <>
      <h1>MemeBuilder</h1>
      <TextInput {...props} />
      <BigImage />
      <ReturnToImageList />
    </>
  )
}

export default MemeBuilder

//Wrapper for text input and big image
