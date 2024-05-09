# task-management-app
 1. I have developed this application using MERN stack
 2. I have used VS code as my editor
 3. To get started download the code from the repository
 4. Go to VS code terminal
 5. change the directory to cd/frontend/task-management-app and then just give the npm install command it will download the necesssary dependencies and then click on the provided url
 6. change the directory to cd/backend and then just give the npm install command it will download the necesssary dependencies
 7. to download the dependencies make sure you have NodeJs install on your machine

# api documentation
Task Management App

Tasks:

Post a Task: http://localhost:3000/api/task/addTask
{
    "title": "Running",
    "description": "To Run 10km",
    "completed": false
}
{
    "message": "Task added successfully"
}
Get all Tasks: http://localhost:3000/api/task/getAllTask
 {
        "_id": "663d1074063e639238b76d2a",
        "title": "Running",
        "description": "To Run 7km",
        "userId": "663d0e33063e639238b76d20",
        "completed": true,
        "createdAt": "2024-05-09T18:05:40.661Z",
        "updatedAt": "2024-05-09T18:59:52.064Z",
        "__v": 0
    },
    {
        "_id": "663d1715063e639238b76d50",
        "title": "Gym",
        "description": "go to gym at 6pm",
        "userId": "663d0e33063e639238b76d20",
        "completed": false,
        "createdAt": "2024-05-09T18:33:57.572Z",
        "updatedAt": "2024-05-09T18:33:57.572Z",
        "__v": 0
    },
    {
        "_id": "663d31f8063e639238b76d8d",
        "title": "Reading",
        "description": "to finish a book",
        "userId": "663d0e33063e639238b76d20",
        "completed": false,
        "createdAt": "2024-05-09T20:28:40.894Z",
        "updatedAt": "2024-05-09T20:28:40.894Z",
        "__v": 0
    }
    Get Task by Id: http://localhost:3000/api/task/getTask/663d1074063e639238b76d2a
    {
    "_id": "663d1074063e639238b76d2a",
    "title": "Running",
    "description": "To run 5km",
    "userId": "663d0e33063e639238b76d20",
    "completed": false,
    "createdAt": "2024-05-09T18:05:40.661Z",
    "updatedAt": "2024-05-09T18:05:40.661Z",
    "__v": 0
}
Edit a Task by Id: http://localhost:3000/api/task/editTask/663d1074063e639238b76d2a
{
    "title": "Running",
    "description": "To Run 7km",
    "completed": true
}
{
    "message": "Task updated successfully",
    "task": {
        "_id": "663d1074063e639238b76d2a",
        "title": "Running",
        "description": "To Run 7km",
        "userId": "663d0e33063e639238b76d20",
        "completed": true,
        "createdAt": "2024-05-09T18:05:40.661Z",
        "updatedAt": "2024-05-09T18:59:52.064Z",
        "__v": 0
    }
}
Delete a Task by Id: http://localhost:3000/api/task/remove
Task/663bd000c120bbf10bcb91b2
{
    "message": "Task deleted successfully"
}

Users:
Register Users: http://localhost:3000/api/user/register
{
    "name": "Abhi Gaikar",
    "email": "abhigaikar@gmail.com",
    "password": "Pass@1234"
}
{
    "user": {
        "name": "Abhi Gaikar",
        "email": "abhigaikar@gmail.com",
        "password": "$2b$10$kl.H8v.V7A5Ej0VYfjFCnOzBnrXwMkqkidjcg8NIr5tAgbvCanD1S",
        "_id": "663bd401de6220a84c05cb48",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2M2JkNDAxZGU2MjIwYTg0YzA1Y2I0OCIsImlhdCI6MTcxNTE5NjkyOSwiZXhwIjoxNzE1NDU2MTI5fQ.__n5r7p8L8jDhAbiw__g14BaONVHxEMx6CYUP5jzvRQ"
}
