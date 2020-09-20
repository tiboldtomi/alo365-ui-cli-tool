const PropertyCalculationTemplate = `import { IFormData } from '@alo365/ui-components';
import { PropertyCalculationBase, IFieldProperties } from '@alo365/ui-operations';

class {{ClassName}} extends PropertyCalculationBase {
    public internalName: string = '{{ClassName}}';
    public fieldInternalNames: string[] = [{{FieldsOnDepending}}];

    public async calculate(formData: IFormData): Promise<Partial<IFieldProperties>> {
        /* -- Calculation logic needs to be here -- */
        return null;
    }
}

export default {{ClassName}};`;

export default PropertyCalculationTemplate;