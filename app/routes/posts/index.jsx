
import { Link, useLoaderData } from 'remix'
// import { db } from '~/utils/db.server'

export const loader = async () => {
  // const data = {
  //   posts: await db.post.findMany({
  //     take: 20,
  //     select: { id: true, title: true, createdAt: true },
  //     orderBy: { createdAt: 'desc' },
  //   }),
  // }
  const posts = [
    {
      id: 1,
      title: 'JavaScript Performance Tips',
      body: `We will look at 10 simple tips and tricks to increase the speed of your code when writing JS`,
    },
    {
      id: 2,
      title: 'Tailwind vs. Bootstrap',
      body: `Both Tailwind and Bootstrap are very popular CSS frameworks. In this article, we will compare them`,
    },
    {
      id: 3,
      title: 'Writing Great Unit Tests',
      body: `We will look at 10 simple tips and tricks on writing unit tests in JavaScript`,
    },
    {
      id: 4,
      title: 'What Is New In PHP 8?',
      body: `In this article we will look at some of the new features offered in version 8 of PHP`,
    },
  ]

  return data = { posts }
}

function PostItems() {
  const { posts } = useLoaderData()

  return (
    <>
      <div className='page-header'>
        <h1>Posts</h1>
        <Link to='/posts/new' className='btn'>
          New Post
        </Link>
      </div>
      <ul className='posts-list'>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.id}>
              <h3>{post.title}</h3>
              {new Date(post.createdAt).toLocaleString()}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default PostItems