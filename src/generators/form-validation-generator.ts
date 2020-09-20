import GeneratorBase from './generator-base';
import { FormValidationTemplate } from '../templates';
import { ICommonAskerBaseAnswers } from '../interfaces';

class FormValidationGenerator extends GeneratorBase<ICommonAskerBaseAnswers> {
    protected getSpecificFolderName(): string {
        return 'form-validations';
    }

    protected getTemplate({ className }: ICommonAskerBaseAnswers): string {
        return FormValidationTemplate.replace(/{{ClassName}}/g, className);
    }
}

export default (new FormValidationGenerator);