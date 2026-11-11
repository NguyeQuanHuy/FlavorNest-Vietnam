import { recipeMetadata } from '../_lib/recipe-seo';

export const metadata = recipeMetadata('bun-thang');

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
