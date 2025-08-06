import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Post } from '../../types/blog';
import { Calendar, Clock } from 'lucide-react';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out group border border-gray-200/80"
    >
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="overflow-hidden">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">{post.category}</p>
            <div className="flex items-center text-xs text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-primary transition-colors duration-300">{post.title}</h3>
          <p className="text-gray-600 mb-4 text-base leading-relaxed">{post.excerpt}</p>
          <div className="flex items-center text-sm text-gray-500 pt-4 border-t border-gray-200/80">
            <img src={post.authorAvatar} alt={post.author} className="w-8 h-8 rounded-full mr-3" />
            <div>
              <p className="font-semibold text-gray-800">{post.author}</p>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1.5" />
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PostCard;
