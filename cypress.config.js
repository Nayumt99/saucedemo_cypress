const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementação de eventos do Node, se necessário
    },
    video: true, // Gravação de vídeo ativada
    videosFolder: "cypress/videos", // Pasta onde os vídeos serão salvos
    screenshotOnRunFailure: true, // Captura screenshots automaticamente em falhas
    screenshotsFolder: "cypress/screenshots", // Pasta onde os screenshots serão salvos
  },
});
