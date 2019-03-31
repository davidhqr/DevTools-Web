export default class Tool {
  constructor(name, description, path, relatedTools) {
    this.name = name;
    this.description = description;
    this.path = path;
    this.relatedTools = relatedTools;
  }

  keyName() {
    return this.name.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
  }

  static allTools = {
    spaceRemover: new Tool('Space Remover', 'Remove all spaces in a string of text', '/string/space-remover', null),
    dashRemover: new Tool('Dash Remover', 'Remove all dashes in a string of text', '/string/dash-remover', null),
    underscoreRemover: new Tool('Underscore Remover', 'Remove all underscores in a string of text', '/string/underscore-remover', null),
    camelCaseGenerator: new Tool('Camel Case Generator', 'Generate camelCase from a string of text', '/string/camel-case-generator', null),
    snakeCaseGenerator: new Tool('Snake Case Generator', 'Generate snake_case from a string of text', '/string/snake-case-generator', null),
    kebabCaseGenerator: new Tool('Kebab Case Generator', 'Generate kebab-case from a string of text', '/string/kebab-case-generator', null),
    snakeCaseToCamelCaseConverter: new Tool('Snake Case to Camel Case Converter', 'Convert snake_case to camelCase', '/string/snake-case-to-camel-case-converter', null),
    camelCaseToSnakeCaseConverter: new Tool('Camel Case to Snake Case Converter', 'Convert camelCase to snake_case', '/string/camel-case-to-snake-case-converter', null),
    stringReverser: new Tool('String Reverser', 'Reverse a string', '/string/string-reverser', null),
  };

  static featuredTools = [
    Tool.allTools.spaceRemover,
    Tool.allTools.camelCaseGenerator,
    Tool.allTools.snakeCaseToCamelCaseConverter,
    Tool.allTools.stringReverser,
  ];

  static recommendedTools = {
    spaceRemover: [Tool.allTools.dashRemover, Tool.allTools.underscoreRemover],
    dashRemover: [Tool.allTools.spaceRemover, Tool.allTools.underscoreRemover],
    underscoreRemover: [Tool.allTools.spaceRemover, Tool.allTools.dashRemover],
    camelCaseGenerator: [],
    snakeCaseGenerator: [],
    kebabCaseGenerator: [],
    snakeCaseToCamelCaseConverter: [Tool.allTools.camelCaseToSnakeCaseConverter],
    camelCaseToSnakeCaseConverter: [Tool.allTools.snakeCaseToCamelCaseConverter],
    stringReverser: [],
  };
}