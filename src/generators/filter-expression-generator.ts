import GeneratorBase from './generator-base';
import { FilterExpressionTemplate } from '../templates';
import { ICommonAskerBaseAnswers } from '../interfaces';

class FilterExpressionGenerator extends GeneratorBase<ICommonAskerBaseAnswers> {
    protected getSpecificFolderName(): string {
        return 'filter-expressions';
    }

    protected getTemplate({ className }: ICommonAskerBaseAnswers): string {
        return FilterExpressionTemplate.replace(/{{ClassName}}/g, className);
    }
}

export default (new FilterExpressionGenerator);