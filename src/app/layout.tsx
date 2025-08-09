export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

export const metadata = {
  title: 'Фотограф в Омске. Анастасия Кульбида',
  description: 'Фотосессии в Омске: одиночные, парные, семейные. Съемка свадеб и концертов. Если вы давно хотели обновить свой фотоальбом, то вы обратились по адресу!',
  openGraph: {
    title: 'Фотограф в Омске. Анастасия Кульбида',
    type: 'website',
    description: 'Фотосессии в Омске: одиночные, парные, семейные. Съемка свадеб и концертов.',
    images: ['https://cbx-prod.b-cdn.net/COLOURBOX32375309.jpg?width=800&height=800&quality=70'],

  },
};
