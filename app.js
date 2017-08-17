var database = firebase.database().ref();

function updateDB(){
    var name = $("#name").val();
    var score = points;

    var value = {
        NAME: name,
        SCORE: score
    }
    database.push(value)
}

database.on("child_added", function(rowData){
    var row = rowData.val();
    var name = row.NAME;
    var score = row.SCORE;
    var fulltext = "<tr><td>"+name+"</td><td>"+score+"</td></tr>";
    $("#realb").append(fulltext);
});

var points = 0;
var correct = 0;
var incorrect = 0;

function setup(){

    
    $('#score').html(points);
    $('#leaderboards').hide();
    $('.Leaderboard').hide();
    $('#cates').hide();
    $('#logo').hide();
    $('.breaddd').hide();
    $('.Search').hide();
    $('#bar').hide();
    $('#mathey').hide();
    $('#addthat').hide();
    $('#newmath').hide();
    $('#mathscore').hide();
    $('#ubbtt').hide();
    $('#subthat').hide();
    $('#multithat').hide();
    $('#ubbtt1').hide();
    $('#ubbtt2').hide();
    $('#backc').hide();

    var words = ["cat", "dog", "rat", "mouse", "hamster","summer","stall","throughput","operator","darling","whale","bell","water","boat","beach"]

    var random = words[Math.floor(Math.random() * 15)];

    var sounding = new Audio('audio/none.mp3');

    var yourright = new Audio('audio/yourright.mp3');


    var yourwrong = new Audio('audio/fail/yourwrong.mp3');
    var frog = new Audio('audio/fail/frogfail.mp3');
    var trombo = new Audio('audio/fail/sadtrombone.mp3')

    var failsound = [yourwrong,frog,trombo];

    $('#start').click(function(){
        $('#firstJumbo').css("padding-bottom", "130px");
        $('#firstJumbo').css("padding-top", "20px");
        $('#particles-js').css("height", "65vh");

        $('#start').hide();

        $('#cates').show();
    });

    $('#math').click(function(){
        $('#cates').hide();
        $('#mathey').show();
        $('#ubbtt1').show();
    });

    $('#add').click(function(){
        $('#mathey').hide();
        $('#addthat').show();
        $('#problem').html(add1 + ' + ' + add2 + " = ");
        $('#mathscore').show();
        $('#correctss').html(correct);
        $('#incorrectss').html(incorrect);
        $('#ubbtt').show();
        $('#addii').show();
        $('#newmath').hide();
        $('#ubbtt1').hide();
    })

    $('#ubbtt').click(function(){
        $('#mathey').show();
        $('#subthat').hide();
        $('#addthat').hide();
        $('#multithat').hide();
        $('#mathscore').hide();
        $('#ubbtt').hide();
        $('#ubbtt1').show();
        $('.panel-body').css('background-color', 'white');
        $('#botRow').css('background-color', 'white');
    })

    $('#ubbtt1').click(function(){
        $('#mathey').hide();
        $('#cates').show();
        $('#ubbtt1').hide();
    })

    $('#sub').click(function(){
        $('#mathey').hide();
        $('#subthat').show();
        $('#problem1').html(sub1 + ' - ' + sub2 + " = ");
        $('#mathscore').show();
        $('#correctss').html(correct);
        $('#incorrectss').html(incorrect);
        $('#ubbtt').show();
        $('#newmath1').hide();
        $('#subii').show();
        $('#ubbtt1').hide();
    })

    $('#multi').click(function(){
        $('#mathey').hide();
        $('#multithat').show();
        $('#problem2').html(mul1 + ' x ' + mul2 + " = ");
        $('#mathscore').show();
        $('#correctss').html(correct);
        $('#incorrectss').html(incorrect);
        $('#ubbtt').show();
        $('#newmath2').hide();
        $('#multiii').show();
        $('#ubbtt1').hide();
    })

    $('#ubbtt2').click(function(){
        $('#cates').show();
        $('.breaddd').hide();
        $('#bar').hide();
        $('#ubbtt2').hide();
    })

    $('#subatt').click(function(){
        var attempt = document.getElementById("subans").value;
        if(attempt == subsol){
            $('#subatt').hide();
            $('#problem1').append(subsol);
            $('#newmath1').show();
            $('#subans').hide();
            correct = correct + 1;
            $('#correctss').html(correct);
            yourright.play();
            $('.panel-body').css('background-color', '78f177');
            $('#botRow').css('background-color', '78f177');
            $('#ubbtt').hide();
        }else{
            incorrect = incorrect + 1;
            $('#incorrectss').html(incorrect);
            var playafail = failsound[Math.floor(Math.random()*3)];
            playafail.play();
            $('.panel-body').css('background-color', 'red');
            $('#botRow').css('background-color', 'red');
            $('#ubbtt').hide();
        }
    });
    
    $('#multiatt').click(function(){
        var attempt = document.getElementById("multians").value;
        if(attempt == mulsol){
            $('#multiatt').hide();
            $('#problem2').append(mulsol);
            $('#newmath2').show();
            $('#mulans').hide();
            correct = correct + 1;
            $('#correctss').html(correct);
            yourright.play();
            $('.panel-body').css('background-color', '78f177');
            $('#botRow').css('background-color', '78f177');
            $('#ubbtt').hide();
            $('#multiii').hide();
        }else{
            incorrect = incorrect + 1;
            $('#incorrectss').html(incorrect);
            var playafail = failsound[Math.floor(Math.random()*3)];
            playafail.play();
            $('.panel-body').css('background-color', 'red');
            $('#botRow').css('background-color', 'red');
            $('#ubbtt').hide();
        }
    });

    $('#newmath1').click(function(){
        $('#newmath1').hide();
        $('#subatt').show();
        sub1 = Math.floor(Math.random()*50);
        sub2 = Math.floor(Math.random()*50);
        subsol = sub1 - sub2;
        $('#problem1').html(sub1 + ' - ' + sub2 + " = ");
        $('#subans').show();
        $('.panel-body').css('background-color', 'white');
        $('#botRow').css('background-color', 'white');
        $('#ubbtt').show();
    })

    $('#newmath2').click(function(){
        $('#newmath2').hide();
        $('#multiatt').show();
        mul1 = Math.floor(Math.random()*50);
        mul2 = Math.floor(Math.random()*50);
        mulsol = mul1 * mul2;
        $('#problem2').html(mul1 + ' x ' + mul2 + " = ");
        $('#multians').show();
        $('.panel-body').css('background-color', 'white');
        $('#botRow').css('background-color', 'white');
        $('#ubbtt').show();
        $('#multiii').show();
    })

    var add1 = Math.floor(Math.random()*50);
    var add2 = Math.floor(Math.random()*50);
    var sub1 = Math.floor(Math.random()*50);
    var sub2 = Math.floor(Math.random()*50);
    var mul1 = Math.floor(Math.random()*25);
    var mul2 = Math.floor(Math.random()*25);
    var solution = add1 + add2;
    var subsol = sub1 - sub2;
    var mulsol = mul1*mul2;

    $('#addatt').click(function(){
        var attempt = document.getElementById("addans").value;
        if(attempt == solution){
            $('#addatt').hide();
            $('#problem').append(solution);
            $('#newmath').show();
            $('#addans').hide();
            correct = correct + 1;
            $('#correctss').html(correct);
            yourright.play();
            $('.panel-body').css('background-color', '78f177');
            $('#botRow').css('background-color', '78f177');
            $('#ubbtt').hide();
        }else{
            incorrect = incorrect + 1;
            $('#incorrectss').html(incorrect);
            var playafail = failsound[Math.floor(Math.random()*3)];
            playafail.play();
            $('.panel-body').css('background-color', 'red');
            $('#botRow').css('background-color', 'red');
            $('#ubbtt').hide();
        }
    });

    $('#newmath').click(function(){
        $('#newmath').hide();
        $('#addatt').show();
        add1 = Math.floor(Math.random()*50);
        add2 = Math.floor(Math.random()*50);
        solution = add1 + add2;
        $('#problem').html(add1 + ' + ' + add2 + " = ");
        $('#addans').show();
        $('.panel-body').css('background-color', 'white');
        $('#botRow').css('background-color', 'white');
        $('#ubbtt').show();
    })

    $('#read').click(function(){
        $('#cates').hide();
        $('.breaddd').show();
        $('#bar').show();
        $('#ubbtt2').show();
        $('#wordran').html(random);
        
                if (random === "cat") {
                    $('#defini').html("Definition: a small domesticated carnivorous mammal with soft fur, a short snout and retractile claws. Normally kept as a pet.");
                    $('#pronounce').html("Pronunciation: /kat/");
                    sounding = new Audio('audio/cat.mp3');
                }
                if (random === "dog") {
                    $('#defini').html("Definition: a domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, and a barking, howling, or whining voice. It is widely kept as a pet or for work or field sports.");
                    $('#pronounce').html("Pronunciation: /dog/");
                    sounding = new Audio('audio/dog.mp3');
                }
                if (random === "hamster") {
                    $('#defini').html("Definition: a solitary burrowing rodent with a short tail and large cheek pouches for carrying food, native to Europe and northern Asia.");
                    $('#pronounce').html("Pronunciation: /hamster/");
                    sounding = new Audio('audio/hamster.mp3');
                }
                if (random === 'mouse') {
                    $('#defini').html("Definition: a small rodent that typically has a pointed snout, relatively large ears and eyes, and a long tail.");
                    $('#pronounce').html("Pronunciation: /mous/");
                    sounding = new Audio('audio/mouse.mp3');
        
                } if (random === "rat") {
                    $('#defini').html("Definition: a rodent that resembles a large mouse, typically having a pointed snout and a long, sparsely haired tail. Some kinds have become cosmopolitan and are sometimes responsible for transmitting diseases.");
                    $('#pronounce').html("Pronunciation: /rat/");
                    sounding = new Audio('audio/rat.mp3')
                }
                if (random === "summer") {
                    $('#defini').html("Definition: the warmest season of the year, in the northern hemisphere from June to August and in the southern hemisphere from December to February.");
                    $('#pronounce').html("Pronunciation: /sumer/");
                    sounding = new Audio('audio/summer.mp3')
                }
                if (random === "stall") {
                    $('#defini').html("Definition: a stand, booth, or compartment for the sale of goods in a market or large covered area.");
                    $('#pronounce').html("Pronunciation: /stal/");
                    sounding = new Audio('audio/stall.mp3')
                }
                if (random === "throughput") {
                    $('#defini').html("Definition: the amount of material or items passing through a system or process.");
                    $('#pronounce').html("Pronunciation: /THroo,poot/");
                    sounding = new Audio('audio/throughput.mp3')
                }
                if (random === "operator") {
                    $('#defini').html("Definition: a person who operates equipment or a machine.");
                    $('#pronounce').html("Pronunciation: /aperater/");
                    sounding = new Audio('audio/operator.mp3')
                }
                if (random === "darling") {
                    $('#defini').html("Definition: used as an affectionate form of address to a beloved person.");
                    $('#pronounce').html("Pronunciation: /darrliNG/");
                    sounding = new Audio('audio/darling.mp3')
                }
                if (random === "whale") {
                    $('#defini').html("Definition: a very large marine mammal with a streamlined hairless body, a horizontal tail fin, and a blowhole on top of the head for breathing.");
                    $('#pronounce').html("Pronunciation: /hweyl/");
                    sounding = new Audio('audio/whale.mp3')
                }
                if (random === "bell") {
                    $('#defini').html("Definition: a hollow instrument of cast metal, typically cup-shaped with a flaring mouth, suspended from the vertex and rung by the strokes of a clapper, hammer, or the like.");
                    $('#pronounce').html("Pronunciation: /bel/");
                    sounding = new Audio('audio/bell.mp3')
                }
                if (random === "water") {
                    $('#defini').html("Definition: a transparent, odorless, tasteless liquid, a compound of hydrogen and oxygen, H2O, freezing at 32 degrees F or 0 degrees C and boiling at 212 degrees F or 100 degrees C, that in a more or less impure state constitutes rain, oceans, lakes, rivers, etc.");
                    $('#pronounce').html("Pronunciation: /waw-ter/");
                    sounding = new Audio('audio/water.mp3')
                }
                if (random === "boat") {
                    $('#defini').html("Definition: a vessel for transport by water, constructed to provide buoyancy by excluding water and shaped to give stability and permit propulsion.");
                    $('#pronounce').html("Pronunciation: /boht/");
                    sounding = new Audio('audio/boat.mp3')
                }
                if (random === "beach") {
                    $('#defini').html("Definition: the part of the shore of an ocean, sea, large river, lake, etc., washed by the tide or waves.");
                    $('#pronounce').html("Pronunciation: /beech/");
                    sounding = new Audio('audio/beach.mp3')
                }
        
    })

    $('#practice').click(function(){
        $('#wordran').hide();
        $('#pronounce').empty();
        $('.Search').show();
        $('#attempt').show();
        $('#practice').hide();
        $('#new').hide();
        $("#userInput").show();
        $('#ubbtt2').hide();
        $('.textContainer').show();
        $('.GObutton').show();
        $('#subfire').show();
        $('#importo').show();
        $('#usure').show();
    })

    $('#new').click(function () {
        random = words[Math.floor(Math.random() * 15)];

        $('#audio').show();

        $('#wordran').html(random);
        $('#wordran').show();
        $('#practice').show();
        $('.panel-body').css('background-color', 'white');
        $('#botRow').css('background-color', 'white');
        $('#ubbtt2').show();
        $('#leaderboards').hide();

        if (random === "cat") {
            $('#defini').html("Definition: a small domesticated carnivorous mammal with soft fur, a short snout and retractile claws. Normally kept as a pet.");
            $('#pronounce').html("Pronunciation: /kat/");
            sounding = new Audio('audio/cat.mp3');
        }
        if (random === "dog") {
            $('#defini').html("Definition: a domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, and a barking, howling, or whining voice. It is widely kept as a pet or for work or field sports.");
            $('#pronounce').html("Pronunciation: /dog/");
            sounding = new Audio('audio/dog.mp3');
        }
        if (random === "hamster") {
            $('#defini').html("Definition: a solitary burrowing rodent with a short tail and large cheek pouches for carrying food, native to Europe and northern Asia.");
            $('#pronounce').html("Pronunciation: /hamster/");
            sounding = new Audio('audio/hamster.mp3');
        }
        if (random === 'mouse') {
            $('#defini').html("Definition: a small rodent that typically has a pointed snout, relatively large ears and eyes, and a long tail.");
            $('#pronounce').html("Pronunciation: /mous/");
            sounding = new Audio('audio/mouse.mp3');

        } if (random === "rat") {
            $('#defini').html("Definition: a rodent that resembles a large mouse, typically having a pointed snout and a long, sparsely haired tail. Some kinds have become cosmopolitan and are sometimes responsible for transmitting diseases.");
            $('#pronounce').html("Pronunciation: /rat/");
            sounding = new Audio('audio/rat.mp3')
        }
        if (random === "summer") {
            $('#defini').html("Definition: the warmest season of the year, in the northern hemisphere from June to August and in the southern hemisphere from December to February.");
            $('#pronounce').html("Pronunciation: /sumer/");
            sounding = new Audio('audio/summer.mp3')
        }
        if (random === "stall") {
            $('#defini').html("Definition: a stand, booth, or compartment for the sale of goods in a market or large covered area.");
            $('#pronounce').html("Pronunciation: /stal/");
            sounding = new Audio('audio/stall.mp3')
        }
        if (random === "throughput") {
            $('#defini').html("Definition: the amount of material or items passing through a system or process.");
            $('#pronounce').html("Pronunciation: /THroo,poot/");
            sounding = new Audio('audio/throughput.mp3')
        }
        if (random === "operator") {
            $('#defini').html("Definition: a person who operates equipment or a machine.");
            $('#pronounce').html("Pronunciation: /aperater/");
            sounding = new Audio('audio/operator.mp3')
        }
        if (random === "darling") {
            $('#defini').html("Definition: used as an affectionate form of address to a beloved person.");
            $('#pronounce').html("Pronunciation: /darrliNG/");
            sounding = new Audio('audio/darling.mp3')
        }
        if (random === "whale") {
            $('#defini').html("Definition: a very large marine mammal with a streamlined hairless body, a horizontal tail fin, and a blowhole on top of the head for breathing.");
            $('#pronounce').html("Pronunciation: /hweyl/");
            sounding = new Audio('audio/whale.mp3')
        }
        if (random === "bell") {
            $('#defini').html("Definition: a hollow instrument of cast metal, typically cup-shaped with a flaring mouth, suspended from the vertex and rung by the strokes of a clapper, hammer, or the like.");
            $('#pronounce').html("Pronunciation: /bel/");
            sounding = new Audio('audio/bell.mp3')
        }
        if (random === "water") {
            $('#defini').html("Definition: a transparent, odorless, tasteless liquid, a compound of hydrogen and oxygen, H2O, freezing at 32 degrees F or 0 degrees C and boiling at 212 degrees F or 100 degrees C, that in a more or less impure state constitutes rain, oceans, lakes, rivers, etc.");
            $('#pronounce').html("Pronunciation: /waw-ter/");
            sounding = new Audio('audio/water.mp3')
        }
        if (random === "boat") {
            $('#defini').html("Definition: a vessel for transport by water, constructed to provide buoyancy by excluding water and shaped to give stability and permit propulsion.");
            $('#pronounce').html("Pronunciation: /boht/");
            sounding = new Audio('audio/boat.mp3')
        }
        if (random === "beach") {
            $('#defini').html("Definition: the part of the shore of an ocean, sea, large river, lake, etc., washed by the tide or waves.");
            $('#pronounce').html("Pronunciation: /beech/");
            sounding = new Audio('audio/beach.mp3')
        }

        $('.Search').hide();
    })

    // checks user input on click button or submit
    $('#attempt').click(function () {
        var userInput = document.getElementById("userInput").value;


        if(userInput === random){
            points = points + 10;
            $('#score').html(points);
            $('#attempt').hide();
            $('#new').show();
            $("#userInput").hide();
            $('.panel-body').css('background-color', '78f177');
            $('#botRow').css('background-color', '78f177');
            yourright.play();
        }else{
            points = points - 5;
            $('#score').html(points);
            $('.panel-body').css('background-color', 'red');
            $('#botRow').css('background-color', 'red');
            var playafail = failsound[Math.floor(Math.random()*3)];
            playafail.play();
        }
        userInput = '';

    });
    $('#leaderboards').click(function(){
        $('.breaddd').hide();
        $('#bar').hide();
        $('.Search').hide();
        $('.Leaderboard').show();
        $('#backc').show();
    });

    $('#backc').click(function(){
        $('.Leaderboard').hide();
        $('.Search').show();
        $('.breaddd').show();
        $('#backc').hide();
        $('#bar').show();
        $('.panel-body').css('background-color', 'white');
        $('#botRow').css('background-color', 'white');
        $('#defini').html('Press "New Word" to continue!');
        $('#pronounce').html(" ");
        $('#audio').hide();
        $('.textContainer').hide();
        $('.GObutton').hide();
        points = 0;
        $('#score').html(points);
        $('#new').show();
    })

    $('#subfire').click(function(){
        $('#leaderboards').show();
        $('.textContainer').hide();
        $('#subfire').hide();
        $('#importo').hide();
        $('#usure').hide();
        $('#new').hide();
    });

    $('#divi').click(function(){
        alert("Currently Unavailable");
    })

    $('#audio').click(function(){
        sounding.play();
    })

}



$(document).ready(setup);


