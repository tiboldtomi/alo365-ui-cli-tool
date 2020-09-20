const ConditionTemplate = `import { OperationConditionBase, IOperationContext } from '@alo365/ui-operations';

class {{ClassName}} extends OperationConditionBase {
    public internalName: string = '{{ClassName}}';

    public async evaluate(context: IOperationContext): Promise<boolean> {
        /* -- Evaluate logic needs to be here -- */
        return true;
    }
}

export default {{ClassName}};`;

export default ConditionTemplate;