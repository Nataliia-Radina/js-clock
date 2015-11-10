$(document).ready(function () {

 	var c = setInterval(myClock, 1);
	function myClock(){
		var now = new Date();
		var h = now.getHours();
		var m = now.getMinutes();
		var s = now.getSeconds();
		var milli = now.getMilliseconds();
		var time = h + ":" + m + ":" + s + "." + milli;
	    document.getElementById('clock').innerHTML = time;
	    bg(m);
	    return time;
	};
 
	$('#clockb').click(function() {
		if (this.value == 'Stop Clock') {
			clearInterval(c);
			$(this).prop('value', 'Start Clock');
			$('#stopped-time').text(myClock());
		} else {
			$(this).prop('value', 'Stop Clock');
			c = setInterval(myClock, 1);
		}
	})

	function bg(m) {
		var div = document.getElementById('clock');   
		if (m % 2 == 0) {
			div.style.backgroundColor='green';
		} else {
			div.style.backgroundColor='yellow';
		}
	}

	function StoppedTime() {
		$('#stopped-time').text = "Last stopped time was" + h + ":" + m + ":" + s + "." + milli;
	}
});


