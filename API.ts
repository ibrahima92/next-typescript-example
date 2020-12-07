import useSWR from 'swr'
import { IBook } from './types'

const fetcher = (url) => fetch(url).then((res) => res.json())

const baseUrl = 'https://jsonplaceholder.typicode.com/todos'

export const useGetBooks = async () => {
  try {
    const { data: posts, error } = await useSWR<IBook[], Error>(
      baseUrl,
      fetcher
    )
    return { posts, error }
  } catch (error) {
    throw new Error(error)
  }
}
