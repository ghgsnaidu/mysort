var arr=[];
let w=0;
let bool=[];
let QSB;
let BSB;
let ISB;
let SSB;

function setup() {
  w=windowWidth/100;
  createCanvas(windowWidth,windowHeight);
  frameRate(60);
  QSB=createButton("quickSort");
  QSB.style('border-color:pink');
  QSB.style('color: black');
  QSB.style('box-shadow: 0 0 40px 40px pink inset, 0 0 0 0 blue');
  QSB.style('transition: all 150ms ease-in-out');
  BSB=createButton("bubbleSort");
  ISB=createButton("insertionSort");
  SSB=createButton("selectionSort");
  
  arr=new Array(100);
  
  for(let i=0;i<arr.length;i++){
    arr[i]=random(5,500);
    bool[i]=0;
  }
  QSB.mousePressed(QuickSort);
}
function QuickSort(){
  quickSort(arr,0,arr.length-1);
  
}
function BubbleSort(){
  
}
function InsertionSort(){
  
}
function SelectionSort(){
  
}

  

function draw() {
  background(100,150,200);
  stroke(255);
  
  for(let i=0;i<arr.length;i++){
    
    if(bool[i]===1){
    fill(0,255,0);
    }else if(bool[i]==2){
         fill("orange");    
    }else{
    fill(20);
    }
    rect(i*w,height-arr[i],w,arr[i]);
  }
  
}


//QUICKSORT ALGORITHM
async function quickSort(arr,start,end){
  if(start>=end){
    return;
  }
  let pivot_index=await findpivot(arr,start,end);
  bool[pivot_index]=0;
  await Promise.all( [quickSort(arr,start,pivot_index-1),
   quickSort(arr,pivot_index+1,end)]);
}
async function findpivot(arr,start,end){
  for(let i=start;i<end;i++){
    bool[i]=2;
  }
  var pivot=start;
  bool[pivot]=1;//to mark a index as pivot.
  var ele=arr[end];
  for(let i=start;i<end;i++){
    if(arr[i]<ele){
      await swap(arr,i,pivot);
      bool[pivot]=0;//setting back to 0 as pivot is about to advance
      pivot++;
    }
  }
  for(let i=start;i<end;i++){
    bool[i]=0;
  }
  await swap(arr,end,pivot);
  
  return pivot;
}


//SWAP FUNCTION
async function swap(arr,i,j){
  await sleep(50);
  let temp=arr[i];
  arr[i]=arr[j];
  arr[j]=temp;
}
//FUNCTION TO AWAIT FOR A SPECIFIC TIME
//usefull to set some time delay for a process.so, we can see theworking of algorithms in real time. 
function sleep(ms){
  return new Promise(resolve=>setTimeout(resolve,ms));
}

