# pablo-components

A library of reusable UI components for React.js and TypeScript projects.
Installation

To install the library, run:

```bash
npm install pablo-components
```

### Usage

To use a component, import it from the library and render it in your React.js application:

```bash
import { Button } from 'pablo-components';

function App() {
return (
<Button onClick={() => alert('Hello!')}>Click me!</Button>
);
}
```

You can customize the appearance of the Button component using the type and size props:

```bash
import { Button } from 'pablo-components';

function App() {
  return (
    <div>
      <Button type="primary" size="small">Small primary button</Button>
      <Button type="danger">Danger button</Button>
      <Button type="transparent" size="large">Large transparent button</Button>
    </div>
  );
}
```

## Available Components

- Button
- Modal
- Loader

A simple button component with customizable type and size.

### Props:

    onClick: function to be called when the button is clicked
    children: content of the button (required)
    type: type of the button (optional, defaults to "primary")
    size: size of the button (optional, defaults to "medium")

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE11, Edge                                                                                                                                                                                                      | last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                           |

## Contributing

Contributions to the library are welcome! To contribute, please fork the repository and submit a pull request.
License

This library is licensed under the MIT License.
