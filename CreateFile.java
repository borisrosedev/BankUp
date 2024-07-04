import java.io.File;
import java.io.IOException;

public class CreateFile {
    public static void main(String[] args) {
        if (args.length == 0) {
            System.out.println("Usage: java CreateFileFromArgument <nom_fichier>");
            System.exit(1);
        }
        String fileName = args[0];
        File file = new File(fileName);

        try {
            if (file.createNewFile()) {
                System.out.println("Le fichier a été créé avec succès : " + file.getAbsolutePath());
            } else {
                System.out.println("Le fichier existe déjà.");
            }
        } catch (IOException e) {
            System.out.println("Erreur lors de la création du fichier : " + e.getMessage());
        }
    }
}
