import { YesNo } from '../enums';
import IAskerBaseAnswers from './asker-base-answers';

interface ICommonAskerBaseAnswers extends IAskerBaseAnswers {
    fileName: string;
    className: string;
    subfolderName: string;
    needsSubfolder: YesNo;
}

export default ICommonAskerBaseAnswers;