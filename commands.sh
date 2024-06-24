#!/bin/bash

install_create_git_repo_and_link_to_remote(){
    git init 
    touch .gitignore && echo "node_modules" >> .gitignore
    git remote add origin url_remote_repo_on_github
    git remote -v 
}

send_data_to_remote_repo(){
    git status #connaître l'état actuel de votre dépôit local
    git add . #indexe toutes les modifications actuelles  
}
