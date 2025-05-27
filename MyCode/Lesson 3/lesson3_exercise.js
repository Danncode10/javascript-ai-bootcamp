
// Exercise 1: Create an array `groceryList` with some items

let groceryList = ["milk", "bread", "eggs"];

// Exercise 2: Print all items in `groceryList` using a loop
for (let items of groceryList) {
    console.log(items);
}

// Exercise 3: Make the items capitalized
groceryList = groceryList.map(item => item.toUpperCase());

// Exercise 4: Add a new item to the `groceryList`
groceryList.push("butter");
// Exercise 5: Remove the last item from the `groceryList`
groceryList.pop();

