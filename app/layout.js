import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: {
    template: '%s | Digital Dental Marketing UK',
    default: 'Digital Dental Marketing | Expert Dental SEO & Web Design UK',
  },
  description: 'The premier digital marketing agency for dentists, orthodontists, and dental consultants in the UK. Book your free strategy session to get more local leads.',
  keywords: ['dental marketing', 'UK dental SEO', 'dental website design', 'orthodontist marketing', 'digital agency for dentists'],
  metadataBase: new URL('https://digitaldentalmarketing.co.uk'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
