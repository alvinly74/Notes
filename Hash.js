var HashSet = function(numBuckets){
  this.store = Array.apply(null,Array(numBuckets)).map(function(){return [];});
  this.count = 0;
};

HashSet.prototype.insert = function(el) {
  if (this.count >= this.store.length){
    this._resize();
  }
  this.count +=1;
  this.store[el.hash() % this.store.length].push(el);
};

HashSet.prototype.remove = function(el){
  this.count -=1;
  this.store.splice(el.hash() % this.store.length,1);
};

HashSet.prototype.include = function(el){
  if (this.store[el.hash() % this.store.length]){
    return true;
  } else {
  return false;
  }
};

HashSet.prototype._resize = function(){
  var tempStore = Array.apply(null,Array(this.store.length * 2)).map(function(){return [];});
  var flattened = [].concat.apply([],this.store);
  flattened.forEach(function(el){
    tempStore[el.hash() % tempStore.length].push(el);
  });
  this.store = tempStore;
};

// Look into how to make number, string, array, and object hash functions
