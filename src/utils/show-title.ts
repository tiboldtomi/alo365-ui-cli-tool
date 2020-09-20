import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';

const showTitle = () => {
    clear();
    console.log(chalk.redBright(figlet.textSync('ALO365-UI CLI Tool')));
}

export default showTitle;