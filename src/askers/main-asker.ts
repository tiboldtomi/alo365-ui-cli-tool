import AskerBase from './asker-base';
import { Questions } from '../constants';
import { IMainAskerAnswers } from '../interfaces';
import { ComponentType, FormExtensionType, RibbonExtensionType } from '../enums';

class MainAsker extends AskerBase<IMainAskerAnswers> {
    protected getQuestions() {
        return [
            {
                type: 'list',
                name: 'componentType',
                choices: Object.keys(ComponentType),
                message: Questions.Main.ComponentType,
            },
            {
                type: 'list',
                name: 'ribbonExtensionType',
                choices: Object.keys(RibbonExtensionType),
                message: Questions.Main.RibbonExtensionType,
                when: ({ componentType }: IMainAskerAnswers) => componentType === ComponentType.Ribbon,
            },
            {
                type: 'list',
                name: 'formExtensionType',
                choices: Object.keys(FormExtensionType),
                message: Questions.Main.FormExtensionType,
                when: ({ componentType }: IMainAskerAnswers) => componentType === ComponentType.Form,
            }
        ];
    }
}

export default new (MainAsker);