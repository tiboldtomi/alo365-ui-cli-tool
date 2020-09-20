import { prompt } from 'inquirer';
import { IAskerBaseAnswers } from '../interfaces';

abstract class AskerBase<T extends IAskerBaseAnswers> {
    protected abstract getQuestions(): any[];

    public async ask(): Promise<T> {
        const qs = this.getQuestions();
        return prompt(qs) as unknown as T;
    }
}

export default AskerBase;