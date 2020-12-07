import * as React from 'react'
import { IBook } from '../types'

type Props = {
  book: IBook
  // updateTodo: (id: number) => void;
}

const Book: React.FC<Props> = ({ book }) => {
  return (
    <div className='Card'>
      <div className='Card--text'>
        <h1>{book.title}</h1>
        <p>{book.description}</p>
        <p>{book.author}</p>
      </div>
      <button
      // onClick={() => updateTodo(todo.id)}
      // className={todo.status ? `hide-button` : "Card--button"}
      >
        Delete
      </button>
    </div>
  )
}

export default Book
