const OperationGroupTemplate = `import { OperationGroupBase } from '@alo365/ui-operations';

class {{ClassName}} extends OperationGroupBase {
    public constructor() {
        super();
        this.registerOperationGroupConditions([]); // Register conditions here
    }

    public order: number = {{Order}};
    public displayName: string = '';
    public internalName: string = 'Ribbon.{{ClassName}}';

    public shortDescription: string = null; // There is not in use
}

export default {{ClassName}};`;

export default OperationGroupTemplate;