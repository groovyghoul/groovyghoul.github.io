---
layout: post
title:  "Update Typescript version in Visual Studio Code"
date:   2017-02-22 23:45:50 -0400
categories: visualstudiocode typescript angular
---

Typescript v2.2 was released today and it offers something that I was waiting for...generate members for interface.

Steps are pretty easy. Here we go.

* Download and install the new version of `Typescript`
<br />`npm install -g typescript`
* Open Visual Studio Code and update the setting `typescript.tsdk` with the following:
<br />`"typescript.tsdk" : "{your_path_to_global_npm}\\typescript\\lib"`
<br />Note: you can get your npm root path by typing `npm root -g`
* open a Typescript file in Visual Studio Code and you should now see `2.2.1` in the status bar

You can find the release notes for Typescript v2.2 [here](https://blogs.msdn.microsoft.com/typescript/2017/02/22/announcing-typescript-2-2/)

Enjoy.
