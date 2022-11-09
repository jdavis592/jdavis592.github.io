        	var start;
        	var reactionTime;
        	var stop;
        	var bestTime = 0;        	
        	document.getElementById("start").onclick = function() {
        		startGame();
        	}

        	function startGame() {
        		start = new Date().getTime();
        		stop = false;
        		document.getElementById("start").style.display = "none";
        		document.getElementById("shape").style.display = "none";
        		document.getElementById("reactionTime").innerHTML = "";
        		//sets a timer for shape to appear on screen
        		promptAfterDelay();
        		var startObjects = document.getElementsByClassName("afterStart");
        		for(var i = 0; i <= startObjects.length; i++){
        			startObjects[i].style.display = "block";
        		}

        	}

        	document.getElementById("shape").onclick = function() {	        	
	        	hide("shape");
	        	var end = new Date().getTime();
	        	reactionTime = (end - start)/1000;
	        	if(bestTime == 0 || reactionTime < bestTime){
	        		bestTime = reactionTime;
	        	}
	        	document.getElementById("reactionTime").innerHTML = reactionTime + "s";	  
	        	promptAfterDelay();
        	}

        	document.getElementById("end").onclick = function() {
        		stop = true;
        		show("start");
        		hide("shape");
        		if(bestTime != 0){
        			alert("Fastest reaction time: " + bestTime + ". Thanks for playing!");
        		}
        		var startObjects = document.getElementsByClassName("afterStart");
        		for(var i = 0; i <= startObjects.length; i++){
        			startObjects[i].style.display = "none";        			
        		}

        		bestTime = 0;        		       			
        	}        	

        	function promptShape() {        	 
        		positionSizeAndShape();

        		document.getElementById("shape").style.backgroundColor = getRandomColor();
        		if(!stop){        			
        			show("shape");
        			start = new Date().getTime();
        		}
        	}          	

        	function show(id) {
        		document.getElementById(id).style.display = "block";
        	}

        	function hide(id) {
        		document.getElementById(id).style.display = "none";
        	}

        	function promptAfterDelay() {        		
        		hide("shape");
        		var time = Math.random() * 2000;
        		positionSizeAndShape();
        		if(!stop){
        			setTimeout(promptShape, time);
        		}
        	}

        	function positionSizeAndShape() {
        		var top = Math.random() * 400;
        		var left = Math.random() * 400;
        		var dimension = (Math.random() * 400) + 100;
        		if(Math.random() > 0.5) {
        			document.getElementById("shape").style.borderRadius = "50%";
        		} else {
        			document.getElementById("shape").style.borderRadius = "0";
        		}
        		document.getElementById("shape").style.top = top + "px";
        		document.getElementById("shape").style.left = left + "px";
        		document.getElementById("shape").style.width = dimension + "px";
        		document.getElementById("shape").style.height = dimension + "px";
        	}
        	
        	function getRandomColor() {
        		var letters = '0123456789ABCDEF'.split('');
        		var color = '#';
        		for (var i = 0; i < 6; i++) {
					color += letters[Math.floor(Math.random() * 16)];        			
        		}
        		return color;
        	}