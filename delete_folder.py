import os
import sys

# Vérification si un argument est passé en ligne de commande
if len(sys.argv) < 2:
    print("Usage: python delete_folder.py <nom_dossier>")
    sys.exit(1)

# Récupération du nom du dossier à supprimer depuis les arguments de ligne de commande
folder_name = sys.argv[1]

# Vérification si le dossier existe
if not os.path.exists(folder_name):
    print(f"Le dossier '{folder_name}' n'existe pas.")
    sys.exit(1)

# Tentative de suppression du dossier
try:
    os.rmdir(folder_name)
    print(f"Le dossier '{folder_name}' a été supprimé avec succès.")
except OSError as e:
    print(f"Erreur lors de la suppression du dossier '{folder_name}': {e}")
