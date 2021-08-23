import React from 'react'
import {InputGroup, FormControl} from 'react-bootstrap'

function Home() {
    return (
        <div>
          <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
  </InputGroup>
        </div>
    )
}

export default Home
