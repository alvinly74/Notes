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
  console.log("RESIZE");
  var tempStore = Array.apply(null,Array(this.store.length * 2)).map(function(){return [];});
  var flattened = [].concat.apply([],this.store);
  flattened.forEach(function(el){
    tempStore[el.hash() % tempStore.length].push(el);
  });
  this.store = tempStore;
};

Number.prototype.hash = function(){
  var hash = this << 5 + this;
  return hash;
};

String.prototype.hash = function(){
  var hash = 0;
  for (i = 0; i < this.length; i++) {
      char = this.charCodeAt(i);
      hash = char + (hash << 6) + (hash << 16) - hash;
  }
  return hash;
};

Array.prototype.hash = function(){
  var hash = 0;
  this.forEach(function(el){
    hash += el.hash();
  });
  return hash;
};

Object.prototype.hash = function(){
  var hash = 0;
  for(var key in this) {
    hash += key.hash();
  }
  return hash;
};
