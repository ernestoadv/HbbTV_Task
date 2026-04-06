# HbbTV task.

Basic app including a grid that displays a set of events that are navigatable and can be accessed for more detail. This app tries to represent how a CTV app works in terms of architecture and design.

## Stack

- **Build**: Vite
- **Language**: TypeScript
- **UI Library**: React
- **Styling**: CSS & Styled Components
- **Routing**: React Router
- **Transpiling**: @vitejs/plugin-legacy

## Architecture & Design

This app follows FSD. It is an architectural methodology for scaffolding front-end applications. This pattern tries to reutilize as many components as possible while being more understandable and stable. 

### Layout

As to FSD conventions, the following folders are used:

```
src/
  app/           # App basic files that allow the app to run: routing, entrypoints, styles, etc.
  entities/      # Business entities.
  pages/         # Full pages used across the app.
  shared/        # Reusable functionality.
  widgets/       # Large chunks of functionality or UI.
```

FSD has more layers, but for this minimal project, they were not required. In exception of *App* and *Shared*, these folders are divided into *slices* that represent different domains. Every slice can contain the following *segments*:

- **api**: Backend interactions.
- **config**: Configuration files and feature flags.
- **lib**: Library code that modules of the slice may need.
- **model**: The data model, inclduing schemas, interfaces, stores and busineess logic.
- **ui**: Everything related to UI display.

### Design & Limitations

The app has followed a private Figma design targetting IE9. This restriction has limited the usage of modern CSS rules (i.e. *Flexbox*, *Grid*, etc.) in favour of older patterns (i.e. *inline-block*).

To support IE9, the app has been transpiled using the following configuration in *vite.config.ts* (@vitejs/plugin-legacy):
```json
{
  "targets": ["defaults", "IE>=9"]
}
```

And the following configuration in *tsconfig.app.json*:
```json
{
  "target": "ES5",
  "lib": ["ES5", "DOM", "DOM.Iterable"]
}
```


## Usage

The following tools are required:

- **Node.js**: >= v20.19.6
- **npm**: >= v10.8.2

To install the dependencies, run the following command:

```bash
npm install
```

Then, to build the app:

```bash
npm run build
```

This will generate a *dist* folder with the compiled app. To launch the app in preview mode, run the following command:

```bash
npm run preview
```

This will instantiate a local server that can be run on modern browsers. The default entrypoint is: *http://localhost:4173/*

## References

- Feature-Sliced Design: https://fsd.how/docs/get-started/overview/
- React Router: https://reactrouter.com/home
- Styled Components: https://styled-components.com/docs