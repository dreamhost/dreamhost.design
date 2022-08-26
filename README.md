# DreamHost Design System

This is where we catalogue our design work at DreamHost, using the latest release of DreamHost.css.

Our documentation is built on Jekyll, and is viewable at http://dreamhost.design


## New .design Eclipse 
Uses node ver 8.9.1
Build on Jekyll x Liquid Templating + Gulp

## Running Locally
1. Ensure your using node ver 8.9.1
2. Install Ruby and Jekyll if you don't have it yet
3. (Windows Only) Be sure to add a .bat extension on gulp.js line 88 should be 
`const jekyll = child.spawn('jekyll.bat', ['build',`

4. `npm install`
5. (Windows Only) Comment out line 109 in node_modules\engine.io\build\socket.js
`//                this.pingIntervalTimer.refresh();`
6. `npm run dev`
7. open [http://localhost:7676] with your browser.


## Structure
New .design site has detached dreamhost-css located in `assets\dreamhost-css` it doesn't read from node_modules import. In this way we can edit the styles in dreamhost-css to adapt the new look of feel of Eclipse Style Guide. Instead of being overriden in every npm install with the old one. 

### Stylesheet
can be found in `assets\_scss_new` and `assets\css_new`
I've added command in gulp.js to just compile both the new and old per `npm run dev` execution
Please use .scss file to alter the styling not the css file. 

Feel free to alter the included detached dreamhost-css .scss `assets\dreamhost-css\src\scss` if you see it fit to do so.

Some values needs to been modified to fit the new design look and feel.

### New Pages in development
can be found in locally in `new` live link is [http://dreamhost.design/new/]

### Includes (navigation, footer, head,)
can be found in `_includes` 
the in-development ones are labeled with `_new` suffix before the file extension .html
Example:
```
_nav.html  < this is the old one 
_nav_new.html  < this is the new one, alter this one to change the footer in /new/
```
Please add a new navigation if the page is ready for review or being worked on.
This is one of the ways to check if a page is being coded.


### Layouts 
can be found in `_layouts`
the in-development ones are labeled with `_new` suffix before the file extension .html
Example:
```
app.html  < this is the old one
app_new.html  < this is the new one, alter this one to change the app html in /new/
```

### Lading page
Is build as a layout and can be found also in `_layouts/landing_new`
It's styling is in  `assets/_scss_new/style.css`

## Images and Downloads (for Illustrations, Icons, Logo, Mascot etc..)
New images and downloads folders are labeled with _new suffix.

Example:
```
Path: assets\images\
---
mascot < this is the old one
mascot_new  < this is the new one 
```

Same method applies for downloads folder.

Example:
```
Path: assets\downloads\
---
mascot < this is the old one
mascot_new  < this is the new one 
```

### Additional Memes 
added _data folder for json storage.
