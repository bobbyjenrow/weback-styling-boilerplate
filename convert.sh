#!bin/bash

STYLES_DIR=./src/styles
# Converts Scss to Css

cp -rf ${STYLES_DIR}/scss ${STYLES_DIR}/css

for i in ${STYLES_DIR}/css/**/*.scss
do
  mv -- "$i" "${i/%.scss/.css}"
  mv -- "$i" "${i#_}"
done

chmod -R 777  ${STYLES_DIR}/css

# Converts Css to Scss

cp -r ${STYLES_DIR}/css ${STYLES_DIR}/scss;
for i in ${STYLES_DIR}/scss/**/*.css
do
  mv -- "$i" "${i/%.css/.scss}"
  mv -- "$i" "_${i}"
done
chmod -R 777  ${STYLES_DIR}/scss
