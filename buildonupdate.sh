#!/bin/zsh
# Uses inotify to check for modify events and react to them by runing npm run build

while inotifywait -e modify ./**/*;
do
    npm run build;
done
