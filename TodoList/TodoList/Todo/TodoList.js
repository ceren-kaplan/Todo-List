$(function () {
    $("#butonEkle").click(function () {
        var eklenenKategori = $('#eklenenKategori').val();
        var eklenenIcerik = $('#eklenenIcerik').val();
        if (eklenenKategori.length != 0 && eklenenIcerik.length != 0) {
            $("#tabloGorevler").append("<tr class='gorevler'><td>" + eklenenKategori + "</td><td>" + eklenenIcerik + "</td>/tr>")
            $('#eklenenKategori').val("");
            $('#eklenenIcerik').val("");

        }
        else {
            alert("Gerekli Alanlari Doldurunuz!");
        }
    });
   
    $(document).on('click', '.gorevler', function () {
        if ($(this).css('text-decoration-line') == "none")
            $(this).css('text-decoration-line', 'line-through');
        else
            $(this).css('text-decoration-line', 'none');
    });

    $("#butonTemizle").click(function () {
        $(".gorevler").html("");
        
    })

    
});