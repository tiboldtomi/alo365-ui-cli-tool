import fs from 'fs';
import path from 'path';

class FileManager {
    public getCurrentDirectoryBase(): string {
        return path.basename(process.cwd());
    }

    public isExists(filePath: string): boolean {
        return fs.existsSync(filePath);
    }

    public createFolder(folderName: string): void {
        return fs.mkdirSync(folderName);
    }

    public createFile(fileName: string, content: string = ''): void {
        return fs.writeFileSync(fileName, content);
    }

    public readFile(filePath: string): Buffer {
        return fs.readFileSync(filePath);
    }

    public appendContent(filePath: string, content: string = ''): void {
        return fs.appendFileSync(filePath, content);
    }
}

export default (new FileManager);