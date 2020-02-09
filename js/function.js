var default_starttime_hour = 9;

var start_time,
var end_time,
var duration,

function compare_n_set_event(start_time,duration) {
  var test = false;
  
    if(start_time.getHours()<default_start_time) {
      start_time.setHours(default_start_time);
    }
    if(( start_time.getHours() + duration ) % 24) {
      start_time.setHours(default_start_time);
      var xyz = start_time.getDay();
      xyz+=1;
      start_time.setDay(xyz);
    }
  
  /// Now send the HTTPS Request for the Freebusy function
    var length_json = Object.keys(JSON.calender.busy).length;
    for (int i = 0; i < length_json; i++) { 
      var Diff_end = JSON.calender.busy[length_json].end.getHours();
      var Diff_start = JSON.calender.busy[length_json+1].start.getHours();
      var Diff_end_day = JSON.calender.busy[length_json].end.getDay();
      var Diff_start_day = JSON.calender.busy[length_json].start.getDay();
      
      if(Diff_end_day == Diff_start_day){
      
      	if(Diff_end<default_start_time){
        	continue;
      	}   
      	if(Diff_start<default_start_time){
      		continue;
      	}
      	var diff = diff_start - diff_end
      	if(duration>diff)
        	continue;
      	else{
      		return start_time.getDate();
      	}      
      
      if(Diff_end_day != Diff_start_day){
      
      	if(Diff_end<default_start_time){
        	continue;
      	}   
      	if(Diff_start<default_start_time){
      		continue;
      	}
      	var diff = 24 - diff_end
      	if(duration>diff){
        	diff = diff_start - 9;
          	if(duration>diff){
            	continue;
            }
          	else{
            	return JSON.calender.busy[length_json+1].start.getDate();
            }
        
        }
      	else{
      		return JSON.calender.busy[length_json].end.getDate();
      	}            
    } 
}
