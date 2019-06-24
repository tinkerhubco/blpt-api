# When to use SharedModule?

Consider adding files in the SharedModule when the contents are referenced across the entire
application.

# Should I add a service in the SharedModule?

It depends. Services added in the SharedModule are "stateless", meaning it is not binded
to any particular feature module. Consider adding it to the `core.module.ts`.

```
Consider not providing services in shared modules. Services are usually singletons that are provided once for the entire application or in a particular feature module. There are exceptions, however. For example, in the sample code that follows, notice that the SharedModule provides FilterTextService. This is acceptable here because the service is stateless;that is, the consumers of the service aren't impacted by new instances.

From: https://angular.io/guide/styleguide#shared-feature-module
```
