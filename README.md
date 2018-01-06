## Babel preset for pofigizm projects

```bash
npm i -SE babel-core babel-preset-pofigizm
```

```json
{
  "presets": "pofigizm" // default targets: { node: 'current' }
}

// or

{
  "presets": [
    [
      "pofigizm",
      {
        "targets": { "chrome": 60 }
      }
    ]
  ]
}

// or

{
  "presets": [
    [
      "pofigizm",
      {
        "library": true
      }
    ]
  ]
}

```
