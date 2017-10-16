const args = ['start'];
const options = { stdio: 'inherit', cwd: 'client', shell: true };
require('child_process').spawn('npm', args, options);