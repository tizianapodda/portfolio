var open = false;

			var menuButton = document.getElementById("mobile-menu-button");
			var menu = document.getElementById("mobile-menu");
			var opacity = 0;
			var deg = 0;

			menuButton.onclick = function()
			{
				var menuButtonLines = document.getElementsByClassName("menu-button-line");
				
				if (!open)
				{
					//menuButtonLines[1].style.display = "none";
                    menuButtonLines[0].style.top = "6px";
                    menuButtonLines[1].style.bottom = "4px"
					//menuButtonLines[0].style.webkitTransform = "rotate(45deg)";
					//menuButtonLines[2].style.webkitTransform = "rotate(-45deg)";

					var animation = setInterval(animationMenu, 25);
					
					open = true;
				}
				else
				{
					//menuButtonLines[1].style.display = "block";
					menuButtonLines[0].style.webkitTransform = "rotate(0deg)";
                    menuButtonLines[0].style.top = "0px";
                    menuButtonLines[1].style.bottom = "0px";
					menuButtonLines[1].style.webkitTransform = "rotate(0deg)";

					var animation = setInterval(animationMenu, 25);

					open = false;
				}

				function animationMenu()
				{
					if (open)
					{
						if (opacity <= 1)
						{
							opacity += 0.1;
							deg += 4.0;
                            menu.style.opacity = opacity;
                            //menu.style.backgroundColor = "rgba(128,128,128," +opacity+ ")";
							menuButtonLines[0].style.webkitTransform = "rotate(" +deg+ "deg)";
							menuButtonLines[1].style.webkitTransform = "rotate(-" +deg+ "deg)";
						}
						else
						{
							clearInterval(animation);
						}
					}
					else
					{
						if (opacity >= 0)
						{
							opacity -= 0.1;
							deg -= 4.0;
							//menu.style.backgroundColor = "rgba(128,128,128," +opacity+ ")";
                            menu.style.opacity = opacity;
                            // Allow animation of theree lines in the menu button when user close menu
							//menuButtonLines[0].style.webkitTransform = "rotate(" +deg+ "deg)";
							//menuButtonLines[2].style.webkitTransform = "rotate(" +deg+ "deg)";
						}
						else
						{
							clearInterval(animation);
						}
					}
				}
			}