import { pageMetadata } from '@/lib/page-seo';

export const metadata = pageMetadata('/travel');

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
