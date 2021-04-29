import firebase from 'firebase/app';

export function writeUserData(userId, email) {
  firebase
    .database()
    .ref('users/' + userId + '/' + 'userData')
    .set({
      email: email,
    });
}

export function addTaskToDatabase(uid, taskData) {
  const newPostKey = firebase
    .database()
    .ref('users/' + uid + '/' + 'tasks')
    .push().key;

  const updates = {};
  updates['/users/' + uid + '/' + 'tasks/' + newPostKey] = taskData;

  taskData.id = newPostKey;

  return firebase.database().ref().update(updates);
}

export function updateTaskInDatabase(uid, taskId, taskData) {
  const updates = {};
  updates['users/' + uid + '/' + 'tasks/' + taskId] = taskData;

  return firebase.database().ref().update(updates);
}

export function deleteTaskFromDatabase(uid, taskId) {
  firebase
    .database()
    .ref('users/' + uid + '/' + 'tasks/' + taskId)
    .remove();
}

export function getTaskListFromDatabase(uid) {
  return firebase
    .database()
    .ref('users/' + uid + '/' + 'tasks/')
    .get();
}
