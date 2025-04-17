import { useLocation, useNavigate } from 'react-router-dom';
import './ArticleDetail.css';

const ArticleDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const article = state?.article;

  if (!article) return <div className="detail-container">No article found</div>;

  return (
    <div className="detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>&larr; Back</button>
      <h2 className="detail-title">{article.title}</h2>
      <p className="meta">{article.byline} | {article.published_date}</p>
      <p className="abstract">{article.abstract}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-link">
        Read Full Article
      </a>
    </div>
  );
};

export default ArticleDetail;