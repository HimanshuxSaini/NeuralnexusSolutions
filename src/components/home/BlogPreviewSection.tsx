import React from 'react';
import { BLOG_POSTS, BlogPost } from '../../data/siteData';
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';

interface BlogPreviewSectionProps {
  onSelectPost: (post: BlogPost) => void;
  onViewAllBlog: () => void;
}

export function BlogPreviewSection({ onSelectPost, onViewAllBlog }: BlogPreviewSectionProps) {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight font-['Sora']">
              Latest technical writings & teardowns
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl">
              Practical guides and architecture notes authored by our five senior leads.
            </p>
          </div>

          <button
            onClick={onViewAllBlog}
            className="self-start md:self-end text-sm font-semibold text-[#0FA3B1] hover:text-[#0D8B97] flex items-center gap-1.5 cursor-pointer"
          >
            <span>Browse All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOG_POSTS.slice(0, 4).map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="bg-slate-50/50 rounded-2xl border border-slate-200/80 p-5 hover:bg-white hover:border-[#0FA3B1]/40 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Clean unboxed metadata with typographic separators (anti-pill discipline) */}
                <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium mb-3">
                  <span className="text-[#0FA3B1] font-semibold">{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-bold text-base text-[#0B1F3A] font-['Sora'] group-hover:text-[#0FA3B1] transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium text-slate-700">{post.author}</span>
                <span className="text-[#0FA3B1] font-semibold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                  Read article <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
