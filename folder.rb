if ARGV.empty?
    puts "Usage: ruby create_folder.rb <nom_dossier>"
    exit 1
  end

  folder_name = ARGV.first
  unless File.directory?(folder_name)
    Dir.mkdir(folder_name)
    puts "\nLe dossier '#{folder_name}' a été créé avec succès."
    puts "\n"
  else
    puts "\nLe dossier '#{folder_name}' existe déjà."
    puts "\n"
  end