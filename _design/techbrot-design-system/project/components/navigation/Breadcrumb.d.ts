/**
 * Breadcrumb — slash-separated trail; last item is current page.
 */
export interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}
