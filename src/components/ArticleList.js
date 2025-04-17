import { useEffect, useState } from 'react';
import { fetchArticles } from '../services/api';
import { Link } from 'react-router-dom';
import './ArticleList.css';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles()
      .then(data => setArticles(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="list-container">
      <h1 className="title">NY Times Most Popular Articles</h1>
      {loading ? (
        <p className="loading">Loading articles...</p>
      ) : (
        <ul className="article-list">
          {articles.map(article => (
            <li key={article.id} className="article-item">
              <Link to={`/article/${article.id}`} state={{ article }} className="article-link">
                <h3>{article.title}</h3>
                <p className="meta">{article.section} | {article.published_date}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ArticleList;