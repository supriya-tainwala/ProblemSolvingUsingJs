var fs = require("fs");
// const { readFileSync } = require("fs");
const path = "data.json";

// const jsonString = readFileSync(path);
// console.log(JSON.parse(jsonString));





const { writeFileSync } = require("fs");



const purchase_hist = {"name":"John Smith","purchase_id":"20223","price":"$23.95","shipping_address":{"name":"Jane Smith","address":"123 Maple Street","city":"Pretendville","state":"NY","zip":10005},"billing_address":{"name":"John Smith","address":"123 Maple Street","city":"Pretendville","state":"NY","zip":10005},"is_reverse_charge_applied":false,"warehouse":[{"warehouse_name":"ABC Warehouse","warehouse_id":143}]};

try {
    writeFileSync(path, JSON.stringify(purchase_hist, null, 2), "utf8");
    console.log("Data successfully saved");
} catch (error) {
    console.log("An error has occurred ", error);
}


// const fs = require("fs");
// const path = "home/json/purchase_history.json";

fs.readFile(path, "utf8", (err, jsonString) => {
    if (err) {
        console.log("Error reading the JSON file:", err);
        return;
    }
    try {
        const purchase_hist = JSON.parse(jsonString);
        console.log(purchase_hist);
    } catch (err) {
        console.log("Error parsing JSON string:", err);
    }
});