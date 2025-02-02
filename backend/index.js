"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var cors_1 = require("cors");
var app = (0, express_1.default)();
var port = 3000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// In-memory data store
var items = [];
var currentId = 1;
// Create
app.post("/items", function (req, res) {
    var name = req.body.name;
    var newItem = { id: currentId++, name: name };
    items.push(newItem);
    res.status(201).json(newItem);
});
// Read All
app.get("/items", function (req, res) {
    res.status(200).json(items);
});
// Read One
app.get("/items/:id", function (req, res) {
    var item = items.find(function (i) { return i.id === parseInt(req.params.id); });
    if (item) {
        res.status(200).json(item);
    }
    else {
        res.status(404).json({ message: "Item not found" });
    }
});
// Update
app.put("/items/:id", function (req, res) {
    var id = parseInt(req.params.id);
    var name = req.body.name;
    var itemIndex = items.findIndex(function (i) { return i.id === id; });
    if (itemIndex !== -1) {
        items[itemIndex].name = name;
        res.status(200).json(items[itemIndex]);
    }
    else {
        res.status(404).json({ message: "Item not found" });
    }
});
// Delete
app.delete("/items/:id", function (req, res) {
    var id = parseInt(req.params.id);
    items = items.filter(function (i) { return i.id !== id; });
    res.status(204).send();
});
app.listen(port, function () {
    console.log("Server running at http://localhost:".concat(port));
});
