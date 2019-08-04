
var imagenUrl = '';
$(function () {


    //ConfiguracionCloudinary
    //with credentials available on
    // your cloudinary account dashboard
    $.cloudinary.config({ cloud_name: 'bambooks', api_key: '938645956677954' });

    //Upload button
    let uploaButton = $('#btn_seleccionar_imagen');
    let uploadOferta = $('#subir_oferta');


    //Upload button event
    uploaButton.on('click', function (e) {
        //Initiate upload
        cloudinary.openUploadWidget({ cloud_name: 'bambooks', upload_preset: 'Bambooks', tags: ['cgal'] },
            function (error, result) {
                if (error) console.log(error);
                //if no Error, log img data to console
                let id = result[0].public_id;
                console.log(id);
                imagenUrl = 'https://res.cloudinary.com/bambooks/image/upload/' + id;
                document.querySelector('#image_preview').src=imagenUrl;
                console.log(imagenUrl);
            });
    });

    uploadOferta.on('click',function(e){
        document.querySelector('#image_preview2').src = imagenUrl;
    });



    function processImage(id) {
        let options = {
            client_hints: true,
        };
        return $.cloudinary.url(id, options);
    };



});