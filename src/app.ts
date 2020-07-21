import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
	e.preventDefault();

	let values: [string, string, number];
	values = [toFrom.value, details.value, amount.valueAsNumber];

	let doc: HasFormatter;
	if (type.value === "invoice") {
		doc = new Invoice(...values);
	} else {
		doc = new Payment(...values);
	}

	list.render(doc, type.value, "end");
});

// GENERICS
const addUID = <T extends { name: string }>(obj: T) => {
	let uid = Math.floor(Math.random() * 100);
	return { ...obj, uid };
};

let docOne = addUID({ name: "yoshi", age: 23 });

// with interfaces
interface Resource<T> {
	uid: number;
	resourceName: string;
	data: T;
}

const docTwo: Resource<string> = {
	uid: 1,
	resourceName: "Flodar",
	data: "Something",
};

const docThree: Resource<string[]> = {
	uid: 2,
	resourceName: "James",
	data: ["Gaming", "Programming"],
};

// Enums
enum ResourceTypes {
	MOVIES,
	BOOKS,
	GAMES,
}

interface EnumExample<T> {
	uid: number;
	resourceType: ResourceTypes;
	data: T;
}

const docFour: EnumExample<number> = {
	uid: 3,
	resourceType: ResourceTypes.BOOKS,
	data: 123,
};

const docFive: EnumExample<number> = {
	uid: 4,
	resourceType: ResourceTypes.GAMES,
	data: 1234,
};

const docSix: EnumExample<number> = {
	uid: 5,
	resourceType: ResourceTypes.MOVIES,
	data: 12345,
};

// TUPLES

let arr = ["ryu", 25, true];

let tup: [string, number, boolean] = ["ryu", 25, false];
