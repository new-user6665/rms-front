import { Programme } from '@/gql/graphql'
import React from 'react'

interface LiveProps {
    program : Programme | null
}

const Live = (props : LiveProps) => {
  return (
    <div>{props.program ? props.program.name : "NULL DATA"}</div>
  )
}

export default Live