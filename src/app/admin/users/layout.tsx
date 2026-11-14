import { pageMetadata } from '@/lib/page-seo';

export const metadata = pageMetadata('/admin/users');

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
