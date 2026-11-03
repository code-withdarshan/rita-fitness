import AboutPage from '../../components/AboutPage';

export const metadata = {
  title: 'About Rita Silva | Fitness Coach',
  description: 'Meet Rita Silva, fitness coach. Discover her journey from dance in Brazil to strength training, bodybuilding, powerlifting, and coaching in Australia.',
  openGraph: {
    title: 'About Rita Silva | Fitness Coach',
    description: 'Strength. Mindset. Transformation. Meet Rita Silva and learn the story behind her coaching.',
    ...(process.env.NEXT_PUBLIC_SITE_URL && { images: ['/assets/rita-coach-portrait.jpg'] }),
  },
};

export default function Page() {
  return <AboutPage />;
}
