import chalk from 'chalk';
import { YesNo } from '../enums';
import { FileManager } from '../utils';
import { ICommonAskerBaseAnswers } from '../interfaces';

abstract class GeneratorBase<T extends ICommonAskerBaseAnswers> {
    protected abstract getSpecificFolderName(): string;
    protected abstract getTemplate(options: T): string;

    private isSubfolderExists: boolean = true

    private getBasePath(): string {
        if (!FileManager.isExists('src')) {
            FileManager.createFolder('src');
        }
        return `src/${this.getSpecificFolderName()}`;
    }

    private checkSpecificFolder(): void {
        const basePath = this.getBasePath();
        if (!FileManager.isExists(`${basePath}/index.ts`)) {
            if (!FileManager.isExists(basePath)) {
                FileManager.createFolder(basePath);
            }
            FileManager.createFile(`${basePath}/index.ts`);
        }
    }

    private checkSubfolder(subfolderName: string): void {
        const basePath = this.getBasePath();
        if (!FileManager.isExists(`${basePath}/${subfolderName}/index.ts`)) {
            this.isSubfolderExists = false;
            if (!FileManager.isExists(`${basePath}/${subfolderName}`)) {
                FileManager.createFolder(`${basePath}/${subfolderName}`);
            }
            FileManager.createFile(`${basePath}/${subfolderName}/index.ts`);
        }
    }

    public generateFiles(options: T): void {
        const { className, fileName, needsSubfolder, subfolderName } = options;

        this.checkSpecificFolder();

        const basePath = this.getBasePath()
        let path = basePath;

        if (needsSubfolder === YesNo.Yes) {
            this.checkSubfolder(subfolderName);
            path += `/${subfolderName}`;
        }

        const template = this.getTemplate(options);

        FileManager.createFile(`${path}/${fileName}.ts`, template);
        FileManager.appendContent(`${path}/index.ts`, `export { default as ${className} } from './${fileName}';\n`);

        if (!this.isSubfolderExists) {
            FileManager.appendContent(`${basePath}/index.ts`, `export * from './${subfolderName}';\n`);
        }

        return console.log(chalk.green(`\n${className} extension is successfully created in './${path}/${fileName}.ts'.`));
    }
}

export default GeneratorBase;