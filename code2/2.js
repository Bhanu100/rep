<!DOCTYPE html>
<html>
<body>

<p>Display the Boolean value of 0:</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
    var x = 0;
    document.getElementById("demo").innerHTML = Boolean(x);
}
</script>

</body>
</html>
