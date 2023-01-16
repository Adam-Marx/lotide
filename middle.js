const middle = function(array) {
  if (array.length > 2) {
      if (array.length % 2 === 0) {
        
        let evenFirstElement = array[Math.floor((array.length -1) / 2)];
        let evenSecondElement = array[Math.floor(array.length / 2)];
     
        const evenMedian = (evenFirstElement + evenSecondElement) / 2; 

        return evenMedian;

      } else if (array.length % 2 === 1) {
        let middleOddElement = array[Math.floor(array.length / 2)];
        return middleOddElement;
      }
  }
   
};

module.exports = middle;