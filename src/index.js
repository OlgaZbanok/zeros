module.exports = function zeros(expression) {
  //number of zeros is number of multiplication of 5 and according amount of even numbers. 
  let items = expression.split('*');
  let count_of_five = 0;
  let count_of_even = 0;
  items.forEach(element => {
    let mas = element.match(/(\d+)(!+)/);
    if (mas[2] == '!') {
      //every power of 5 adds one more 5 to the total amount 
      for (let i = 5; Math.floor(mas[1] / i) >= 1; i *= 5) {
        count_of_five += Math.floor(mas[1] / i);
      }
      count_of_even += Math.floor(mas[1] / 2);
    }
    if ((mas[2] == '!!')) {
      if (!(mas[1] % 2)) {
        //every 10 adds 5 to to the total amount
        count_of_five += Math.floor(mas[1] / 10);
        //every power of 5 multiply on 10 (because first even number with additional 5 is 50=5*5*2) add one more 5 to the total amount
        for (let k = 50; Math.floor(mas[1] / k) >= 1; k *= 5) {
          count_of_five += Math.floor(mas[1] / k);
        }

        count_of_even += Math.floor(mas[1] / 2);
      } else {
        //get amount of 5 from odd numbers which have at least one 5 as multiplier
        count_of_five += Math.floor(mas[1] / 5) - Math.floor(mas[1] / 10);
        //every power of 5 starting form power 2 add one more 5 to the total amount 
        for (let i = 25; Math.floor(mas[1] / i) >= 1; i *= 5) {
          count_of_five += Math.floor(mas[1] / i);
        }
        for (let k = 50; Math.floor(mas[1] / k) >= 1; k *= 5) {
          //we need to remove even numbers from counting additional 5 above
          count_of_five -= Math.floor(mas[1] / k);
        }
      }
    }
  });
  return Math.min(count_of_even, count_of_five);
}