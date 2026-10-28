import "animate.css";
import "./globals.css";
import { DarkmodeProvider } from "@/Contextss/Theme";
import AppShell from "@/Component/AppShell/AppShell";

export const metadata = {
  title: "Talha Asif",
  icons: {
    icon: "https://res.cloudinary.com/pvcq6rie/image/upload/v1787094437/copy_of_gemini_generated_image_ldaaqmldaaqmldaa.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <DarkmodeProvider>
          <AppShell>{children}</AppShell>
        </DarkmodeProvider>
      </body>
    </html>
  );
}
