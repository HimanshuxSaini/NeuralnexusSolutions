import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: {
    label: string;
    view?: string;
    param?: string;
  }[];
  onNavigate: (view: string, param?: string) => void;
}

export function Breadcrumbs({ items, onNavigate }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ol className="flex items-center space-x-2 text-xs text-slate-500 overflow-x-auto no-scrollbar">
        <li className="flex items-center">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center hover:text-[#0FA3B1] transition-colors cursor-pointer text-slate-500"
          >
            <Home className="w-3.5 h-3.5 mr-1" />
            <span>Home</span>
          </button>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center space-x-2 whitespace-nowrap">
              <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
              {isLast || !item.view ? (
                <span className="font-semibold text-[#0B1F3A] truncate max-w-[200px] sm:max-w-none">
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={() => onNavigate(item.view!, item.param)}
                  className="hover:text-[#0FA3B1] transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
