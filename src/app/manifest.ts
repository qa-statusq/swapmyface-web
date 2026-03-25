import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SwapMyFace - Free AI Face Swap App',
    short_name: 'SwapMyFace',
    description:
      'Best free AI face swap app with 500+ templates. Unlimited swaps, HD results.',
    start_url: '/',
    display: 'standalone',
    background_color: '#09111f',
    theme_color: '#5e8cff',
    icons: [
      { src: '/images/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/images/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
