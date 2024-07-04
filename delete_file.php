<?php
// Vérifier si un argument est passé en ligne de commande
if ($argc < 2) {
    echo "Usage: php delete_file.php <nom_fichier>\n";
    exit(1);
}

// Récupérer le nom du fichier à supprimer depuis les arguments de ligne de commande
$fileName = $argv[1];

// Vérifier si le fichier existe
if (!file_exists($fileName)) {
    echo "Le fichier '$fileName' n'existe pas.\n";
    exit(1);
}

// Tentative de suppression du fichier
if (unlink($fileName)) {
    echo "Le fichier '$fileName' a été supprimé avec succès.\n";
} else {
    echo "Erreur lors de la suppression du fichier '$fileName'. Veuillez vérifier les permissions.\n";
}
