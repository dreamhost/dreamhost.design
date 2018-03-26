## Distributing the framework
We made a Pull Request and got some code merged. Great! Now what?

### Create new version
We want to make a new commit updating package.json to the newest version and check in the compiled CSS / JS.
`npm version <newversion>` where `newversion = major | minor | patch`

See [Semantic Versioning](http://semver.org) for what major, minor, and patch mean.

For instance, for a version that only contains bug fixes, we run `npm version patch` to bump the version, and commit the changed and new files.

Create a Pull Request of our new version for review.

### Publish new version
Now that we have a new version of the framework merged, we want to publish that version for all the world to use. Or really just us. `npm publish` will do the trick. If you don't have access to publish, ask a [collaborator on the NPM package](https://www.npmjs.com/package/dreamhost-css/access) to get you access

## Updating each app
Each DreamHost app uses the framework either as a dependency, or as a devDependency in its `package.json`.

For dreamhost.com, to update the framework to the latest version, simply run `npm install dreamhost-css@latest --save-dev` and commit the changes. `package.json` should update and we're committing some of the framework files to the repo until our build process is updated.

For all other repositories, to update the `package.json` to the current latest version of the framework that has been published to NPM:
`npm install dreamhost-css@latest --save` if dependency
`npm install dreamhost-css@latest --save-dev` if devDependency

Until the framework is stable, once the package has been installed and updated, we need to compile CSS and check the app to see if anything has changed and should be fixed. Once we get to a stable version, we should only need to take this safety precaution on major releases.
