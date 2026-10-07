import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost } from '../../data/siteData';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { ArrowRight, BookOpen, Clock, Calendar, CheckCircle2, User, ChevronLeft } from 'lucide-react';

interface BlogViewProps {
  onNavigate: (view: string, param?: string) => void;
  initialPost?: BlogPost | null;
}

export function BlogView({ onNavigate, initialPost }: BlogViewProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(initialPost || null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', 'AI and ML', 'Automation', 'Software and Apps', 'Marketing and SEO'];

  const breadcrumbs = [
    { label: 'Insights & Blog', view: selectedPost ? 'blog' : undefined },
    ...(selectedPost ? [{ label: selectedPost.title }] : [])
  ];

  const filteredPosts = activeCategory === 'all'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === activeCategory);

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-8">
      <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />

      {/* Article Reader View */}
      {selectedPost ? (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <button
            onClick={() => setSelectedPost(null)}
            className="text-xs font-semibold text-[#0FA3B1] hover:text-[#0D8B97] flex items-center gap-1 mb-6 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </button>

          <article className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 shadow-xs">
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
              <span className="text-[#0FA3B1] font-semibold">{selectedPost.category}</span>
              <span>·</span>
              <span>{selectedPost.readTime}</span>
              <span>·</span>
              <span>{selectedPost.date}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0B1F3A] font-['Sora'] leading-tight">
              {selectedPost.title}
            </h1>

            <div className="mt-4 pb-6 border-b border-slate-100 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#0FA3B1]/20 text-[#0FA3B1] font-bold text-xs flex items-center justify-center">
                {selectedPost.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="text-xs">
                <div className="font-bold text-slate-900">{selectedPost.author}</div>
                <div className="text-slate-500">NeuralNexus Senior Lead</div>
              </div>
            </div>

            {/* Key Takeaways Box */}
            <div className="my-8 p-6 bg-[#EAF6F8]/60 border border-[#0FA3B1]/20 rounded-2xl">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-3">
                Key Technical Takeaways
              </h3>
              <div className="space-y-2">
                {selectedPost.keyTakeaways.map((takeaway, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#0FA3B1] shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Body Content */}
            <div className="space-y-5 text-sm text-slate-700 leading-relaxed">
              {selectedPost.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Related Service Hook */}
            <div className="mt-10 p-6 bg-[#0B1F3A] text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold text-[#0FA3B1]">Need help implementing this?</div>
                <div className="text-sm font-bold text-white mt-0.5">
                  Discuss this architecture with our team
                </div>
              </div>
              <button
                onClick={() => onNavigate('service', selectedPost.relatedServiceSlug)}
                className="py-2.5 px-4 bg-[#0FA3B1] hover:bg-[#0D8B97] text-white text-xs font-semibold rounded-xl transition-colors whitespace-nowrap cursor-pointer"
              >
                View Related Service
              </button>
            </div>
          </article>
        </div>
      ) : (
        /* Blog Index View */
        <>
          <section className="bg-[#0B1F3A] text-white py-8 lg:py-8 border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <span className="text-xs font-semibold text-[#0FA3B1] tracking-wider uppercase">
                  Technical Dispatches
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Sora'] leading-tight mt-2">
                  Engineering Insights & Guides
                </h1>
                <p className="mt-4 text-base text-slate-300 leading-relaxed">
                  Real engineering methodologies from WhatsApp Cloud APIs to reproducing arXiv papers and custom ERP performance.
                </p>
              </div>
            </div>
          </section>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Category tabs */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#0B1F3A] text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {cat === 'all' ? 'All Categories' : cat}
                </button>
              ))}
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="bg-white rounded-3xl border border-slate-200/80 p-7 shadow-2xs hover:shadow-md hover:border-[#0FA3B1]/40 transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium mb-3">
                      <span className="text-[#0FA3B1] font-semibold">{post.category}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                      <span>·</span>
                      <span>{post.date}</span>
                    </div>

                    <h2 className="font-bold text-xl text-[#0B1F3A] font-['Sora'] group-hover:text-[#0FA3B1] transition-colors leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-xs text-slate-600 mt-3 leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="font-medium text-slate-700">{post.author}</span>
                    <span className="text-[#0FA3B1] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read full article <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
