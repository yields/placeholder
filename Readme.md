
# placeholder

  Placeholder for older browsers.

  tested on
    - ie7
    - ie8
    - ie9

## Installation

    $ component install yields/placeholder

## Example

It adds `.placeholder` class when the placeholder is active, it is styled
with a color of `#a8a8a8` by default.

```js
var placeholder = require('placeholder')
  , textarea = document.getElementsByTagName('textarea')[0]
  , input = document.getElementsByTagName('input')[0];

placeholder(textarea).set('textarea');
placeholder(input).set('input');
```

## License

  MIT
