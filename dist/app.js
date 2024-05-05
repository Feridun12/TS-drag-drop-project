"use strict";
var ProjectInput = /** @class */ (function () {
    function ProjectInput() {
        this.templateElement = document.getElementById("project-input");
        this.hostElement = document.getElementById("app");
        // importNode also takes a second argument as a boolean.
        // If true importNode will import a deep clone which imports with all levels of nesting
        // If false it will import just the element itself
        var importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.attach();
    }
    ProjectInput.prototype.attach = function () {
        // insertAdjacentElement = to insert an HTML element
        // 1st argument === string = where to insert
        // 2st argument = another HTML element
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    };
    return ProjectInput;
}());
var prjInput = new ProjectInput();
//# sourceMappingURL=app.js.map