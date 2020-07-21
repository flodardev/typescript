import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
// GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "yoshi", age: 23 });
const docTwo = {
    uid: 1,
    resourceName: "Flodar",
    data: "Something",
};
const docThree = {
    uid: 2,
    resourceName: "James",
    data: ["Gaming", "Programming"],
};
// Enums
var ResourceTypes;
(function (ResourceTypes) {
    ResourceTypes[ResourceTypes["MOVIES"] = 0] = "MOVIES";
    ResourceTypes[ResourceTypes["BOOKS"] = 1] = "BOOKS";
    ResourceTypes[ResourceTypes["GAMES"] = 2] = "GAMES";
})(ResourceTypes || (ResourceTypes = {}));
const docFour = {
    uid: 3,
    resourceType: ResourceTypes.BOOKS,
    data: 123,
};
const docFive = {
    uid: 4,
    resourceType: ResourceTypes.GAMES,
    data: 1234,
};
const docSix = {
    uid: 5,
    resourceType: ResourceTypes.MOVIES,
    data: 12345,
};
// TUPLES
let arr = ["ryu", 25, true];
let tup = ["ryu", 25, false];
