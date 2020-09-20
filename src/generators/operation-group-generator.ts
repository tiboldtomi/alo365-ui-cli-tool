import GeneratorBase from './generator-base';
import { OperationGroupTemplate } from '../templates';
import { IOperationGroupAskerAnswers } from '../interfaces';

class OperationGroupGenerator extends GeneratorBase<IOperationGroupAskerAnswers> {
    protected getSpecificFolderName(): string {
        return 'operation-groups';
    }

    protected getTemplate({ className, order }: IOperationGroupAskerAnswers): string {
        return OperationGroupTemplate
            .replace(/{{ClassName}}/g, className)
            .replace(/{{Order}}/g, order.toString());
    }
}

export default (new OperationGroupGenerator);