// Here I created a hashtable from scratch to study and better understand how
// hash tables work.

class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
      // Simple hashing function that converts key to a valid address
      // Address here is just an index to our data array
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  
    set(key, value){
      const bucket = [key, value];
      const hashed_key = this._hash(key);
      if (this.data[hashed_key] instanceof Array){
        // Since two different keys can be hashed into the same value
        // We create a bucket_list at each index of the data Array. i.e an
        // array of arrays. If same key exists then replace existing value
        // of key with new value.
        for (let item of this.data[hashed_key]){
          if (item[0] === key ){// If exact same key
            item[1] = value;
            return
          }
        }
        this.data[hashed_key].push(bucket)
      }
      else{
        // Push new bucket to Array
        this.data[hashed_key] = new Array(bucket);
      }
    }
  
    get(key){
      // Method to get value for given key
      const raw_key = key;
      const hashed_key = this._hash(key);
      const bucket_list = this.data[hashed_key];
      if (bucket_list instanceof Array){ // If bucket_list not empty
        for(let i=0; i<bucket_list.length; i++){
          if( bucket_list[i][0] === raw_key ){
            return bucket_list[i][1]; // Return Value
          }
        }
        return 'Invalid key'
      }
      else{
        return 'Invalid key'
      }
    }
  
    keys(){
      // Return all keys of the hashtable 
      const keysArray = [];
      for (let item of this.data){
        if (item){
          for (let bucket of item){
            keysArray.push(bucket[0])
          }
        }
      }
      return keysArray
    }
  }
  
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 100)
  myHashTable.set('apples', 9)
  
  console.log(myHashTable.data)
  console.log(myHashTable.keys())