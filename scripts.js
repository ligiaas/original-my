(function() {

	function init() {
		$('button[data-target="#main-menu"]').click(function(evt) {
			evt.preventDefault();
			$(['#main-menu', '#main-content']).toggleClass(['open-menu', 'open-dash']);
		});
	}


	$(document).ready(function() {
		init();
	});

	//line
	var ctxL = document.getElementById("lineChart").getContext('2d');
	var myLineChart = new Chart(ctxL, {
	    type: 'line',
	    data: {
	        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
	        datasets: [
	            {
	                label: "Índice 1",
	                fillColor: "rgba(247,222,122,0.2)",
	                strokeColor: "rgba(247,222,122,1)",
	                pointColor: "rgba(247,222,122,1)",
	                pointStrokeColor: "#fff",
	                pointHighlightFill: "#fff",
	                pointHighlightStroke: "rgba(247,222,122,1)",
	                data: [65, 59, 80, 81, 56, 55, 40]
	            },
	            {
	                label: "Índice 2",
	                fillColor: "rgba(50,200,191,0.2)",
	                strokeColor: "rgba(50,200,191,1)",
	                pointColor: "rgba(50,200,191,1)",
	                pointStrokeColor: "#fff",
	                pointHighlightFill: "#fff",
	                pointHighlightStroke: "rgba(50,200,191,1)",
	                data: [28, 48, 40, 19, 86, 27, 90]
	            }
	        ]
	    },
	    options: {
	        responsive: true
	    }    
	});
	            
            
})(this);