import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script'; // Importa o componente Script

export const metadata: Metadata = {
  title: 'O Alerta da Saúde: Desvendando o Risco Metanol',
  description:
    'Your guide to identifying contaminated beverages and staying safe.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* 1. SCRIPT UTMIY */}
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          strategy="beforeInteractive" 
        />
        
        {/* 2. META PIXEL SCRIPT (Parte JavaScript) */}
        {/* O 'dangerouslySetInnerHTML' é necessário para scripts que não são simples URLs */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive" // Use 'afterInteractive' para o Pixel para melhor performance
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1317698679822548');
              fbq('track', 'PageView');
            `,
          }}
        />
        
        {/* 3. META PIXEL NOSCRIPT (Parte Fallback) */}
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }} // Usando notação JSX para o estilo
            src="https://www.facebook.com/tr?id=1317698679822548&ev=PageView&noscript=1"
            alt="" // Adicionado alt vazio para acessibilidade
          />
        </noscript>

      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}