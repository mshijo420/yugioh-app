$(document).ready(()=>{

    //duel engine
    const duelEngine = (duelistOne, duelistTwo)=> {

        let duelist1Lp = 8000;
        let duelist2Lp = 8000;

        $('.dOneN').html(duelistOne);
        $('.dTwoN').html(duelistTwo);
        $('.dOneLp').html(duelist1Lp);
        $('.dTwoLp').html(duelist2Lp);

        //damage calculation for duelist1
        $('.damageOne').on('click', ()=>{

            const damage = parseInt($('.index').val());
            const lifePoints = duelist1Lp - damage;
            if(lifePoints > 0) {
                $('.dOneLp').html(lifePoints);
                duelist1Lp = lifePoints;
            } else {
                $('.dOneLp').html('0');
                $('.indexZone').html(`
                <h3>Winner:</h3>
                <h1 id="winner">${duelistTwo}</h1>`);
                const duel = {
                    duelistOne: $('.dOneN').text(),
                    duelistTwo: $('.dTwoN').text(),
                    lifePoinstDO: parseInt($('.dOneLp').text()),
                    lifePointsDT: parseInt($('.dTwoLp').text()),
                    duelDate: new Date,
                    duelWinner: $('#winner').text()
                };
                
                $.ajax({
                    type: 'POST',
                    url: 'yugiohapp',
                    data: duel,
                    success: (data)=> {
                        alert('duel posted with success:' + data);
                        console.log(data);
                    }
                });
                $('#myModal').css('display', 'none');
            }

        });

        //damage calculation for duelist2
        $('.damageTwo').on('click', ()=>{

            const damage = parseInt($('.index').val());
            const lifePoints = duelist2Lp - damage;
            if(lifePoints > 0) {
                $('.dTwoLp').html(lifePoints);
                duelist2Lp = lifePoints;
            } else {
                $('.dTwoLp').html('0');
                $('.indexZone').html(`
                <h3>Winner:</h3>
                <h1 id="winner">${duelistOne}</h1>`);
                const duel = {
                    duelistOne: $('.dOneN').text(),
                    duelistTwo: $('.dTwoN').text(),
                    lifePoinstDO: parseInt($('.dOneLp').text()),
                    lifePointsDT: parseInt($('.dTwoLp').text()),
                    duelDate: new Date,
                    duelWinner: $('#winner').text()
                };
                
                $.ajax({
                    type: 'POST',
                    url: 'yugiohapp',
                    data: duel,
                    success: (data)=> {
                        alert('duel posted with success:' + data);
                        console.log(data);
                    }
                });
                $('#myModal').css('display', 'none');
            }

        });

        //increase for duelist1
        $('.increaseOne').on('click', ()=>{
            const increase = parseInt($('.index').val());
            const lifePoints = duelist1Lp + increase;
            $('.dOneLp').html(lifePoints);
            duelist1Lp = lifePoints;
        });

        //increase for duelist2
        $('.increaseTwo').on('click', ()=>{

            const increase = parseInt($('.index').val());
            const lifePoints = duelist2Lp + increase;
            $('.dTwoLp').html(lifePoints);
            duelist2Lp = lifePoints;

        });
    }


    //logo effect when the page loads
    $('#yugiohLogo').animate({opacity: '1'}, 'slow');

    //send duelist's name to the duel function and 
    $('.boTop').on('click', function(){

        const duelistOne = $('.dOne').val();
        const duelistTwo = $('.dTwo').val();
        $('#myModal').css('display', 'block');
        duelEngine(duelistOne, duelistTwo);

    });

});