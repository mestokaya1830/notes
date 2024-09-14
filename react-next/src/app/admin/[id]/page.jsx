"use client";
import React from 'react'
import Persons from '../persons.json'

export default function Details({params}) {
 const personDetails = Persons.filter(item => item.index == params.id)[0]
 const goBack = () => {
  window.history.back()
 }
  return (
    <>
      <h1>User Details</h1>
      <ul>
        <li>
          <span>{personDetails.name}</span>
          <span>{personDetails.dep}</span>
          <span>{personDetails.age}</span>
          <span>{personDetails.gender}</span>
        </li>
      </ul>
      <button onClick={goBack}>Back</button>
    </>
  )
}
