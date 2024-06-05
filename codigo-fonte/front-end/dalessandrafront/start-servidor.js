const { exec } = require('child_process');
const path = require('path');

// Caminho para a pasta do projeto React
const targetDirectory = __dirname; // Substitua pelo nome da pasta do seu projeto

// Executa o comando npm start na pasta especificada
exec('npm start', { cwd: targetDirectory }, (error, stdout, stderr) => {
  if (error) {
    console.error(`Erro ao executar o comando: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Erro: ${stderr}`);
    return;
  }
  console.log(`Saída: ${stdout}`);
});
