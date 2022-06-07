function passmatch()
        {
			var passwordone=document.f1.password.value;
			var passwordtwo=document.f1.password2.value;
			if(passwordone==passwordtwo){
				return true;
			}
			else{
				alert("Please enter a password");
				return false;
			}
		}