const HAND_UNIT_IN_METRE = 45.72 * 0.01; //45.72 centimetre or 1.5 foot equal to 1 unit of hand
const SQUARE_HAND_UNIT_IN_SQUARE_METRE = 0.139355 // Calculated based on 1.5 sqFt is 1 unit of sqHand
const CONSTANTS_UNIT_TO_METRE_WHERE_UNIT_IS = {
  metre: 1,
  millimetre: 0.001,
  centimetre: 0.01,
  kilometre: 1000,
  inch: 0.0254,
  foot: 0.3048,
  mile: 1609.34,
  yard: 0.9144,
  hand: HAND_UNIT_IN_METRE,
}
const CONSTANTS_UNIT_TO_SQUARE_METRE_WHERE_UNIT_IS = {
  sqMetre: 1,
  sqFoot: (1 / 10.7639),
  hectre: 10000,
  acre: 4046.86,
  decimal: 40.46484809,
  cent: 40.46484809,
  sqYard: (1 / 1.19599),
  guntha: 101.1714105,
  sqHand: SQUARE_HAND_UNIT_IN_SQUARE_METRE,
  sqKilometre: 1000000,
  sqCentimetre: 0.0001,
  sqInch: (1 / 1550),
  sqMile: 2590000,
  sqgaj: 0.8361204013,
  kanal: 505.8570526,
  bigha: 2529.285263,
  biswa: 126.4642632,
  biswaKacha: 252.9285263,
  kila: 4046.856422,
  lessa: 6.323213158,
  dhur: 6.323213158,
  pura: 10117.14105,
  chatak: 4.180636799,
  marla: 25.29285263,
  ground: 223,
  katha: 126.4642632,
  murabba: 101171.4106,
  sqKaram: 2.810316959,
}
$(document).ready(function () {
  $('#unit1').load('length/length-units-options.html option')
  $('#unit2').load('length/length-units-options.html option')
  $('#area-unit1').load('area/area-units-options.html option')
  $('#area-unit2').load('area/area-units-options.html option')
  $(".submit-btn.length-calc-btn").on("click", function () {
    convertLength();
  });
  $(".submit-btn.area-calc-btn").on("click", function () {
    convertArea();
  });
});

function convertLength() {
  let input1Unit;
  let input1Value;
  let input2Unit;
  let input2Value;
  input1Unit = $("#unit1 option:selected").val();
  input2Unit = $("#unit2 option:selected").val();
  input1Value = $("#input1").val();
  let valueInMetre = convertToMetre(input1Value, input1Unit, CONSTANTS_UNIT_TO_METRE_WHERE_UNIT_IS);
  input2Value = convertFromMetre(valueInMetre, input2Unit, CONSTANTS_UNIT_TO_METRE_WHERE_UNIT_IS);
  $("#input2").val(input2Value.toFixed(2));
}

function convertArea() {
  let input1Unit;
  let input1Value;
  let input2Unit;
  let input2Value;
  input1Unit = $("#area-unit1 option:selected").val();
  input2Unit = $("#area-unit2 option:selected").val();
  input1Value = $("#area-input1").val();
  let valueInMetre = convertToMetre(input1Value, input1Unit, CONSTANTS_UNIT_TO_SQUARE_METRE_WHERE_UNIT_IS);
  input2Value = convertFromMetre(valueInMetre, input2Unit, CONSTANTS_UNIT_TO_SQUARE_METRE_WHERE_UNIT_IS);
  $("#area-input2").val(input2Value.toFixed(2));
}
function convertToMetre(inputValue, unitValue, UNIT_VALUE_CONSTANT) {
  let resultValue;
  let unitToMetre = unitValue;
  resultValue = inputValue * UNIT_VALUE_CONSTANT[unitToMetre];
  return resultValue;
}
function convertFromMetre(inputValueInMtre, unitValue, UNIT_VALUE_CONSTANT) {
  let resultValue;
  let metreToUnit = unitValue;
  resultValue = inputValueInMtre * (1 / UNIT_VALUE_CONSTANT[metreToUnit]);
  return resultValue;
}
