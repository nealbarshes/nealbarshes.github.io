# Keep the Foot

Source for [nealbarshes.github.io](https://nealbarshes.github.io), a GitHub Pages site about amputation prevention and limb preservation.

## Repository structure

- `about/`, `brochures/`, `system-of-care/`, `tutorials/`, and `works/` contain canonical pages.
- `_pages/legacy/` contains small compatibility redirects for previously published URLs.
- `_data/navigation.yml` is the single source for primary and homepage navigation.
- `_sass/` contains page and component partials; `assets/css/main.scss` is only the import entry point.
- `assets/images/`, `assets/documents/`, and `assets/audio/` contain published media grouped by purpose.
- `_archive/` contains retained but unpublished material. Jekyll does not copy underscore-prefixed folders into the site.

## Naming conventions

Published paths use lowercase kebab-case. Page titles and navigation labels use Title Case; section headings use sentence case. Each page has explicit front matter, one H1, a description, and a stable permalink.

## Local development

1. Install Ruby and Bundler.
2. Run `bundle install`.
3. Run `bundle exec jekyll serve --livereload`.
4. Open `http://127.0.0.1:4000`.

Run `bundle exec jekyll build` and `ruby script/check_site.rb` before publishing.

## Asset policy

Only referenced media belongs under `assets/`. Definite duplicates, generated output, and empty placeholders are removed. Potentially useful but currently unreferenced material is retained under `_archive/` until it is deliberately restored or deleted.

