var Heap = function(){
  this.store = [];
};

Heap.prototype.findChildIdx = function(idx){
  return [(idx * 2) + 1, (idx * 2) + 2];
};

Heap.prototype.findParentIdx = function(idx){
  return Math.floor(idx - 1 / 2);
};

Heap.prototype.peak = function(idx){
  return this.store[0];
};

Heap.prototype.swap = function(idx1,idx2){
  var swap = this.store[idx1];
  this.store[idx1] = this.store[idx2];
  this.store[idx2] = swap;
};
Heap.prototype.pop = function(){
  if(this.store.length === 0) {return null;}
  this.swap(0,this.store.length-1);
  this.store.pop();
  this.heapifyDown();
};
Heap.prototype.heapifyDown = function(){
  var i = 0;
  var moved = this.store[0];
  while (true) {
    var child_idx = this.findChildIdx(i);
    var child_values = child_idx.map(function(el){return this.store[el];});
    var smallChild = child_idx[child_values.reduce(function(a, b, i, arr) {return Math.min(a,b);};)];
  }
};
