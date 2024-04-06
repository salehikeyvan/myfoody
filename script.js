var database=[
     {name:"keyvan", 
      password:'12'
}
	];
var feeds=[
     {name:'boby',
     timeline:"hellloooooo keyvan"
},
{

      name:'lili',
      timeline:"congrute keyvan"

}
	];
var userprompt=prompt('what is your first name?');
var passprompt=prompt('whats is your password?');


function signin(user,pass) {
    if (user===database[0].name && pass===database[0].password){
	     console.log(feeds);
    } else {alert('oops, please try again');  }}
signin(userprompt,passprompt);