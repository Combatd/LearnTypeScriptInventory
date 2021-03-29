let displayName: string = "Jess's standing desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();

type Cost = number | string 

let originalCost: Cost;

if (typeof originalCost === "number") {
    let cost: number = originalCost;
} else {
    let x = originalCost;
}

enum InventoryItemType {
    Computer = "computer",
    furniture = "furniture"
}

interface InventoryItem {
    displayName: string;
    inventoryType: "computer" | "furniture"; // literal type, could also have used enum InventoryItemType
    readonly trackingNumber: string;
    createDate: Date;
    originalCost?: number;

    addNote?: (note: string) => string;
}

function getInventoryItem(trackingNumber: string): InventoryItem {
    return null;
}

function saveInventoryItem(item) {

}

let inventoryItem = getInventoryItem(trackingNumber);

let updatedInventoryItem = inventoryItem;

inventoryItem.createDate = new Date();

saveInventoryItem(inventoryItem);

function clone<T, U>(source: T, options: U): T {
    const serialized = JSON.stringify(source);
    return JSON.parse(serialized);
}

const cloned = clone(inventoryItem, { deep: true });

interface KeyValuePairs<TKey, TValue> {
    Key: TKey;
    Value: TValue;
}

var keyValue: KeyValuePairs<string, number> = { Key: "something", Value: 1234 };