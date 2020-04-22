
let STORE = [];



function handleSubmit() {
  let meal_price = Number($('#base-meal-price').val());
  let tax_rate = Number($('#tax-rate').val());
  let tip_percentage = Number($('#tip-percentage').val());
  
  let subtotal = meal_price + tax_rate * meal_price / 100;
  let tip = meal_price * tip_percentage / 100;
  let total = subtotal + tip;
  STORE.push({subtotal, tip, total});
  console.log(STORE);
}

function customerCharge() {
  let subtotal = 0;
  let tip = 0;
  let total = 0;
  let mealCount = STORE.length;

  STORE.forEach(meal => {
    subtotal += meal.subtotal;
    tip += meal.tip;
    total += meal.total;
  });

  let temp = isNaN((tip/mealCount).toFixed(2)) ? 0 : (tip/mealCount).toFixed(2); 
  $('#subtotal').html(subtotal);
  $('#total').html(total);
  $('#tip').html(tip.toFixed(2));
  $('#tip-total').html(tip.toFixed(2));
  $('#meal-count').html(mealCount);
  $('#avg-tip').html(temp);
  
}




$('#submit').on('click', function() {
  handleSubmit();
  customerCharge();
});

$('#reset').on('click', function(e) {
  e.preventDefault();
  STORE = [];
  customerCharge();
  $("#meal-details-form").trigger("reset");
});
// function handleWaitStaffCalculator() {
//   
// }


