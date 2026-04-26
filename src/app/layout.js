import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Bagas Seviardana Rionaldi | Portofolio Digital",
  description: "Portofolio digital Bagas Seviardana Rionaldi. Pelajar penuh semangat dari SMK Negeri 1 Purwokerto dengan keahlian dalam Web Development, Video Editing, dan Fotografi.",
  keywords: ["Bagas Seviardana Rionaldi", "Portofolio", "Web Developer", "Video Editor", "SMK Negeri 1 Purwokerto", "Frontend Developer"],
  authors: [{ name: "Bagas Seviardana Rionaldi" }],
  creator: "Bagas Seviardana Rionaldi",
  metadataBase: new URL("https://portofolio.bgas.my.id"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://portofolio.bgas.my.id",
    title: "Bagas Seviardana Rionaldi | Portofolio Digital",
    description: "Pelajar penuh semangat dari SMK Negeri 1 Purwokerto dengan keahlian dalam Web Development, Video Editing, dan Fotografi.",
    siteName: "Bagas Portofolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col background-wrapper text-gray-200">
        <div className="content-wrapper">{children}</div>
      </body>
    </html>
  );
}

