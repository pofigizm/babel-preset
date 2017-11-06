## Babel preset for pofigizm projects

```bash
npm i -SE babel-core babel-preset-pofigizm
```

```json
{
  "preset": "pofigizm" // default targets: { node: 'current' }
}

// or

{
  "preset": [
    [
      "pofigizm",
      {
        "targets": { "chrome": 60 }
      }
    ]
  ]
}

```
