const ValueCalculationTemplate = `import { IFormData } from '@alo365/ui-components';
import { ValueCalculationBase } from '@alo365/ui-operations';

class {{ClassName}} extends ValueCalculationBase {
    public internalName: string = '{{ClassName}}';
    public fieldInternalNames: string[] = [{{FieldsOnDepending}}];

    public async calculate(formData: IFormData): Promise<string | number> {
        /* -- Calculation logic needs to be here -- */
        return null;
    }
}

export default {{ClassName}};`;

export default ValueCalculationTemplate;