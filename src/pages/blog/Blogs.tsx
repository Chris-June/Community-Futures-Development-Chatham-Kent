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
    <div className="bg-gradient-to-b from-background to-primary-50 dark:from-background dark:to-primary-950 min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 dark:bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl" />
      </div>
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="text-center mb-12 md:mb-16" variants={itemVariants}>
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-primary-700 dark:text-primary-300 bg-primary-100/80 dark:bg-primary-900/30 rounded-full mb-4 backdrop-blur-sm">
            Our Blog
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight leading-tight">From Our Desk</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">Insights, stories, and advice from the Community Futures team to help your business thrive.</p>
        </motion.div>

        {featuredPost && (
          <motion.div className="mb-12 md:mb-20" variants={itemVariants}>
            <FeaturedPostCard post={featuredPost} />
          </motion.div>
        )}

        <motion.div className="mb-12 md:mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground border-b-2 border-primary-600 dark:border-primary-400 pb-4 mb-8">All Posts</h2>
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
