import { ValueCalculationTemplate } from '../templates';
import CalculationGeneratorBase from './calculation-generator-base';

class ValueCalculationGenerator extends CalculationGeneratorBase {
    protected getSpecificFolderName(): string {
        return 'value-calculations';
    }

    protected getRawTemplate(): string {
        return ValueCalculationTemplate;
    }
}

export default (new ValueCalculationGenerator);