# wiki.drehmal.cyou

This is the official wiki for Drehmal: APOTHEΩSIS.

Check out the [official website](https://www.drehmal.net/) & the [official Discord server](https://discord.drehmal.net)! Almost all of the planning for this wiki happens in the completion-locked `#wiki-creation` channel on the Discord!

## About this wiki

This wiki is built with [MkDocs](https://www.mkdocs.org/). It uses the [Material for MkDocs](https://github.com/squidfunk/mkdocs-material) theme. If you want to contribute check out the files in /doc/.

Additionally it uses the following plugins:

- [mkdocs-roamlinks-plugin](https://github.com/Jackiexiao/mkdocs-roamlinks-plugin)
- [mkdocs-minify-plugin](https://github.com/byrnereese/mkdocs-minify-plugin)
- [mkdocs-glightbox](https://github.com/blueswen/mkdocs-glightbox)

## Contributing

The easiest way is to simply edit the files in /docs/ and create a pull request. Alternatively you can setup a local development environment like this:

1. Install Python 3.8 (or higher) and Git
2. Clone this repository: `git clone https://github.com/drehmal/wiki.git`
3. Navigate to the project directory
4. Create a personal branch: `git checkout -b my-branch` - would be a good idea to name it after the feature you're working on :)
5. Optionally: Create a virtual environment: `python -m venv venv` and activate it: `venv\Scripts\activate`
6. Install the dependencies: `pip install -r requirements.txt`
7. Run the development server: `mkdocs serve` - this will start a local webserver on http:// (if you want to have a faster build time you can use `mkdocs serve --dirtyreload` instead)
8. Make your changes
9. Commit your changes: `git add .` and `git commit -m "your commit message"`
10. Push your changes: `git push origin my-branch`
11. Create a pull request :)

I recommend using VS Code as it can help you with all git related actions (except PRs), but you can use any editor you like.

### Linking to other pages

Thanks to the `mkdocs-roamlinks-plugin` linking is quite easy:

- `[[page]]` - links to a page with the filename "page"
- `[[page#heading]]` - links to a page with the filename "page" and the heading "heading"
- `[[page#heading|text]]` - links to a page with the filename "page" and the heading "heading" and displays "text" as the link text
- `[text](page)` - links to a page with the filename "page" and displays "text" as the link text

There are also a couple of shortcuts to specific pages (see `mkdocs.yml`). Some of these exists, since `index.md`-files can't be linked directly it seems.

### Adding images

Images should be placed in the /docs/img/ directory. You can then reference them like this:

- `![[imagename]]` - displays the image "imagename"
- `![[imagename|alt text]]` - displays the image "imagename" with alt text "alt text"
- `![[imagename]]{ align=right width="300" }` - displays the image "imagename" and aligns it on the right size with 300px width
- `![alt text](img/image.png)` - displays the image with the alt text "alt text"
