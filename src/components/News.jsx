import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import NewFilter from '../pages/NewFilter';

const News = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get('post') || '';
  const latest = searchParams.has('latest');

  const startsFrom = latest ? 80 : 1;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data.slice(0, 10)))
  }, []);

  return (
    <div className='news'>
      <h1 className="news-heading">Новости</h1>

      <NewFilter postQuery={postQuery} latest={latest} setSearchParams={setSearchParams} />

      <Link to="/posts/new" lassName="add-post-link">
        Add new post
      </Link>

      <ul>
        {posts
          .filter(post => post.title.includes(postQuery) && post.id >= startsFrom)
          .map(post => (
            <li key={post.id}>
              <Link className="link" to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default News;
