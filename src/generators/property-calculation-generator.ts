import { PropertyCalculationTemplate } from '../templates';
import CalculationGeneratorBase from './calculation-generator-base';

class PropertyCalculationGenerator extends CalculationGeneratorBase {
    protected getSpecificFolderName(): string {
        return 'property-calculations';
    }

    protected getRawTemplate(): string {
        return PropertyCalculationTemplate;
    }
}

export default (new PropertyCalculationGenerator);