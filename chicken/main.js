class Inventory {
    constructor(numChickens) {
        this.legs = numChickens * 2;
        this.wings = numChickens * 2;
        this.flesh = numChickens;
        this.totalWeight = numChickens * 2;
    }

    processOrder(orderLegs, orderWings, orderFlesh) {
        const orderWeight = (orderLegs * 0.25) + (orderWings * 0.25) + (orderFlesh * 1);
        const requiredChickens = Math.max(
            Math.ceil(orderLegs / 2),
            Math.ceil(orderWings / 2),
            orderFlesh
        );

        if (orderLegs > this.legs || orderWings > this.wings || orderFlesh > this.flesh) {
            return "Insufficient inventory to fulfill the order.";
        }

        this.legs -= orderLegs;
        this.wings -= orderWings;
        this.flesh -= orderFlesh;
        this.totalWeight -= orderWeight;

        return `
Total weight of the order: ${orderWeight.toFixed(2)} kg
Whole chickens needed: ${requiredChickens}
Remaining inventory - Legs: ${this.legs}, Wings: ${this.wings}, Flesh portions: ${this.flesh}
Total weight of remaining inventory: ${this.totalWeight.toFixed(2)} kg
        `;
    }
}

let inventory;

function initializeInventory() {
    const numChickens = parseInt(document.getElementById('numChickens').value);
    inventory = new Inventory(numChickens);
    document.getElementById('output').innerText = `Inventory initialized with ${numChickens} chickens.`;
}

function processOrder() {
    if (!inventory) {
        document.getElementById('output').innerText = "Please initialize the inventory first.";
        return;
    }

    const orderLegs = parseInt(document.getElementById('orderLegs').value);
    const orderWings = parseInt(document.getElementById('orderWings').value);
    const orderFlesh = parseInt(document.getElementById('orderFlesh').value);

    const result = inventory.processOrder(orderLegs, orderWings, orderFlesh);
    document.getElementById('output').innerText = result;
}