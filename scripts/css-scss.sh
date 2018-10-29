#!bin/bash

STYLES_DIR=./src/styles

# Converts Css to Scss

cp -r ${STYLES_DIR}/css ${STYLES_DIR}/scss;
for i in ${STYLES_DIR}/scss/**/*.css
do
  mv -- "$i" "${i/%.css/.scss}"
  mv -- "$i" "_${i}"
done
chmod -R 777  ${STYLES_DIR}/scss
