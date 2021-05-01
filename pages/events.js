import React, { Component } from 'react'

import EventCard from './eventCard.js'

import CardColumns from 'react-bootstrap/CardColumns'

import data from  '../Data/data.json'



              const  events= data.map( ( data) =>{
                  return  (
                    
                   <EventCard />
                  
                  )
                }
              )




export default class Main extends Component {
    render() {
        return (
            <CardColumns className=" m-3 p-3 owncard ">  {events}  </CardColumns>
           
        )
    }
}