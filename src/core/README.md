# What is core module?

Core module is registered in the `app.module.ts` once. Core module is the place to register application-wide modules.

Example files:

- Database, Guards, filters & interceptors

# Shared vs Core in terms of Services?

- Shared service - stateless and not associated to a feature module. (eg: formatter.service.ts)
- Core service - singleton services and also not associated to a feature module. (eg: logger.service.ts). The scope of the core services are
