import React, { useState } from 'react'

import { Button, Select, TextField } from '@material-ui/core'

import { useUser } from '~/hooks'

function home() {
  const [input, setInput] = useState('')
  const a = useUser()
  return (
    <div>
      <h1>Home page</h1>

      <div className="flex flex-col w-6/12">
        <Button color="primary" variant="outlined">
          Teste Buttom
        </Button>
        <TextField
          name="testInput"
          label="TESTE TextField"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
      </div>
    </div>
  )
}

export default home
