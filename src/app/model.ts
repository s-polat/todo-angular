export class Model {
    user;
    items;

    constructor() {
        this.user = "Mehmet";
        this.items = [
            new TodoItem("Kahvalti", true),
            new TodoItem("Sinema", false),
            new TodoItem("Spor", false),
            new TodoItem("Ders calis", false)
        ];
    }
}

export class TodoItem {
    description;
    action;

    constructor(description: any, action: any) {
        this.description = description;
        this.action = action;
    }
}
