//This script used to preload the nav hover icons so no lag time when hovering over them the first time
   img1 = new Image();
   img1.src = "icons/about_icon_hl.png";
			
	img2 = new Image();
	img2.src = "icons/skills_icon_hl.png";
	
	img3 = new Image();
	img3.src = "icons/work_icon_hl.png";
			
	img4 = new Image();
	img4.src = "icons/projects_icon_hl.png";
			
	img5 = new Image();
	img5.src = "icons/interests_icon_hl.png";
			
	img6 = new Image();
	img6.src = "icons/contact_icon_hl.png";
	
	img7 = new Image();
	img7.src = "icons/home_icon_hl.png";
		
	img8 = new Image();
	img8.src = "images/me.png";
// Used to switch icons on and off hover
	function swapIcons(imageURL, id) {
		document.getElementById(id).src=imageURL;
	}		
	   
   
   function toggle_visibility(id) {
      var e = document.getElementById(id);
	  var curY = window.scrollY, curX = window.scrollX;
      if(e.style.display == 'block') {		
         e.style.display = 'none';
         document.getElementById(id+'_header').innerHTML = ' [show]';
         document.getElementById(id+'_header').style.color = '#2A2F89';
      }
      else {
         e.style.display = 'block';
         document.getElementById(id+'_header').innerHTML = ' [hide]';
         document.getElementById(id+'_header').style.color = '#8185D3';
      }
	  window.scrollTo(curX, curY);
   }     