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
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card/90 backdrop-blur-sm shadow-sm hover:shadow-md transition-all"
    >
      <Link to={`/blog/${post.slug}`} className="flex flex-col md:flex-row">
        {/* Image side */}
        <div className="relative md:w-5/12 overflow-hidden">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="h-52 w-full md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
            {post.category}
          </span>
        </div>

        {/* Content side */}
        <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground leading-snug group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {post.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-3">
              {post.excerpt}
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <img src={post.authorAvatar} alt={post.author} className="h-8 w-8 rounded-full" />
              <div>
                <p className="font-medium text-foreground text-xs">{post.author}</p>
                <div className="flex items-center gap-2">
                  <Calendar className="h-3 w-3" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-CA', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </time>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default PostCard;
