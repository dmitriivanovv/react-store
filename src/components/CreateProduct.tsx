import React from 'react'

function CreateProduct() {
  return (
    <form >
      <input
        type="text"
        className='border py-2 px-4 mb-2 w-full outline-none'
        placeholder='Enter product title...'
      />
      <button
        type='submit'
        className=' py-2 px-4 border bg-yellow-400 hover:bg-yellow-500 '
      >
        Create
      </button>
    </form>
  )
}

export default CreateProduct