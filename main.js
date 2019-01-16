
function insert(num) {
  document.form.input.value = document.form.input.value+num
    
} 
function back() {
    var back = document.form.input.value;
    document.form.input.value = back.substring(0,document.form.input.value.length-1)
}
function equal() {
    var exp = document.form.input.value;
    document.form.input.value = eval(exp)
}
function sin() {
    var exp = document.form.input.value;
    document.form.input.value = Math.sin(exp)
}
const cos = ()  => {
    var exp = document.form.input.value;
    document.form.input.value = Math.cos(exp)
}
const tan = ()  => {
    var exp = document.form.input.value;
    document.form.input.value = Math.tan(exp)
}
const Ac = ()  => {
    document.form.input.value = ""
}
const sqrt = ()  => {
    var exp = document.form.input.value;
    document.form.input.value = Math.sqrt(exp)
}