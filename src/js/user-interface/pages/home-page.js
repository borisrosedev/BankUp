// une fonction abrite tout ou partie de la logique qui permet de résoudre un problème , un problème cela peut être d'arriver à créer une page HTML avec du JavaScript

/* on va donc créer une fonction qui va être la fonction par défaut du fichier autrement dit quand vous allez utiliser le système des imports par exemple dans le fichier main.js 

vous allez pouvoir écrire la chose suivante 
tout au début du fichier , tout en haut 

import homePage from "./src/js/user-interface/pages/home-page.js"

*/

/* 


ici je définis une fonction anonyme (lambda) qui est l'export default de mon fichier 

Vous n'utilisez pas encore cet outil vous expliquez au système à votre machine comment il doit fonctionner mais aucun utilisation n'en est faite pour l'instant

*/
export default function(){

    // le mot clé return précède une valeur que l'on veut qu'une fonction retourne c'est-à-dire apporte à l'extérieur d'elle 

    // en effet tout ce qui est déclaré dans une fonction n'existe QUE dans cette fonction SAUF si c'est la valeur retournée par cette fonction


    // en l'occurrence on veut que la fonction retourne ce que l'on appelle une chaîne de caractères (string)

    // donc on va utiliser les backticks `` 
    return(
        `
            <!-- 
            
                la balise main représent le contenu principal d'une page autrement les choses importantes de la page se trouveront nécessairement entre les balises main ouvrante et fermante

                je sais que je vais vouloir mettre du style / designer la présentation au public / aux utilisateurs, de ce main 

                Donc je donne des classes au main 
                Je lui donne tout d'abord la classe main qui va être commune à toutes les main des pages de mon application et ensuite pour être plus spécifique vis-à-vis de ce même-ci je lui donne la classe home-page__main 
            
            -->
            <main class="main home-page__main">

                <!-- 
                
                    La balise p est celle utilisée quand on veut créer un paragraphe or un paragraphe a un margin par défaut 
                
                -->

                <!-- 
                
                    Si vous définissez 2 classes pour un élément HTML en l'occurrence main la deuxième prédomine toujours 
                
                -->
                <p>Vous êtes sur la page d'accueil de notre site</p>
            
            </main>
        
        
        `
    )



}