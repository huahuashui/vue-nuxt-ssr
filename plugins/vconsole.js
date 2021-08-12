import VConsole from 'vconsole';

const vConsole = (process.env.MODE_ENV === 'local' || process.env.MODE_ENV === 'dev' || process.env.MODE_ENV === 'test') ? new VConsole() : '';
export default vConsole;
