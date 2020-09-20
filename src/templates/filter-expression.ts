const FilterExpressionTemplate = `import { FilterExpressionBase, IFilterExpressionContext } from '@alo365/ui-operations';

class {{ClassName}} extends FilterExpressionBase {
    public internalName: string = '{{ClassName}}';

    public async getExpression(context: IFilterExpressionContext): Promise<string> {
        return \`
            <View>
                <Query>
                    <Where>
                        /* -- Your query needs to be here -- */
                    </Where>
                </Query>
            </View>
        \`;
    }
}

export default {{ClassName}};`;

export default FilterExpressionTemplate;