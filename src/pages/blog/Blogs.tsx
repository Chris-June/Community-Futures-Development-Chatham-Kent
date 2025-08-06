import React from 'react';
import { motion } from 'framer-motion';
import { blogPosts } from '../../data/blogPosts';
import PostCard from '../../components/blog/PostCard';
import FeaturedPostCard from '../../components/blog/FeaturedPostCard';

const Blogs: React.FC = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="text-center mb-12 md:mb-16" variants={itemVariants}>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">From Our Desk</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">Insights, stories, and advice from the Community Futures team to help your business thrive.</p>
        </motion.div>

        {featuredPost && (
          <motion.div className="mb-12 md:mb-20" variants={itemVariants}>
            <FeaturedPostCard post={featuredPost} />
          </motion.div>
        )}

        <motion.div className="mb-12 md:mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 border-b-2 border-primary pb-4 mb-8">All Posts</h2>
        </motion.div>

        <motion.div 
          className="grid gap-8 md:gap-10 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1"
          variants={containerVariants}
        >
          {regularPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <PostCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Blogs;

