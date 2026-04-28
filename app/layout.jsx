import "./globals.css";

export const metadata = {
  title: "SociaFlow AI - Social Media Automation",
  description:
    "Automate customer interactions, responses, and sales workflows across social media channels.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
