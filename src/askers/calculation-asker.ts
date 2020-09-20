import { Questions } from '../constants';
import CommonAskerBase from './common-asker-base';
import { ICalculationAskerAnswers } from '../interfaces';

class CalculationAsker extends CommonAskerBase<ICalculationAskerAnswers> {
    protected getSpecificQuestions() {
        return [{
            type: 'input',
            name: 'fieldsOnDepending',
            message: Questions.Calculation.FieldsOnDepending,
            filter: (value: string) => value.replace(/\s/g, '').split(',').filter(v => !!v).map(v => `'${v}'`),
        }];
    }
}

export default (new CalculationAsker);