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
  // Returning null to remove the upper space across the website
  return null;
}
