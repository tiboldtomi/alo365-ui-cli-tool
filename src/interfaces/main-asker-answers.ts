import IAskerBaseAnswers from './asker-base-answers';
import { ComponentType, FormExtensionType, RibbonExtensionType } from '../enums';

interface IMainAskerAnswers extends IAskerBaseAnswers {
    componentType: ComponentType;
    formExtensionType: FormExtensionType;
    ribbonExtensionType: RibbonExtensionType;
}

export default IMainAskerAnswers;