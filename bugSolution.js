const database = firebase.database();

function getData(path) {
  return new Promise((resolve, reject) => {
    database.ref(path).once('value', (snapshot) => {
      if (snapshot.exists()) {
        resolve(snapshot.val());
      } else {
        // Handle case where data doesn't exist
        reject('Data not found at this path');
      }
    }, (error) => {
      // Handle read errors
      reject(error);
    });
  });
}

getData('/myData').then((data) => {
  console.log('Data:', data); //Process the data
}).catch((error) => {
  console.error('Error retrieving data:', error);
  // Retry mechanism can be added here for better reliability 
});
