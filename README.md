# marvel-prototype
Random testing with Marvel's API

### First
Install `yo`, `grunt-cli`, `bower`, `generator-angular-require` and `generator-karma-require`

### may need to
* npm install
* bower install
* packages are setup you should be good shutup
* maybe something weird happens with compass / sass
  * sudo gem install sass
  * sudo gem install compass

### then
`grunt build` must be run before anything else due to dependency population in the RequireJS config and the like (this will be fixed in a future version).

Run `grunt` for building and `grunt serve` for preview

### HOW TO USE THIS SHIT

### Dev Shortcuts

* [angular-require:controller](#controller)
* [angular-require:directive](#directive)
* [angular-require:filter](#filter)
* [angular-require:route](#route)
* [angular-require:service](#service)
* [angular-require:provider](#service)
* [angular-require:factory](#service)
* [angular-require:value](#service)
* [angular-require:constant](#service)
* [angular-require:decorator](#decorator)
* [angular-require:view](#view)

#### Route
Generates a controller and view, and configures a route in `app/scripts/app.js` connecting them.

Example:
```bash
yo angular-require:route myroute
```

Produces `app/scripts/controllers/myroute.js`:
```javascript
define(['angular'], function (angular) {
  'use strict';
  angular.module('myApp.controllers.myrouteCtrl', [])
    .controller('myrouteCtrl', function ($scope) {
      // ...
    });
});
```

Produces `app/views/myroute.html`:
```html
<p>This is the myroute view</p>
```

**Explicitly provide route URI**

Example:
```bash
yo angular:route myRoute --uri=my/route
```
Produces controller and view as above and adds a route to `app/scripts/app.js` with URI `my/route`

### Controller
Generates a controller in `app/scripts/controllers`.

Example:
```bash
yo angular-require:controller user
```

Produces `app/scripts/controllers/user.js`:
```javascript
define(['angular'], function (angular) {
  'use strict';
  angular.module('myApp.controllers.userCtrl', [])
    .controller('userCtrl', function ($scope) {
      // ...
    });
});
```
#### Directive
Generates a directive in `app/scripts/directives`.

Example:
```bash
yo angular-require:directive myDirective
```

Produces `app/scripts/directives/myDirective.js`:
```javascript
define(['angular'], function (angular) {
  'use strict';
  angular.module('myApp.directives.myDirective', [])
    .directive('myDirective', function () {
      return {
        template: '<div></div>',
        restrict: 'E',
        link: function postLink(scope, element, attrs) {
          element.text('this is the myDirective directive');
        }
      };
    });
  });
```

#### Filter
Generates a filter in `app/scripts/filters`.

Example:
```bash
yo angular-require:filter myFilter
```

Produces `app/scripts/filters/myFilter.js`:
```javascript
define(['angular'], function (angular) {
  'use strict';
  angular.module('myApp.filters.myFilter', [])
    .filter('myFilter', function () {
      return function (input) {
        return 'myFilter filter:' + input;
      };
    });
});
```

#### View
Generates an HTML view file in `app/views`.

Example:
```bash
yo angular-require:view user
```

Produces `app/views/user.html`:
```html
<p>This is the user view</p>
```

#### Service
Generates an AngularJS service.

Example:
```bash
yo angular-require:service myService
```

Produces `app/scripts/services/myService.js`:
```javascript
define(['angular'], function (angular) {
  'use strict';
  angular.module('myApp.services.myService', [])
    .service('myService', function () {
      // ...
    });
});
```

You can also do `yo angular:factory`, `yo angular:provider`, `yo angular:value`, and `yo angular:constant` for other types of services.

#### Decorator
Generates an AngularJS service decorator.

Example:
```bash
yo angular-require:decorator serviceName
```

Produces `app/scripts/decorators/serviceNameDecorator.js`:
```javascript
define(['angular'], function (angular) {
  'use strict';
  angular.module('myApp.decorators.serviceName', [])
    .config(function ($provide) {
      $provide.decorator('serviceName', function ($delegate) {
        // ...
        return $delegate;
      });
    });
});
```

## Options
In general, these options can be applied to any generator, though they only affect generators that produce scripts.

#### CoffeeScript
CoffeeScript is not supported at this time. Sorry. We'll take a look at CoffeeScript possibly being added at a later date.

#### What happened to the Minification Safe option?

**tl;dr**: You don't need to write annotated code as the build step will handle it for you.

By default, generators produce unannotated code. Without annotations, AngularJS's DI system will break when minified. Typically, these annotations that make minification safe are added automatically at build-time, after application files are concatenated, but before they are minified. The annotations are important because minified code will rename variables, making it impossible for AngularJS to infer module names based solely on function parameters.

The recommended build process uses `ng-annotate`, a tool that automatically adds these annotations. However, if you'd rather not use it, you have to add these annotations manually yourself. Why would you do that though? If you find a bug in the annotated code, please file an issue at [ng-annotate](https://github.com/olov/ng-annotate/issues).

## Bower Components

The following packages are always installed by the [app](#app) generator:

* angular
* angular-mocks

The following additional modules are available as components on bower, and installable via `bower install`:

* angular-animate
* angular-aria
* angular-cookies
* angular-loader
* angular-messages
* angular-resource
* angular-sanitize

All of these can be updated with `bower update` as new versions of AngularJS are released.

As part of the `grunt build` command, bower dependencies are inserted into the `bootstrap.js` file using the `bower:app` task specified in the Gruntfile. The `test-bootstrap.js` file is taken care of by keeping it's dependencies in line with `bootstrap.js`. This is handled by the `replace:test` task within the Gruntfile.

`json3` and `es5-shim` have been removed as Angular 1.3 has dropped IE8 support and that is the last version that needed these shims. If you still require these, you can include them with: `bower install --save json3 es5-shim`. `wiredep` should add them to your index.html file but if not you can manually add them.

## Configuration
Yeoman generated projects can be further tweaked according to your needs by modifying project files appropriately.

### Output
You can change the `app` directory by adding a `appPath` property to `bower.json`. For instance, if you wanted to easily integrate with Express.js, you could add the following:

```json
{
  "name": "yo-test",
  "version": "0.0.0",
  ...
  "appPath": "public"
}

```
This will cause Yeoman-generated client-side files to be placed in `public`.

Note that you can also achieve the same results by adding an `--appPath` option when starting generator:
```bash
yo angular [app-name] --appPath=public
```

## Testing

Running `grunt test` will run the unit tests with karma.

## Contribute

See the [contributing docs](https://github.com/yeoman/yeoman/blob/master/contributing.md)

When submitting an issue, please follow the [guidelines](https://github.com/yeoman/yeoman/blob/master/contributing.md#issue-submission). Especially important is to make sure Yeoman is up-to-date, and providing the command or commands that cause the issue.

When submitting a PR, make sure that the commit messages match the [AngularJS conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/).

When submitting a bugfix, write a test that exposes the bug and fails before applying your fix. Submit the test alongside the fix.

When submitting a new feature, add tests that cover the feature.

## Changelog

Recent changes can be viewed on Github on the [Releases Page](https://github.com/aaronallport/generator-angular-require/releases)

## Thank you aaronallport and his yo generator [generator-angular-require](https://github.com/aaronallport/generator-angular-require)

## Links

### Project Links

* [API Docs](http://developer.marvel.com/docs#!/public/getCreatorCollection_get_0)
* [Trellololo](https://trello.com/b/QLjyku14/marvel-comics)

### Reference Links

* [Sample Character data: Wolverine](http://cl.ly/code/0L3Q0Y210L3H)
* [Marvel.com Characters: Wolverine](http://marvel.com/characters/66/wolverine?utm_campaign=apiRef&utm_source=133a84db489e55bedd245914e77dee6f#sthash.tNwSqJeX.dpuf)
* [Marvel.com Universe: Wolverine](http://marvel.com/universe/Wolverine_(James_Howlett)?utm_campaign=apiRef&utm_source=133a84db489e55bedd245914e77dee6f#sthash.60iSJVDe.dpuf)
* [Marvel.com Wikia: Wolverine](http://marvel.com/universe/Wolverine_(James_Howlett)?utm_campaign=apiRef&utm_source=133a84db489e55bedd245914e77dee6f#sthash.tNwSqJeX.dpuf)