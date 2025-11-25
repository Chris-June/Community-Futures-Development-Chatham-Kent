import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Post } from '../../types/blog';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

interface FeaturedPostCardProps {
  post: Post;
}

const FeaturedPostCard: React.FC<FeaturedPostCardProps> = ({ post }) => {
  return (
    <motion.article
      className="relative overflow-hidden rounded-3xl border border-border bg-card/90 backdrop-blur-md shadow-lg hover:shadow-xl transition-shadow duration-300 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Link to={`/blog/${post.slug}`} className="flex flex-col lg:flex-row">
        {/* Left: text panel */}
        <div className="relative z-10 flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-gradient-to-r from-background/95 via-background/90 to-background/70">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-muted-foreground">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 uppercase tracking-wide text-primary-700 dark:text-primary-300">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-CA', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </time>
              </span>
              {post.readingTime && (
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readingTime} min read
                </span>
              )}
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">
                Featured Story
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-foreground group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
                {post.excerpt}
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={post.authorAvatar}
                alt={post.author}
                className="h-10 w-10 rounded-full border border-border shadow-sm"
              />
              <div className="text-sm">
                <p className="font-semibold text-foreground">{post.author}</p>
                <p className="text-xs text-muted-foreground">Community Futures Chatham-Kent</p>
              </div>
            </div>

            <motion.span
              className="inline-flex items-center text-sm font-semibold text-primary-700 dark:text-primary-300 group-hover:underline"
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            >
              Read full story
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </motion.span>
          </div>
        </div>

        {/* Right: hero image */}
        <div className="relative w-full lg:w-1/2 min-h-[14rem] lg:min-h-full overflow-hidden">
          <motion.img
            src={post.imageUrl}
            alt={post.title}
            className="h-56 w-full object-cover sm:h-64 lg:h-full lg:rounded-l-none"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: 'circOut' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black/35 via-black/15 to-transparent" />
        </div>
      </Link>
    </motion.article>
  );
};

export default FeaturedPostCard;
