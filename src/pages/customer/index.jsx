import React from 'react'

import { request } from '~/services/httpService'

function customer() {
  const handleClick = event => {
    event.preventDefault()
    request()
  }

  return (
    <div>
      <h2>Tela de Customer</h2>

      <button type="button" className="p-4" onClick={handleClick}>
        Deu ruim a request externa.
      </button>
    </div>
  )
}

export default customer
