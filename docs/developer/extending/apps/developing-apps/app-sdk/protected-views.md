# App protected views

Most likely at least some screens of the Saleor App are meant to be visible only withing Dashboard "Apps" section.

SDK provides a Higher Order Component that can be used to wrap Next.js pages and perform basic protection checks

## Example usage

```tsx
import { withAuthorization } from "@saleor/app-sdk/app-bridge";

const AppConfigurationPage: NextPage = () => {
  return <div>This is app inside Dashboard</div>;
};

export default withAuthorization()(AppConfigurationPage);
```

This code will render default, unstyled error screens if one of following checks are not met:

- App is rendered Server Side
- App is rendered outside iframe
- App is rendered and token can't be accessed
- App is rendered, but token is invalid

If all conditions are successful, child Page will be rendered

## Configuration

Each condition can be styled with custom error React Node, by passing configuration into HOC factory

Interface of configuration is following

```typescript
type Props = {
  unmounted?: ReactNode;
  notIframe?: ReactNode;
  noDashboardToken?: ReactNode;
  dashboardTokenInvalid?: ReactNode;
};
```

Each prop is optional, so some of them can be left with default fallback component.

### Full example

```tsx
import { withAuthorization } from "@saleor/app-sdk/app-bridge";
import { ErrorPage } from "src/error-page";

const AppConfigurationPage: NextPage = () => {
  return <div>This is app inside Dashboard</div>;
};

export default withAuthorization({
  unmounted: null,
  notIframe: (
    <ErrorPage error="403">This page can be accessed from dashboard</ErrorPage>
  ),
})(AppConfigurationPage);
```
