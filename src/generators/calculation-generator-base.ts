import GeneratorBase from './generator-base';
import { ICalculationAskerAnswers } from '../interfaces';

abstract class CalculationGeneratorBase extends GeneratorBase<ICalculationAskerAnswers> {
    protected abstract getRawTemplate(): string;

    protected getTemplate({ className, fieldsOnDepending }: ICalculationAskerAnswers): string {
        return this.getRawTemplate()
            .replace(/{{ClassName}}/g, className)
            .replace(/{{FieldsOnDepending}}/g, fieldsOnDepending.join(', '));
    }
}

export default CalculationGeneratorBase;