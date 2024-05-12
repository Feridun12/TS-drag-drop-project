class ProjectInput {
  templateElement: HTMLTemplateElement;
  // we could also just write HTMLElement but since we know it is going to be a div we can specify it.
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

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
    this.element.id = "user-input";

    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;

    this.descriptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;

    this.peopleInputElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;

    this.configure();
    this.attach();
  }

  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.titleInputElement.value);
  }

  private configure() {
    // by adding .bind(this) we make sure that submitHandler will work with the class not the reached instance
    this.element.addEventListener("submit", this.submitHandler.bind(this));
  }

  private attach() {
    // insertAdjacentElement = to insert an HTML element
    // 1st argument === string = where to insert
    // 2st argument = another HTML element
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const prjInput = new ProjectInput();
