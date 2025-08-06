import React from 'react';
import { useParams, Link } from 'react-router-dom';

import { blogPosts } from '../../data/blogPosts';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-8">Sorry, we couldn't find the blog post you're looking for.</p>
        <Link 
          to="/blogs"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          <ArrowLeft className="mr-2 -ml-1 h-5 w-5" />
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="relative">
        <img src={post.imageUrl} alt={post.title} className="w-full h-96 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
          <p className="text-lg font-semibold text-primary-light uppercase tracking-wider mb-2">{post.category}</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">{post.title}</h1>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="flex flex-wrap items-center justify-between text-gray-500 mb-8 pb-4 border-b-2">
          <div className="flex items-center mb-4 sm:mb-0">
            <img src={post.authorAvatar} alt={post.author} className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-bold text-gray-800">{post.author}</p>
              <div className="flex items-center text-sm">
                <Calendar className="w-4 h-4 mr-1.5" />
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              </div>
            </div>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="w-4 h-4 mr-1.5" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>

                <article className="prose lg:prose-xl max-w-none mx-auto text-gray-800 prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary-dark prose-strong:text-gray-900">
          <ReactMarkdown 
            rehypePlugins={[rehypeRaw, rehypeHighlight]} 
            components={{
              h3: ({node, ...props}) => <h3 className="text-2xl font-bold mt-8 mb-4" {...props} />,
              p: ({node, ...props}) => <p className="mb-4 leading-relaxed" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 pl-4" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4 pl-4" {...props} />,
              li: ({node, ...props}) => <li className="mb-2" {...props} />,
              blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-primary bg-gray-100 p-4 my-6 italic" {...props} />,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>

        <div className="mt-12 pt-8 border-t-2">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center"><Tag className="w-5 h-5 mr-2"/>Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="inline-block bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm font-medium">{tag}</span>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/blogs"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            <ArrowLeft className="mr-2 -ml-1 h-5 w-5" />
            Back to All Posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
