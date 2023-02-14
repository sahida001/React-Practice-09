
import React from 'react'

const users = [
  {
    fullName : "Mst. Sahida Akter",
    age : 24,
    phones : [
      {home : "018557346747"},
      {office : "+7346747"},
    ]
  },

  {
    fullName : "Sahida Smrity",
    age : 23,
    phones : [
      {home : "019558346756"},
      {office : "+346747"},
    ]
  }
]


export default function App() {
  return (
    <div>
      <h1> Nested Lists</h1>
      {
        users.map ((users,index)=>
        <article key={index}>
          <h3>Full Name :{users.fullName}</h3>
          <p> Age :{users.age}</p>
         {
          users.phones.map((phone, index)=>(
          <div key={index}>
            <p>{phone.home}</p>
            <p>{phone.office}</p>
          </div>))
         }
        </article>)
      }
    </div>
    
  )
}

     
