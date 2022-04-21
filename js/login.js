function loginValue()
		{
			var n = 0;
			while(n==0)
			{
				var password = document.getElementById("password").value;

				 var y = document.getElementById("clear");
					var z = document.getElementById("all");			
				if(password=="03052003")
				{
					alert('Oke, pass chị nhập đã chính xác!!!');
							y.remove(y);
							z.style.display = 'block';
							document.getElementById("player").play();
							n = n + 1;
					 return false;
				}
				else{
					alert("Pass chị nhập sai rồi, pass có 8 kí tự nha!");
					n = 0;
					return false;
				}
			}
		}
			
