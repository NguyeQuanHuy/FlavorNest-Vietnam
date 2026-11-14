import { pageMetadata } from '@/lib/page-seo';

export const metadata = pageMetadata('/recipes/desserts');

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
