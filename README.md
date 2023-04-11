# HTML-CSS-METINET

## By Dylan DOLMAZON
![logo de l'université](webroot/assets/img/readme_img/logo-lyon-1.jpeg)

| Rôle                   | Nom                | Email                            | 
|------------------------|--------------------|----------------------------------|
| Dev.Front, Intégrateur | **Dolmazon Dylan** | dylan.dolmazon@etu.univ-lyon1.fr |  
| Professor              | **Frere Robin**    | robin.frere@univ-lyon1.fr        | 

## Get Repository

- ### Downloding ZIP
  - Gor here ``https://gitlab.com/dylan.dolmazon/html-css-metinet``
  - ![Image for gitlab barre to download ZIP, clone project](webroot/assets/img/readme_img/gitlab_barre.png) clic on the descending arrow
  - Choose your extension

- ### Using GIT
  - use ``git clone https://gitlab.com/dylan.dolmazon/html-css-metinet.git`` in your terminal

## Use Project

- ### Installation
  - ``cd [myRepository/path]/html-css-metinet``
  - ``npm i``

- ### Compile with SASS
  - ``sass scss:webroot/assets/css``

- ### Modify project
  - To modify: 
    - Pages content go to html-css-metinet -> webroot -> pages -> [pageName].html and modify the content
    - Pages style got to html-css-metinet -> scss -> [scssName].scss and modify the content (think about compiling)
    - JavaScript got to html-css-metinet -> webroot -> assets -> js -> [jsName].js and modify the content
    - Images got to html-css-metinet -> webroot -> assets -> img and add new images
    - Icons got to html-css-metinet -> icons and modify / add icons and use in your terminal ``grunt`` ``sass scss:webroot/assets/css``

## Project architecture
```
html-css-metinet
      └───README.md
      │
      └───package-lock.json
      │
      └───package.json
      │
      └───Gruntfile.js
      │
      └───icons
      │   │   
      │   └───ALL icons *.svg
      │   
      └───scss
      │   │   
      │   └───ALL scss *.scss
      │
      └───icons
      │   │   
      │   └───ALL icons *.svg
      │     
      └───webroot
          │   
          └───assets
          │   │   
          │   └───css
          │   │   │   
          │   │   └───ALL css *.css
          │   │   
          │   └───fonts
          │   │   │   
          │   │   └───.ttf 
          │   │   └───.woff
          │   │
          │   └───img
          │   │   │   
          │   │   └───ALL images *.[webp,png,jpeg,jpg...]
          │   │   
          │   └───js
          │       │   
          │       └───ALL js *.js
          │   
          └───pages
              │
              └───ALL htlm *.html
```