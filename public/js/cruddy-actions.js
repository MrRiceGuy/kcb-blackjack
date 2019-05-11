if(document.getElementById('cruddy-test-suite')){
    console.log('cruddy page');

    var table = document.getElementById('cruddy-test-table');

    table.addEventListener('click', function(event){
        event.preventDefault();
        var target = event.target;

        if(target.tagName == 'BUTTON'){
            var id = target.parentNode.parentNode.id;

            if(target.className == 'update-cruddy'){
                console.log(`updating person with id ${id}`);
                PostData('/test-cruddy-update', {
                    id : id,
                    firstName : target.parentNode.parentNode.getElementsByClassName('')[0],
                    lastName : target.parentNode.parentNode.getElementsByClassName('')[0]
                }, function(response){

                });
            }else if(target.className == 'delete-cruddy'){
                console.log(`deleting person with id ${id}`);
                PostData('/test-cruddy-delete', 
                {
                    id : id 
                }, function(response){
                    console.log(response);
                    if(response.success){
                        document.getElementById(id).remove();
                    }else{
                        console.log(response.exception);
                    }
                });
            }
        }
    });

    function PostData(url, args, callback){
        fetch(url, {
            method : 'POST',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(args)
        })
        .then(response => response.json())
        .then(response => callback(response));
    };
}