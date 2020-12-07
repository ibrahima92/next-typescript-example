import * as React from 'react'
import AddBook from '../components/AddBook'
import Book from '../components/Book'
import { IBook } from '../types'
import { useGetBooks } from '../API'

export default function IndexPage() {
  const [books, setBooks] = React.useState<IBook[]>([])

  const fetchBooks = () => {
    useGetBooks()
      .then((books: IBook[]) => setBooks(books))
      .catch((err: Error) => console.log(err))
  }

  React.useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <main className='App'>
      <h1>My books</h1>
      <AddBook />
      {books.map((book: IBook) => (
        <Book key={book.id} book={book} />
      ))}
    </main>
  )
}
