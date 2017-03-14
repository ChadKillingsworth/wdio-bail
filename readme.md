# webdriver.io bail failure

Demonstrate that the `--bail=1` flag (or option) does not work with Jasmine.

`
npm install
npm start
`

The first test will fail. The second test will run anyway.

This quick and dirty POC will leave processes running when it dies.
