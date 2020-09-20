const FormValidationTemplate = `import { IFormData } from '@alo365/ui-components';
import { FormValidationBase } from '@alo365/ui-operations';

class {{ClassName}} extends FormValidationBase {
    public internalName: string = '{{ClassName}}';
    public errorMessage: string = '';

    public async validate(formData: IFormData): Promise<boolean> {
        /* -- Validation logic needs to be here -- */
        return true;
    }
}

export default {{ClassName}};`;

export default FormValidationTemplate;