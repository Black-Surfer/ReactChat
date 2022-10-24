import React, { useState } from "react"
import "./App.css"
import { Sidebar } from "./containers/Sidebar"
import { MessagesList } from "./containers/MessagesList"
import { AddMessage } from "./containers/AddMessage"
import  { NameModal }  from "./containers/NameModal"

function App ()  {

  return (
    <div id="container" style={{width: 'auto'}}>
      <NameModal />
      <Sidebar />
      <section id="main">
        <MessagesList />
        <AddMessage />
      </section>
    </div>
  )
}

export default App