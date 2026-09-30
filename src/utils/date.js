const today = new Date();
   const day=today.toLocaleString('en-US',{weekday:'long'});
const month=today.toLocaleString('en-US',{month:'long'});
const date=today.getDate();



export {day,month,date}