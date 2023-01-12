const Todo = require("../model/todoModel")

exports.getAllTodo = async (req, res, next) => {
    const items = await Todo.find();
    if (!items) {
        res.status(500).json({
            success: false,
            message: "Item is exist"
        })
        return;
    }
    res.status(200).json({
        success: true,
        items
    })
}

exports.createTodo = async (req, res, next) => {
    const todo = await Todo.create(req.body);
    if (!todo) {
        res.status(500).json({
            success: false,
            message: "Todo Item is not created"
        });
        return;
    }
    res.status(200).json({
        success: true,
        todo
    })
}


exports.deleteItem = async (req, res, next) => {
    const item = await Todo.findById(req.params.id);
    if (!item) {
        res.status(500).json({
            success: false,
            message: "Todo Item does not exist"
        });
        return;
    }
    item.delete();
    res.status(200).json({
        success: true,
        message: "Item deleted successfully"
    })
}