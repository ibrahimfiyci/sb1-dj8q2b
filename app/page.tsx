import Hero from '@/components/hero';
import CustomerReviews from '@/components/customer-reviews';
import HowItWorks from '@/components/how-it-works';
import RecentBlogPosts from '@/components/recent-blog-posts';
import RequestPainter from '@/components/request-painter';
import FAQ from '@/components/faq';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Painters Marketplace | Find Top Painters in Virginia',
  description: 'Connect with skilled painters in Virginia for your home or business. Get free quotes, compare services, and hire the best local painters in VA.',
  keywords: 'find painters Virginia, VA painting services, home improvement Virginia, professional painters VA, Richmond painters, Norfolk painters, Virginia Beach painters',
};

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="sr-only">Painters Marketplace - Find Top Professional Painters in Virginia</h1>
      <Hero />
      <HowItWorks />
      <CustomerReviews />
      <RequestPainter />
      <RecentBlogPosts />
      <FAQ />
    </div>
  );
}