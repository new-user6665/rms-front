import { Section } from '@/gql/graphql'
import React from 'react'

interface Props {
    data : Section[]
    setData : React.Dispatch<React.SetStateAction<Section[]>>
  }
  

const CreateSection = (props : Props) => {
  return (
    <div>CreateSection</div>
  )
}

export default CreateSection