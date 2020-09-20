import { Questions } from '../constants';
import CommonAskerBase from './common-asker-base';
import { IOperationGroupAskerAnswers } from '../interfaces';

class OperationGroupAsker extends CommonAskerBase<IOperationGroupAskerAnswers> {
    protected getSpecificQuestions() {
        return [{
            type: 'input',
            name: 'order',
            message: Questions.OperationGroup.Order,
            filter: (value: string) => value.replace(/[^\d]/g, ''),
        }];
    }
}

export default (new OperationGroupAsker);