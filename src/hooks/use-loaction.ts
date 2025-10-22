'use client';
import { itemsSidebar } from "@/const/sidebar-links";
import { usePathname } from "next/navigation";


interface BreadcrumbItem {
  label: string;
  href?: string;
}

export const useLocation = () => {
  const pathname = usePathname();

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [{ label: 'Dashboard', href: '/dashboard/home' }];

    if (pathname === '/') {
      return breadcrumbs;
    }

    const matchedItem = itemsSidebar.find(item =>
      pathname === item.url || pathname.startsWith(item.url + '/')
    );

    if (matchedItem) {
      breadcrumbs.push({
        label: matchedItem.title,
        href: pathname === matchedItem.url ? undefined : matchedItem.url
      });

      if (pathname !== matchedItem.url) {
        const subPath = pathname.replace(matchedItem.url, '');
        const subSegments = subPath.split('/').filter(Boolean);

        subSegments.forEach((segment, index) => {
          const href = `${matchedItem.url}/${subSegments.slice(0, index + 1).join('/')}`;

          breadcrumbs.push({
            label: formatSegmentName(segment),
            href: index === subSegments.length - 1 ? undefined : href
          });
        });
      }
    } else {
      const pathSegments = pathname.split('/').filter(Boolean);
      pathSegments.forEach((segment, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join('/')}`;

        breadcrumbs.push({
          label: formatSegmentName(segment),
          href: index === pathSegments.length - 1 ? undefined : href
        });
      });
    }

    return breadcrumbs;
  };

  const formatSegmentName = (segment: string): string => {
    return segment
      .split(/[-_]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const determineLocation = (href: string): boolean => {
    if (!href) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const getCurrentPageTitle = (): string => {
    const breadcrumbs = generateBreadcrumbs();
    return breadcrumbs[breadcrumbs.length - 1]?.label || 'Dashboard';
  };

  return {
    pathname,
    determineLocation,
    generateBreadcrumbs,
    getCurrentPageTitle
  };
};