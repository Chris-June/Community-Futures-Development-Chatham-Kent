import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Post } from '../../types/blog';
import { ArrowRight, Calendar } from 'lucide-react';

interface FeaturedPostCardProps {
  post: Post;
}

const FeaturedPostCard: React.FC<FeaturedPostCardProps> = ({ post }) => {
  return (
    <motion.div 
      className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out group border-2 border-transparent hover:border-primary"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Link to={`/blog/${post.slug}`} className="block md:flex">
        <div className="md:w-1/2 overflow-hidden">
          <motion.img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-64 md:h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: 'circOut' }}
          />
        </div>
        <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
          <div>
            <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Featured Article</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight group-hover:text-primary transition-colors duration-300">{post.title}</h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">{post.excerpt}</p>
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <img src={post.authorAvatar} alt={post.author} className="w-10 h-10 rounded-full mr-4 border-2 border-white shadow-sm" />
              <div>
                <p className="font-bold text-gray-800">{post.author}</p>
                <div className="flex items-center text-xs">
                  <Calendar className="w-4 h-4 mr-1.5" />
                  <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                </div>
              </div>
            </div>
            <motion.div 
              className="inline-flex items-center font-semibold text-primary text-lg group-hover:underline"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Read Full Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default FeaturedPostCard;
