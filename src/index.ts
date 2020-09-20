#!/usr/bin/env node

import { showNotSupportedFeature, showTitle } from './utils';
import { ComponentType, FormExtensionType, RibbonExtensionType } from './enums';
import { MainAsker, CalculationAsker, BasicExtensionAsker, OperationGroupAsker } from './askers';
import {
    FormValidationGenerator, ConditionGenerator, OperationGroupGenerator,
    PropertyCalculationGenerator, ValueCalculationGenerator, FilterExpressionGenerator,
} from './generators';

(async () => {
    showTitle();
    const { componentType, formExtensionType, ribbonExtensionType } = await MainAsker.ask();

    if (componentType === ComponentType.Form) {
        if ([FormExtensionType.PropertyCalculation, FormExtensionType.ValueCalculation].includes(formExtensionType)) {
            const answers = await CalculationAsker.ask();
            if (formExtensionType === FormExtensionType.ValueCalculation) {
                ValueCalculationGenerator.generateFiles(answers);
            }
            else {
                PropertyCalculationGenerator.generateFiles(answers);
            }
        }
        else {
            const answers = await BasicExtensionAsker.ask();
            if (formExtensionType === FormExtensionType.FilterExpression) {
                FilterExpressionGenerator.generateFiles(answers);
            }
            else {
                FormValidationGenerator.generateFiles(answers);
            }
        }
    }
    else if (componentType === ComponentType.Ribbon) {
        if (ribbonExtensionType === RibbonExtensionType.Operation) {
            showNotSupportedFeature();
        }
        else if (ribbonExtensionType === RibbonExtensionType.OperationGroup) {
            const answers = await OperationGroupAsker.ask();
            OperationGroupGenerator.generateFiles(answers);
        }
        else {
            const answers = await BasicExtensionAsker.ask();
            ConditionGenerator.generateFiles(answers);
        }
    }
    else {
        throw new Error(`Error! Unhandled component type: ${componentType}.`);
    }
})();