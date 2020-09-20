import GeneratorBase from './generator-base';
import { ConditionTemplate } from '../templates';
import { ICommonAskerBaseAnswers } from '../interfaces';

class ConditionGenerator extends GeneratorBase<ICommonAskerBaseAnswers> {
    protected getSpecificFolderName(): string {
        return 'conditions';
    }

    protected getTemplate({ className }: ICommonAskerBaseAnswers): string {
        return ConditionTemplate.replace(/{{ClassName}}/g, className);
    }
}

export default (new ConditionGenerator);