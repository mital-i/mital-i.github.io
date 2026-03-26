interface BlogPostProps {
  title: string;
  url: string;
  excerpt?: string;
  publishedAt?: string;
}

const BlogPost = ({ title, url, excerpt, publishedAt }: BlogPostProps) => (
  <article className="blog-post-card animate-fade-in">
    <div className="blog-post-content">
      <h3>{title}</h3>
      {publishedAt && <time className="blog-post-date" dateTime={publishedAt}>{publishedAt}</time>}
      {excerpt && <p className="blog-post-excerpt">{excerpt}</p>}
      <a className="blog-post-link" href={url} target="_blank" rel="noopener noreferrer">
        <span>Read on LessWrong</span>
        <span className="external-icon" aria-hidden="true">↗</span>
      </a>
    </div>
  </article>
)

export default BlogPost;
export type { BlogPostProps };
