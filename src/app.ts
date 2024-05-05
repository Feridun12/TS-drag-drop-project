class ProjectInput {
  templateElement: HTMLTemplateElement;
  // we could also just write HTMLElement but since we know it is going to be a div we can specify it.
  hostElement: HTMLDivElement;
  element: HTMLFormElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    // importNode also takes a second argument as a boolean.
    // If true importNode will import a deep clone which imports with all levels of nesting
    // If false it will import just the element itself
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.attach();
  }

  private attach() {
    // insertAdjacentElement = to insert an HTML element
    // 1st argument === string = where to insert
    // 2st argument = another HTML element
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const prjInput = new ProjectInput();
