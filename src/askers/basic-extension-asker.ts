import CommonAskerBase from './common-asker-base';
import { IBasicExtensionAskerAnswers } from '../interfaces';

class BasicExtensionAsker extends CommonAskerBase<IBasicExtensionAskerAnswers> {
    protected getSpecificQuestions() {
        return [];
    }
}

export default (new BasicExtensionAsker);