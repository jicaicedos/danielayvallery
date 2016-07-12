
var imagenes = ['images/dia_00001.jpg',
				'images/dia_00002.jpg',
				'images/dia_00003.jpg',
				'images/dia_00004.jpg'				
				];

				// '<img class="imagen" src="images/dia_00005.jpg" alt="dia 1" width="400">',
				// '<img class="imagen" src="images/dia_00006.jpg" alt="dia 1" width="400">'
				// '<video width="400" controls><source src="videos/video_001.mp4"></video>',
var contenedor = $('.ventana')
var elem

var template = function(data) {
	// $('imagen')
	// $('<ul></ul>').prependTo(contenedor);
	// elem = data;
	// $(imagenes[pagination.pageNumber]).prependTo(contenedor);



	// $.each(imagenes, function(index, val) {
	// 	 /* iterate through array or object */
	// 	 // val = imagenes[index];
	// 	 // contenedor.find('ul').append('<li>' + val + '</li>');
		 
	// 	 $(val).prependTo(contenedor);
	// });		

}

contenedor.pagination({
    dataSource: [5, 10, 15, 4, 5, 6, 7, 8],
    // dataSource: imagenes,
    pageSize: 1,
    pageRange: 1,
    showGoInput: true,
    showGoButton: true,
    formatNavigator: '<%= currentPage %> / <%= totalPage %>',
    callback: function(data, pagination) {

        var html = template(data);
        contenedor.html(html);
		// data = imagenes[pagination.pageNumber];
		// contenedor.prepend(data)        
    }
})
