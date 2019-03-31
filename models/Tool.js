export default class Tool {
  constructor(name, description, path) {
    this.name = name;
    this.description = description;
    this.path = path;
  }

  keyName() {
    return this.name.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
  }

  static allTools = {
    spaceRemover: new Tool('Space Remover', 'Remove all spaces in a string of text', '/string/space-remover'),
    extraSpaceRemover: new Tool('Extra Space Remover', 'Remove all extra spaces in a string of text', '/string/extra-space-remover'),
    dashRemover: new Tool('Dash Remover', 'Remove all dashes in a string of text', '/string/dash-remover'),
    underscoreRemover: new Tool('Underscore Remover', 'Remove all underscores in a string of text', '/string/underscore-remover'),
    duplicateLineRemover: new Tool('Duplicate Line Remover', 'Remove all duplicate lines in a string of text', '/string/duplicate-line-remover'),
    emptyLineRemover: new Tool('Empty Line Remover', 'Remove all empty lines in a string of text', '/string/empty-line-remover'),
    lineBreakRemover: new Tool('Line Break Remover', 'Remove all line breaks in a string of text', '/string/line-break-remover'),
    camelCaseGenerator: new Tool('Camel Case Generator', 'Generate camelCase from a string of text', '/string/camel-case-generator'),
    snakeCaseGenerator: new Tool('Snake Case Generator', 'Generate snake_case from a string of text', '/string/snake-case-generator'),
    kebabCaseGenerator: new Tool('Kebab Case Generator', 'Generate kebab-case from a string of text', '/string/kebab-case-generator'),
    snakeCaseToCamelCaseConverter: new Tool('Snake Case to Camel Case Converter', 'Convert snake_case to camelCase', '/string/snake-case-to-camel-case-converter'),
    camelCaseToSnakeCaseConverter: new Tool('Camel Case to Snake Case Converter', 'Convert camelCase to snake_case', '/string/camel-case-to-snake-case-converter'),
    stringReverser: new Tool('String Reverser', 'Reverse the characters in a string of text', '/string/string-reverser'),
    wordReverser: new Tool('Word Reverser', 'Reverse the words in a string text', '/string/word-reverser'),
    wordSorter: new Tool('Word Sorter', 'Sort the words in a string text', '/string/word-sorter'),
    textLineReverser: new Tool('Text Line Reverser', 'Reverse the lines in a string text', '/string/text-line-reverser'),
    textLineSorter: new Tool('Text Line Sorter', 'Sort the lines in a string text', '/string/text-line-sorter'),
  };

  static featuredTools = [
    Tool.allTools.spaceRemover,
    Tool.allTools.camelCaseGenerator,
    Tool.allTools.snakeCaseToCamelCaseConverter,
    Tool.allTools.stringReverser,
    Tool.allTools.textLineSorter,
  ];

  static recommendedTools = {
    spaceRemover: [Tool.allTools.extraSpaceRemover, Tool.allTools.dashRemover, Tool.allTools.underscoreRemover],
    extraSpaceRemover: [Tool.allTools.spaceRemover],
    dashRemover: [Tool.allTools.spaceRemover, Tool.allTools.underscoreRemover],
    underscoreRemover: [Tool.allTools.spaceRemover, Tool.allTools.dashRemover],
    duplicateLineRemover: [Tool.allTools.extraSpaceRemover, Tool.allTools.lineBreakRemover],
    emptyLineRemover: [Tool.allTools.extraSpaceRemover, Tool.allTools.duplicateLineRemover],
    lineBreakRemover: [Tool.allTools.duplicateLineRemover, Tool.allTools.extraSpaceRemover],
    camelCaseGenerator: [],
    snakeCaseGenerator: [],
    kebabCaseGenerator: [],
    snakeCaseToCamelCaseConverter: [Tool.allTools.camelCaseToSnakeCaseConverter],
    camelCaseToSnakeCaseConverter: [Tool.allTools.snakeCaseToCamelCaseConverter],
    stringReverser: [Tool.allTools.wordReverser],
    wordReverser: [Tool.allTools.wordSorter, Tool.allTools.stringReverser],
    wordSorter: [Tool.allTools.wordReverser, Tool.allTools.textLineSorter],
    textLineReverser: [Tool.allTools.textLineSorter],
    textLineSorter: [Tool.allTools.textLineReverser],
  };
}