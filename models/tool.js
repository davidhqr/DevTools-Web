export default class Tool {
  constructor(name, description, path, relatedTools) {
    this.name = name;
    this.description = description;
    this.path = path;
    this.relatedTools = relatedTools;
  }

  static allTools = {
    removeSpaces: new Tool('Remove Spaces', 'Remove all spaces in a string of text', '/string/remove-spaces', null),
    removeDashes: new Tool('Remove Dashes', 'Remove all dashes in a string of text', '/string/remove-dashes', null),
    removeUnderscores: new Tool('Remove Underscores', 'Remove all underscores in a string of text', '/string/remove-underscores', null),
  };

  static featuredTools = [
    Tool.allTools.removeSpaces,
    Tool.allTools.removeDashes,
  ];
}