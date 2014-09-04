#!/bin/bash

# TODO: Handle git updating and jazz
# echo "Pulling latest changes..."
# if ! git pull --rebase --quiet
# then
#   echo "Changes upstream, attempting to consolidate..."
#   git stash
#   git pull --rebase
#   
#   if ! git stash pop --quiet
#   then echo "Could not consolidate changes. Check manually."
#   else "Consolidating was successful!"
#   fi
# fi
# 
# echo "Checking git status"
# if ! git status --quiet
# then
#   echo "Uncommitted files. Are you sure you want to deploy? [Y/n]"
# fi

# TODO: Upload CHANGED and NEW files only via ftp

# TODO: Script that deletes files from the web server that are no longer existent in the git repo