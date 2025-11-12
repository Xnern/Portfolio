import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEOHead({
  title = 'Nathan Berthaud | Développeur Web & Web3',
  description = 'Développeur Web & Web3 | Ingénieur Logiciel | Spécialiste SEO & UI/UX basé à Nancy, France. Expert en Laravel, React, Next.js et technologies blockchain.',
  image = '/og-image.jpg',
  url = 'https://nathanberthaud.com',
  type = 'website'
}: SEOHeadProps) {
  const fullTitle = title.includes('Nathan Berthaud') ? title : `${title} | Nathan Berthaud`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content="développeur web, web3, blockchain, ingénieur logiciel, SEO, UI/UX, Laravel, React, Next.js, Nancy, France, freelance" />
      <meta name="author" content="Nathan Berthaud" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Nathan Berthaud" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Nathan Berthaud',
          jobTitle: 'Développeur Web & Web3',
          url: url,
          sameAs: [
            'https://github.com/Xnern',
            'https://www.linkedin.com/in/nathan-berthaud'
          ],
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Nancy',
            addressCountry: 'FR'
          },
          alumniOf: {
            '@type': 'Organization',
            name: 'CESI École d\'Ingénieurs'
          },
          worksFor: {
            '@type': 'Organization',
            name: 'Félix Informatique'
          },
          knowsAbout: [
            'Développement Web',
            'Web3',
            'Laravel',
            'React',
            'Next.js',
            'SEO',
            'UI/UX Design'
          ]
        })}
      </script>
    </Helmet>
  );
}
