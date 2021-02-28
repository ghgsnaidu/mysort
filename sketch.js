//global variables
var arr = [];
let w = 0; //width of each rectangular bar
let bool = []; //to color a specific bar
let QSB; //quicksort button object
let BSB; //bubble sort button object
let ISB; //insertion sort button object
let SSB; //selection sort button object
let running = -1;
let r,g,b;

function setup() {
  w = windowWidth / 100;
  createCanvas(windowWidth, windowHeight);
  frameRate(60);

  //creating button objects
  QSB = createButton("QUICK SORT");
  BSB = createButton("BUBBLE SORT");
  ISB = createButton("INSERTION SORT");
  SSB = createButton("SELECTION SORT");
  //button styling
  QSB.style('border-color:#00ffff');
  QSB.style('color:black ');
  QSB.style('margin-right:20px ');
  QSB.style('border-radius:5px ');
  
  QSB.style('box-shadow: 0 0 40px 40px #00ced1 inset, 0 0 0 0 #00ffff');
  BSB.style('border-color:#00ffff');
  BSB.style('color: black');
  BSB.style('margin-right:20px ');
  BSB.style('border-radius:5px ');
  BSB.style('box-shadow: 0 0 40px 40px #00ced1 inset, 0 0 0 0 #00ffff');
  ISB.style('border-color:#00ffff');
  ISB.style('color: black');
  ISB.style('margin:10px 20px 0px 0px  ');
  ISB.style('border-radius:5px ');
  ISB.style('box-shadow: 0 0 40px 40px #00ced1 inset, 0 0 0 0 #00ffff');
  SSB.style('border-color:#00ffff');
  SSB.style('color: black');
  SSB.style('margin-right:20px ');
  SSB.style('border-radius:5px ');
  SSB.style('box-shadow: 0 0 40px 40px #00ced1 inset, 0 0 0 0 #00ffff');




  arr = new Array(100);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = random(5, 500);
  }
  //calling back respective functions on button click event
  QSB.mousePressed(QuickSort);
  BSB.mousePressed(BubbleSort);
  ISB.mousePressed(InsertionSort);
}

function draw() {
  background(100, 150, 200);
  stroke(255);

  for (let i = 0; i < arr.length; i++) {

    if (bool[i] === 1) {
      fill(r,g,b);
    } else if (bool[i] == 2) {
      fill("red");
    } else {
      fill(20);
    }
    rect(i * w, height - arr[i], w, arr[i]);
  }

}


//QUICKSORT ALGORITHM

async function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }
  let pivot_index = await findpivot(arr, start, end);
  bool[pivot_index] = 0;
  await Promise.all([quickSort(arr, start, pivot_index - 1),
    quickSort(arr, pivot_index + 1, end)
  ]);
}
async function findpivot(arr, start, end) {
  for (let i = start; i < end; i++) {
    bool[i] = 2;
  }
  var pivot = start;
  bool[pivot] = 1; //to mark a index as pivot.
  var ele = arr[end];
  for (let i = start; i < end; i++) {
    if (arr[i] < ele) {
      await swap(arr, i, pivot);
      bool[pivot] = 0; //setting back to 0 as pivot is about to advance
      pivot++;
    }
  }
  for (let i = start; i < end; i++) {
    bool[i] = 0;
  }
  await swap(arr, end, pivot);

  return pivot;
}

function QuickSort() {

  if (running == -1) {
    running = 1;
    for (let i = 0; i < arr.length; i++) {
      arr[i] = random(5, 500);
      bool[i] = 0;
    }
    r=255;
    g=255;
    b=255;
    quickSort(arr, 0, arr.length - 1);
    running = -1;
  }

}

//Bubble sort

async function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        bool[j] = 1;
        await swap(arr, j, j + 1);
        bool[j] = 0;
      }
      bool[i+1] = 1;
    }
  }
}

function BubbleSort() {
  if (running == -1) {
    running = 1;
    for (let i = 0; i < arr.length; i++) {
      arr[i] = random(5, 500);
      bool[i] = 0;
    }
    r=0;
    b=155;
    g=250;
    bubbleSort(arr);
    running = -1;
  }
}

//Insertion sort

async function insertionSort(arr) {

 for (let i=1; i<arr.length; ++i)
        {
            let key = arr[i];
            let j = i-1;
            
            //Move elements of arr[0..i-1], that are greater than key, to one position ahead of their current position 
          
            while (j>=0 && arr[j] > key)
            {
                arr[j+1] = arr[j];
                bool[j]=1;
                j = j-1;
            }
           await sleep(100);
            
            arr[j+1] = key;
        }
       
}

function InsertionSort() {
  if (running == -1) {
    running = 1;
    for (let i = 0; i < arr.length; i++) {
      arr[i] = random(5, 500);
      bool[i] = 0;
    }
    r=70;
    g=210;
    b=205;
    insertionSort(arr);
    running = -1;
  }

}

//selection sort

async function selectionSort(arr){
  for (let i = 0; i < arr.length-1; i++) 
        { 
            // Find the minimum element in unsorted array 
            let min_idx = i; 
        for (let j = i+1; j < arr.length; j++){ 
                if (arr[j] < arr[min_idx]) {
                    min_idx = j;
                    bool[min_idx]=1;
                }
            }
             bool[min_idx]=0;
             bool[i]=1;
             await swap(arr,min_idx,i);
        } 
  
}
function SelectionSort() {
  if (running == -1) {
    running = 1;
    for (let i = 0; i < arr.length; i++) {
      arr[i] = random(5, 500);
      bool[i] = 0;
    }
    r=150;
    g=0;
    b=0;
    selectionSort(arr, 0, arr.length - 1);
    running = -1;
  }


}






//SWAP FUNCTION

async function swap(arr, i, j) {
  await sleep(50);
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
//FUNCTION TO AWAIT FOR A SPECIFIC TIME
//usefull to set some time delay for a process.so, we can see theworking of algorithms in real time. 
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

