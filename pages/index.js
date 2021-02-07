import { Heading, Page, Badge } from "@shopify/polaris";

const Index = () => (
  <Page
  breadcrumbs={[{content: 'Products', url: '/products'}]}
  title="Jar With Lock-Lid"
  titleMetadata={<Badge status="attention">Verified</Badge>}
  primaryAction={{content: 'Save', disabled: false}}
  secondaryActions={[{content: 'Duplicate'}, {content: 'View on your store'}]}
  pagination={{
    hasPrevious: true,
    hasNext: true,
  }}
>
  <p>Page content</p>
</Page>
);

export default Index;
