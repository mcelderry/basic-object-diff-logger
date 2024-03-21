```markdown
# basic-object-diff-logger

A simple utility library for logging differences between two JavaScript objects.

## Installation

```bash
npm install basic-object-diff-logger
```

## Usage

```javascript
const { logObjectDiffs } = require('basic-object-diff-logger');

const obj1 = { a: 1, b: 2, c: { d: 3 } };
const obj2 = { a: 1, b: 3, c: { d: 4 } };

logObjectDiffs(obj1, obj2);
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
