# colors
#TO-DO
Add a list of colors in HowTo and explanation of the 2 games, name the color, go over the color

## Web Available at

https://alexvkcr.github.io/colors/#/colors/

## Project setup

```
npm install
```

## Set up poroject visually

```
npm ui
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Deploy at Github

0 Upload to dev &&& Delete remote & local 'gh-pages' branch
git push origin dev
git push origin --delete gh-pages
git branch -D gh-pages

1 change branch to 'gh-pages'
git checkout -b gh-pages

2 Comment 'dist' at .gitignore

3 npm run build
(3,4&5 for PowerShell:) npm run build; git add dist ; git commit -m "Initial dist subtree commit"; git subtree push --prefix dist origin gh-pages
4 git add dist && git commit -m "Initial dist subtree commit"

5 git subtree push --prefix dist origin gh-pages

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
