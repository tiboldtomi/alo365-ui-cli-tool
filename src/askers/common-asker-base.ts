import { YesNo } from '../enums';
import AskerBase from './asker-base';
import { Questions } from '../constants';
import { convertKebabToPascalCase } from '../utils';
import { ICommonAskerBaseAnswers } from '../interfaces';

abstract class CommonAskerBase<T extends ICommonAskerBaseAnswers> extends AskerBase<T> {
    protected abstract getSpecificQuestions(): any[];

    protected getQuestions() {
        return [
            {
                type: 'input',
                name: 'fileName',
                message: Questions.FormExtension.FileName,
                validate: (value: string) => !!value || 'Please enter the name of file!',
            },
            {
                type: 'input',
                name: 'className',
                message: Questions.FormExtension.ClassName,
                validate: (value: string) => !!value || 'Please enter the name of class!',
                default: (prevAnswers: ICommonAskerBaseAnswers) => convertKebabToPascalCase(prevAnswers.fileName),
            },
            {
                type: 'list',
                name: 'needsSubfolder',
                choices: Object.keys(YesNo),
                message: Questions.FormExtension.NeedsSubfolder,
            },
            {
                type: 'input',
                name: 'subfolderName',
                message: Questions.FormExtension.SubfolderName,
                validate: (value: string) => !!value || 'Please enter the name of subfolder!',
                when: (prevAnswers: ICommonAskerBaseAnswers) => prevAnswers.needsSubfolder === YesNo.Yes,
            },
            ...this.getSpecificQuestions(),
        ];
    }
}

export default CommonAskerBase;