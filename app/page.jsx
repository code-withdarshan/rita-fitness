import HomePage from '../components/HomePage';

export const metadata = {
  title: "Rita | Face-to-Face Personal Training & Online Coaching",
  description: 'Personal training sessions and online coaching for women with Rita. Personalised training, nutrition guidance and ongoing support.',
  keywords: ['online fitness coach', 'women transformation coach', 'face-to-face personal training', 'personal training', 'fitness coaching'],
  openGraph: {
    title: "Rita | Women's Transformation Coach",
    description: 'Imagine where you could be in 16 weeks — with structure, support and someone guiding you.',
    images: ['/assets/rita-banner-portrait.jpg'],
  },
};

export default function Page() {
  return <HomePage />;
}
