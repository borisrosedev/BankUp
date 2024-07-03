# Utiliser une image de base Ubuntu
FROM ubuntu:20.04

# Définir le mainteneur
LABEL maintainer="boris.rose.dev@gmail.com"

# Mettre à jour les paquets et installer les compilateurs pour C, C++, Go et Rust
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    build-essential \
    gcc \
    g++ \
    curl \
    wget \
    git \
    software-properties-common \
    && rm -rf /var/lib/apt/lists/*

# # Installer Golang
# RUN wget https://golang.org/dl/go1.18.3.linux-amd64.tar.gz && \
#     tar -C /usr/local -xzf go1.18.3.linux-amd64.tar.gz && \
#     rm go1.18.3.linux-amd64.tar.gz

# # Définir les variables d'environnement pour Go
# ENV PATH="/usr/local/go/bin:${PATH}"

# # Installer Rust
# RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
# ENV PATH="/root/.cargo/bin:${PATH}"

# Définir le répertoire de travail
WORKDIR /workspace

# Commande par défaut pour rester dans le shell
CMD ["/bin/bash"]