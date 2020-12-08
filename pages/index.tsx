import * as React from 'react'
import { InferGetStaticPropsType } from 'next'
import AddPost from '../components/AddPost'
import Post from '../components/Post'
import { IPost } from '../types'

const BASE_URL: string = 'https://jsonplaceholder.typicode.com/posts'

export default function IndexPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [postList, setPostList] = React.useState(posts)

  const addPost = async (e: React.FormEvent, formData: IPost) => {
    e.preventDefault()
    const post: IPost = {
      id: Math.random(),
      title: formData.title,
      body: formData.body,
    }
    setPostList([post, ...postList])
  }

  const deletePost = async (id: number) => {
    const posts: IPost[] = postList.filter((post: IPost) => post.id !== id)
    console.log(posts)
    setPostList(posts)
  }

  if (!postList) return <h1>Loading...</h1>

  return (
    <main className='container'>
      <h1>My posts</h1>
      <AddPost savePost={addPost} />
      {postList.map((post: IPost) => (
        <Post key={post.id} deletePost={deletePost} post={post} />
      ))}
    </main>
  )
}

export async function getStaticProps() {
  const res = await fetch(BASE_URL)
  const posts: IPost[] = await res.json()

  return {
    props: {
      posts,
    },
  }
}
