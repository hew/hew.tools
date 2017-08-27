module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules" : {
    "no-unused-vars": [0, { "varsIgnorePattern": "^h$" }]
  }
}

