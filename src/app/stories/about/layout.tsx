import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "The story behind FlavorNest Vietnam — a nest of authentic Vietnamese culinary heritage.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
