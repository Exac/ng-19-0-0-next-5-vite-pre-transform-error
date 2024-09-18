# Ng1900Next5VitePreTransformError

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 19.0.0-next.6.

## Error reproduction steps
1. Start the project

```console
$ npm run start
```

2. Open the browser and navigate to `http://localhost:4200/`

There are no errors in the console.

3. Navigate to `http://localhost:4200/bar/foo` (You can click the "Bar/Foo" button)

There are still no errors in the console.

4. Quit the dev server (press `q<enter>`, `ctrl-c` is currently broken).
5. Start the dev server again

```console
$ npm run start
```

When the page in the browser reloads, you will see the following in the console:

<pre>
Watch mode enabled. Watching for file changes...
NOTE: Raw file sizes do not reflect development server per-request transformations.
  ➜  Local:   http://localhost:4200/
  ➜  press h + enter to show help
<span style="color: red;">
10:36:18 AM [vite] Pre-transform error: Failed to load url /bar/polyfills.js (resolved id: /bar/polyfills.js). Does the file exist?
10:36:18 AM [vite] Pre-transform error: Failed to load url /bar/main.js (resolved id: /bar/main.js). Does the file exist?
</span>
</pre>
