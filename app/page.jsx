import HomePage from '../components/HomePage';

export const metadata = {
  title: "Rita | Online Fitness, Mindset & Women's Transformation Coach",
  description: 'Premium online coaching for women — fitness, mindset and lifestyle transformations with Rita. Build strength, confidence and the body you actually want.',
  keywords: ['online fitness coach', 'women transformation coach', 'mindset coach', 'personal training', 'fitness program'],
  openGraph: {
    title: "Rita | Women's Transformation Coach",
    description: 'Imagine where you could be in 16 weeks — with structure, support and someone guiding you.',
    images: ['/assets/rita-banner-portrait.jpg'],
  },
};

export default function Page() {
  return <HomePage />;
}
