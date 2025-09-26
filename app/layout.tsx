
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asplenz — The Governance Stack for Enterprises",
  description: "Discover · Unified Governance · ApprovalGate",
  openGraph: { title: "Asplenz — Governance Stack", description: "From workflows to AI decisions: one suite, one layer of trust.", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title:"Asplenz — Governance Stack", description:"From workflows to AI decisions: one suite, one layer of trust.", images:["/og.png"] }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
