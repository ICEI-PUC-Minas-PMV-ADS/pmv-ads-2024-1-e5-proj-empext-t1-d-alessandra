const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const startScript = () => {
  rl.question('Por favor, insira o caminho completo para o arquivo package.json: ', (input) => {
    const targetDirectory = input.trim();

    const packageJsonPath = path.join(targetDirectory, 'package.json');

    if (!fs.existsSync(packageJsonPath)) {
      console.error(`Erro: package.json não encontrado no diretório ${targetDirectory}`);
      rl.close();
      return;
    }

    console.log(`Caminho do package.json: ${packageJsonPath}`);

    // Ocultar o terminal
    hideTerminal();

    // Iniciar o processo
    startProcess(targetDirectory);
  });
};

const hideTerminal = () => {
  // Comando para ocultar o terminal em sistemas baseados em Unix (Linux e macOS)
  exec('xprop -id $(xprop -root _NET_ACTIVE_WINDOW | awk \'{print $NF}\') -f _NET_WM_STATE 32a -set _NET_WM_STATE _NET_WM_STATE_HIDDEN');
};

const startProcess = (targetDirectory) => {
  exec('npm start', { cwd: targetDirectory }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao executar o comando: ${error.message}`);
      process.exit(1); // Termina o processo com erro
      return;
    }
    if (stderr) {
      console.error(`Erro: ${stderr}`);
      process.exit(1); // Termina o processo com erro
      return;
    }
    console.log(`Saída: ${stdout}`);
    process.exit(0); // Termina o processo com sucesso
  });
};

startScript();
