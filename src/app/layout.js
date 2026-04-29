import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Bagas Seviardana Rionaldi | Portofolio Digital",
  description: "Portofolio digital Bagas Seviardana. Pelajar SMK N 1 Purwokerto (PPLG) dengan keahlian Full-Stack Web Development, Video Editing & IT Enthusiast.",
  keywords: ["Bagas Seviardana Rionaldi", "Portofolio", "Web Developer", "Video Editor", "SMK Negeri 1 Purwokerto", "Frontend Developer"],
  authors: [{ name: "Bagas Seviardana Rionaldi" }],
  creator: "Bagas Seviardana Rionaldi",
  metadataBase: new URL("https://portofolio.bgas.my.id"),
  verification: {
    google: "iHXiimogguhYXMQ7-3sExWZWFTx2D7o_R5xxcmeU99A",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://portofolio.bgas.my.id",
    title: "Bagas Seviardana Rionaldi | Portofolio Digital",
    description: "Portofolio digital Bagas Seviardana. Pelajar SMK N 1 Purwokerto (PPLG) dengan keahlian Full-Stack Web Development, Video Editing & IT Enthusiast.",
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

