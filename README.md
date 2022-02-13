# Scriptlets to be run with uBlock Origin

Small changes and tweaks for my personal UX of the web.

These scriptlets are meant to be run as [uBlock Origin](https://github.com/gorhill/uBlock) filters, which requires the following:

### set userResourcesLocation

Under uBlock Origin's Advanced settings, set userResourcesLocation to ```https://<server>/custom_scriptlets.js```

Note that for security reasons JavaScript cannot be injected from a local file (e.g., ```file:///path/to/custom_scriptlets.js```), at least not without extra steps. One could serve them from a local server, but fetching from GitHub (or Pastebin) works with the least effort.
  
### create custom filter
  
Under uBlock Origin's My filters create filters such as
```
example.com##+js(scrollToLatestArticles.js)
```
This filter would then run scrollToLatestArticles.js every time [example.com](https://example.com) is requested.
