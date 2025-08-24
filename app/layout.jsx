import './globals.css';

export const metadata = {
  title: 'Lead & Lead',
  description: 'Lead & Lead Official Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Rakkas&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/style.css?v=20250806" />
        <link rel="stylesheet" href="/tv-crt.css?v=20250806" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet"/>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  )
}

