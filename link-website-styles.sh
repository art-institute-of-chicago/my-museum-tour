#! /bin/bash

# Run this from the root of the my-museum-tour project to symlink museum
# website styles with this project. Use the -l|--link option to set the
# directory of website project, otherwise the `website/` directory will be used.
#
# A few assumptions are made here:
#
#  1. You have the website and this package in neighboring folders
#  2. You have run `npm run dev` in the website project to compile styles
#  3. You are _not_ running the with the `USE_COMPILED_REVASSETS` flag
#     turned on.

LINK_DIR="website/"  # Default website project directory

while :; do
    case $1 in
        -l|--link)
            if [[ $2 ]]; then
                LINK_DIR="$2"
                shift 2
            fi
            ;;
        *)
            break
    esac
done

# Add a trailing slash if absent
if [[ $LINK_DIR != *"/" ]]; then
    LINK_DIR="$LINK_DIR"/
fi

mkdir dist/icons
mkdir dist/scripts
mkdir dist/styles

ln -sv ../../../"$LINK_DIR"public/dist/icons/icons.svg dist/icons/icons.svg

ln -sv ../../../"$LINK_DIR"public/dist/scripts/app.js dist/scripts/app.js
ln -sv ../../../"$LINK_DIR"public/dist/scripts/head.js dist/scripts/head.js

ln -sv ../../../"$LINK_DIR"public/dist/styles/setup.css dist/styles/setup.css
ln -sv ../../../"$LINK_DIR"public/dist/styles/app.css dist/styles/app.css
ln -sv ../../../"$LINK_DIR"public/dist/styles/print.css dist/styles/print.css
