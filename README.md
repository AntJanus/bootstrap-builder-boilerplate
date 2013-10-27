Bootstrap Builder Boilerplate
========================

![dependency overview](https://david-dm.org/antjanus/bootstrap-builder-boilerplate.png)


Installing
===================

Install the dependencies for running the various tasks to prebuild the environment:

* bower
* grunt / grunt-cli (thus Node)
* jekyll

Run `bower install`, `npm install`, and run `grunt build` to install bootstrap and compile your less files.

To start working on a project and enjoying live reload or other similar tasks, run `grunt work`.

Structure
====================

* _includes - files for Jekyll (documentation)
* _layouts - layouts for Jekyll (documentation)
* dist - distribution, final files
* docs-assets - assets for documentation
* images - images
* js - js that gets compiled into dist
* less - less files that get compiled into dist
* templates - templates for bootstrap theme
* \_gh\_pages (part of build process) - Jekyll compiled docs
* bower_components (part of install process) - installed components
* node_modules (part of install process) - grunt + other npm modules meant to build/install everything

The project features two types of bootstrap theme previews. One of them is via the docs.

Basically, the bootstrap docs include ALL of the elements and how they look and how they are to be used. This is a great place to preview separate elements and how they interact. From buttons to tables. Note that extra styles are applied to properly "sandbox" the bootstrap theme in the docs. It's what prevents navigation previews from overlapping the docs navigation and from other elements doing all kinds of weird things.

The templates folder includes specific templates you want the bootstrap theme to use and thus you can preview locally (and via github.io if you use github) how your theme will look outside of docs.

Sample Workflow
====================

Sometimes it's difficult to understand the workflow of a project especially when it seems like it's meant to fulfill the author's needs. Which in this case, it's true. But here's my workflow:

1. clone the repo
2. install the repo (`bower install`, `npm install`, `grunt build`)
3. initialize `grunt work`
4. Start working on bootstrap-theme.less, adjusting what needs to be adjusted.
5. load up localhost:9001 to see the jekyll output.
6. check the mock-docs to see how individual elements end up looking (button section for buttons, etc)
6. code sample templates specific to how I want to use my bootstrap theme
7. adjust bootstrap-theme.less to fit my vision
8. check between docs and templates to see consisency.

Grunt will:

* compile and minify any less files in the /less folder. Always  keep the `bootstrap-theme.less` file.
* start jekyll server and compile bootstrap's mock documentation. This will give you access on <localhost:9001>
* copy a fresh copy of bootstrap whenever you use `grunt work` or `grunt build` so that whenever bootstrap updates, you can use `bower update` and get any bugfixes. Unfortunately, this doesn't apply to the mock documentation
* delete the /dist folder whenever `grunt work` or `grunt build` commands are run. These commands will also freshly rebuild it.
* stop jekyll and the watch process when you stop it. Control+C will stop everything.

The Why
===================

I've made some important decisions when building this project. Here's what I did and why:

* **Why is Bootstrap loaded separately? Should my theme building not take place with the variables.less file and the rest of the app?** Basically, theme building should be "additive". Meaning that instead of messing with the core framework, it should be treated as untouchable. Most Bootstrap markets, like [wrapbootstrap](http://antjanus.com/out/wrapbootstrap), accept only additive-type themes. It's mostly so that when Bootstrap updates, you can still use the theme and don't have to rebuild it and try to merge changes together.
* **Why do you constantly rebuild the /dist directory? Why is there a separate directory for those files?** The /dist directory has to always include up to date Bootstrap and other libraries (will include jQuery soon). Any changes done in the /dist directory are meant to be discarded. It's the "clean" directory which people can download your theme from. Your less files, thus, will constantly be up to date as well. Think of it as the "final package" that you give to people. The rest of the workspace is meant to be just that: workspace.
* **Err..why do you have bootstrap documentation? And why do you keep the Bootstrap docs CSS? Shouldn't it run only with base Bootstrap and my theme?** Actually no, you'll notice that not even Bootstrap uses its vanilla library. That's because the docs CSS overrides some Bootstrap styles in order to showcase them. It's why fixed menus don't jump to the top of the page and why some buttons glow or have an outline. The Bootstrap Docs are the best way to showcase and test individual components.
* **Why the templates then? I can test everything in the docs!** You're not required to use the templates but again, Bootstrap markets often include template files with theme libraries in order to showcase the theme in the best light. It also allows you to prototype your application quickly with a given look (when building the theme for something of yours and not to sell). Not only that but if you ever use any additional classes, the templates will be able to showcase these.

Log
==========

* v0.0.3 - Grunt watch, jekyll, and other tasks
* v0.0.2 - Documentation preview, grunt minification and compilation
* v0.0.1 - Boilerplate for starting bootstrap themes (soon to be ripped out into its own repo)