	window.onload = function () {

		var latlng = new google.maps.LatLng(59.677748, 10.528622);

		var styles = [
			{
				featureType: "landscape",
				stylers: [
					{ color: '#eeddee' }
				]
			},{
				featureType: "natural",
				stylers: [
					{ hue: '#89cff0 ' }
				]
			},{
				featureType: "road",
				stylers: [
					{ hue: '#5500aa' },
					{ saturation: -70 }
				]
			},{
				featureType: "building",
				elementType: "labels",
				stylers: [
					{ hue: '#000066' }
				]
			},{
				featureType: "poi",
				stylers: [
					{ hue: '#35e873' }
				]
			}
		];


		var myOptions = {
			zoom: 14,
			scrollwheel: false,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			disableDefaultUI: true,
			styles: styles
		};

		map = new google.maps.Map(document.getElementById('map'), myOptions);
    
   
    

       
      var marker = new google.maps.Marker({
      position: {lat: 59.677748, lng: 10.528622},
      map: map,
      title: 'Kirkegata 1'
      });
	}