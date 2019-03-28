export default class Tool {
  constructor(name, description, path, relatedTools) {
    this.name = name;
    this.description = description;
    this.path = path;
    this.relatedTools = relatedTools;
  }
}