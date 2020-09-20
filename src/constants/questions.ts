const Questions = {
    Main: {
        ComponentType: 'What type of ALO365 component do you want to expand?',
        FormExtensionType: 'What type of form extension do you want to create?',
        RibbonExtensionType: 'What type of Ribbon extension do you want to create?',
    },
    FormExtension: {
        NeedsSubfolder: 'Do you want to put in a subfolder?',
        ClassName: 'What is the name of class? (in PascalCase style)',
        SubfolderName: 'What is the name of subfolder? (in kebab-case style)',
        FileName: 'What is the name of file? (without extension, in kebab-case style)',
    },
    Calculation: {
        FieldsOnDepending: 'What fields does it depending? (eq.: TestField1, TestField2) (optional)'
    },
    OperationGroup: {
        Order: 'What is the order of new group?',
    },
}

export default Questions;