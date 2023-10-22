# Micro Frontend Monorepo
This is a monorepo for micro frontend architecture. Used monorepo for easier review process.
Suggest use monorepo by domain only or feature (depend on size).

## How to run
Each service should be run separately, new terminal.

### Install dependencies
Npm workspace would install all dependencies for all packages.
```bash
npm install
```

### Entry proxy service
Main entry point for the application. It is responsible for routing requests to the appropriate service.
Also it could contain some common logic for all services, like authentication, authorization, etc.

```bash
npm run build -w entry
npm run start -w entry
```

### Page services
Each page service is responsible for rendering a page. It is a separate application, with out build/deploy pipelines.
Service should prepare app props by communicating with business logic services.

#### Page A service
Service for page A. It is responsible for rendering page A.
```bash
npm run build -w page-a
npm run start -w page-a
```

#### Page B service
Service for page B. It is responsible for rendering page B.
```bash
npm run build -w page-b
npm run start -w page-b
```

### Packages
Package should be used to share common logic between services. It could be shared components, utils, etc. Package versioning is done via npm. It allows each service to use different version of the package. That would reduce impact on other consumers.

#### Atoms package
Atoms package contains shared components. It is used by page services to render shared UI.

Package does not have build pipeline, its ESM module. It has only release pipeline, which publish package to npm.
```bash
npm run release -w @wetravel/atoms
```