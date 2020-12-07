import * as React from 'react'
import { IBook } from '../types'

// type Props = {
//   saveTodo: (e: React.FormEvent, formData: ITodo | any) => void;
// };

const AddBook: React.FC = () => {
  const [formData, setFormData] = React.useState<IBook | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='Form' onSubmit={(e) => console.log(e)}>
      <div>
        <div>
          <label htmlFor='name'>Title</label>
          <input onChange={handleForm} type='text' id='name' />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <input onChange={handleForm} type='text' id='description' />
        </div>
        <div>
          <label htmlFor='author'>Author</label>
          <input onChange={handleForm} type='text' id='author' />
        </div>
      </div>
      <button disabled={formData === undefined ? true : false}>Add Book</button>
    </form>
  )
}

export default AddBook
