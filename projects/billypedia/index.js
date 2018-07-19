/* global $ _ opspark */

$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        $("#section-bio").css("color", "green");
        $('#section-praise').css("color", "green");
        $("#section-quotes").css('color', "green");
        $("h3").css('color', 'Black');
        $("#section-bio").css("font-style", "italic");
        $('#section-quotes').css("font-style", "italic")
        
        
        
        // uncomment this to inspect all available data; delete when done //
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        let topRated = data.discography.topRated;
        let $div4pic = $('<div>').attr('id', 'image-container-top-rated').attr('class', 'image-container')
        let $img4TR = $('<img>').attr('id', 'top-rated-image').attr('src', topRated[0].art)
        $('#section-top-rated').prepend($div4pic.append($img4TR));
        ($('#list-top-rated')).append(_.map(topRated, (record, i) => {
            // let $li = $("<li>").attr("class", 'top-rated');
            // $li.append('<div id = "record">' + record.title + '</div>').appendTo($('#list-top-rated'));
            let $li = $('<li>').attr("class", 'top-rated').attr('src', record.art).attr('id', i).text(record.title)
            // $li.append('<div id = "record">' + record.title + '</div>')
            // $li.append('<div id = "art">' + record.art + '</div>')
            $li.css('minHeight', '50px')
            return $li;
        }))
        
        let recordings = data.discography.recordings;
        let $recordingSec = $('<section>').attr('id', 'section-recordings')
        let $recordingDiv = $('<div>').attr('id', 'image-container-recording').attr('class', 'image-container')
        let $img4Recs = $('<img>').attr('id', 'recording-image').attr('src', recordings[0].art)
        $recordingSec.append($recordingDiv.append($img4Recs))
        let $ul = $('<ul id="list-recordings" class="list-recordings"></ul>');
        _.forEach(recordings, recording => {
            let $recordingLi = $("<li>").attr("class", 'recording').attr('src', recording.art)
            $recordingLi.append($('<div class = "title">Title: ' + recording.title + '</div>')).attr('id', 'recorded');
            $recordingLi.append($('<div class = "artist">Artist: ' + recording.artist + '</div>')).attr('id', 'recorded');
            $recordingLi.append($('<div class = "release">Release: ' + recording.release + '</div>')).attr('id', 'recorded');
            $recordingLi.append($('<div class = "year">Year: ' + recording.year + '</div>')).attr('id', 'recorded');
            $ul.append($recordingLi);
        })
        $('#sidebar').append($recordingSec.append($ul));
        
        $('#image-container-billy').css('minWidth', '200px').css('minHeight', '300px')
        let numClicks = 0;
        let images = data.images.billy;
        $('#image-billy').on('click', function() {
            const pacifier = opspark.makePacifier($('#image-container-billy')[0]);
            // stop the pacifier and remove it from the DOM //
            pacifier.stop();
            
            numClicks+= 1;
            if (numClicks === images.length) { numClicks = 0; }
            $(this).attr('i', '${i}');
            $(this).attr('src', images[numClicks]).hide().fadeIn(2000);
        })
        
        let trUl = document.getElementById('list-top-rated')
        //  console.log(trUl)
        trUl.addEventListener('click', e => {
            // console.log(e.target)
            $('#top-rated-image').attr('src', $(e.target).attr('src'))
        })
        
        let recUl = document.getElementById('list-recordings')
        // console.log(recUl)
        recUl.addEventListener('click', e => {
            // console.log(e.target.nodeName)
            $('#recorded').css('pointer-events', 'none')
            $('#recording-image').attr('src', $(e.target).attr('src'))
            // console.log(e.target.children)
        })
        // $('div').on('click', function(e) {
        //     console.log($(this))
        // })
        // Add a click command to the li's that have a class of top-rated
        // $('li').on('click', () => {
        //     // get the art for the clicked li
        //     console.log($('li').attr('id'));
        //     // change the img with id of top-rated-image to the art for the clicked li
        // })
        // YOUR CODE ABOVE HERE //
        
        const generateTable = (rider) => {
            const tableRow = (instrument) => {
                let $tRow = $('<tr>'); 
                let $type = $('<td>').text(instrument.type);
                let $spec = $('<td>').text(instrument.desc);
                $tRow.append($type).append($spec);
                return $tRow;
            }
            let $riderTable = $('<table>');
            let $rows = _.map(rider, tableRow);
            $riderTable.append($rows);
            return $riderTable;
        }
        generateTable(data.rider).appendTo('body');
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


