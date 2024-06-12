FROM ubuntu:22.04

# Actualiza e instala Git
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git

# Clona el repositorio MeliaQA desde GitHub
RUN git clone https://github.com/SantiFdezz/forbes-qa-cypress.git /forbes-qa-cypress

# Establece el directorio de trabajo
WORKDIR /forbes-qa-cypress

# Actualiza el repositorio local
RUN git pull

# Instala Node.js y npm
RUN apt-get install -y nodejs npm

# Instala las dependencias necesarias para Firefox y otras herramientas
RUN apt-get install -y \
    libgtk2.0-0 \
    libgtk-3-0 \
    libgbm-dev \
    libnotify-dev \
    libnss3 \
    libxss1 \
    libasound2 \
    libxtst6 \
    xauth \
    xvfb \
    wget

# Descarga e instala Firefox
RUN wget -O firefox.tar.bz2 "https://download.mozilla.org/?product=firefox-latest&os=linux64&lang=en-US" && \
    tar xjf firefox.tar.bz2 && \
    mv firefox /opt/firefox && \
    ln -s /opt/firefox/firefox /usr/bin/firefox && \
    rm  firefox.tar.bz2

# Instala las dependencias del proyectos
RUN npm install

# Comando predeterminado para ejecutar Cypress con Firefox
CMD ["npx", "cypress", "run", "--browser", "chrome"]