#!/usr/bin/env sh
echo "Running"
# abort on errors
set -e

# build
npm run build

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

git add ./dist
git commit -m 'deploy'
git push
