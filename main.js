function bubbleSort(arr){
  for(let j = 0; j< arr.length-1; j++){
    for(let i= 0; i< arr.length-j ; i++){
      if(arr[i]>arr[i+1]){
        temp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  console.log(arr);
}

bubbleSort([7,5,2,4,3,9]); //[2, 3, 4, 5, 7, 9]
bubbleSort([9,7,5,4,3,1]); //[1, 3, 4, 5, 7, 9]
bubbleSort([1,2,3,4,5,6]);