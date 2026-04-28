import "./globals.css";

export const metadata = {
  title: "SociaFlow AI - Social Business CMS",
  description:
    "Custom AI automation and CMS workflows for social media customer support, orders, payments, and feedback.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
