import { pageMetadata } from '@/lib/page-seo';

export const metadata = pageMetadata('/recipes/street-food');

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
