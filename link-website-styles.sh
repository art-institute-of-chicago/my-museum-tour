#! /bin/bash

# Run this from the root of the my-museum-tour project to symlink museum
# website styles with this project. A few assumptions are made here:
#
#  1. You have the website and this package in neighboring folders
#  2. You have run `npm run dev` in the website project to compile styles
#  3. You are _not_ running the with the `USE_COMPILED_REVASSETS` flag
#     turned on.

mkdir dist/scripts
mkdir dist/styles

ln -s ../../../website/public/dist/scripts/app.js dist/scripts/app.js
ln -s ../../../website/public/dist/scripts/head.js dist/scripts/head.js

ln -s ../../../website/public/dist/styles/setup.css dist/styles/setup.css
ln -s ../../../website/public/dist/styles/app.css dist/styles/app.css
ln -s ../../../website/public/dist/styles/print.css dist/styles/print.css
