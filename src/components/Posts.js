import { useEffect, useState } from 'react'
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`

const Posts = () => {
  // 총 게시물수 데이터
  const [posts, setPosts] = useState([]);

  // 게시물 데이터 fetching
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then(data => setPosts(data))
    .catch((err) => console.log(err, "Error"))
  }, [])

  console.log(posts)

  return (
    <Layout>
      <header>
        <h1>게시물 목록</h1>
      </header>
      <main>
        {posts.map(({id, title, body}) => (
          <article key={id}>
            <h3>{id}. {title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </main>
    </Layout>
  )
}

export default Posts