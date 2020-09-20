import chalk from 'chalk';

const showNotSupportedFeature = () => {
    console.log(chalk.yellowBright('\nSorry, but this feature is not supported yet! :('));
}

export default showNotSupportedFeature;