export const getAllTasks = (req, res) => {
    res.status(200).json({ message: "All tasks" });
};

export const createTask = (req, res) => {
    res.status(201).json({ message: "Task was created" });
};

export const updateTask = (req, res) => {
    res.status(202).json({ message: "Task was updated" });
};

export const deleteTask = (req, res) => {
    res.status(204).json({ message: "Task was deleted" });
};