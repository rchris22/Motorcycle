let process = {
	menu:function(){
		let content = <div>
		<div className="navbar">
              <div className="navbar-inner">
                <div className="center">Motorcycle 	Best Seller</div>
              </div> 
            </div>
		
			<ul>
				<p>SUZUKI BRAND</p>
				<li><a href='#' onClick={process.page1}> Raider Satria 150</a></li>
				<li><a href='#' onClick={process.page2}> Smash 115</a></li>
				<li><a href='#' onClick={process.page3}> Sky Drive 125</a></li>

				<p>HONDA BRAND</p>
				<li><a href='#' onClick={process.page4}> TMX 155 </a></li>
				<li><a href='#' onClick={process.page5}> TMX 125 </a></li>
				<li><a href='#' onClick={process.page6}> Wave Alpha 125 </a></li>
				<li><a href='#' onClick={process.page7}> Honda 	Beat 125 </a></li>

				<p>YAMAHA BRAND</p>
				<li><a href='#' onClick={process.page8}> Mio Sporty </a></li>
				<li><a href='#' onClick={process.page9}> Mio 125 </a></li>
				<li><a href='#' onClick={process.page10}> MioSoul i 125 </a></li>
				<li><a href='#' onClick={process.page11}> N-Max 155 </a></li>
			</ul>
		</div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		let content = <div>
				
	<img src='img/s1.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
	<br/><b>Raider Satria 150</b> <br/>
		The new Satria F150 is upgraded with a fuel-injected engine as the current model uses a carburettor. The 147.3 cc single-cylinder liquid-cooled engine with DOHC and four-valves, is unchanged. It continues to have a bore diameter of 62.0 mm and a stroke length of 48.8 mm, but the addition of an ECM (Engine Control Module) and a fuel injection system make it more finely tunable.
		The air-cooled engine on the new Satria has achieved a higher compression ratio of 11.5:1 compared to the carbureted version’s 10.2:1. The new Satria has an output of 18.3 PS at 10,000 rpm and 13.8 Nm at 5,000 rpm, which is a bump up from the current version’s 15.6 PS at 9,500 rpm and 12.5 Nm at 8,000 rpm. 
			</div>;
			ReactDOM.render(content,document.getElementById('root'));

	},
	page2:function(){
			let content = <div>
				<img src='img/s2.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
				 <br/><b>Smash 115</b><br/>
		The ALL-NEW Smash 115 has a GSX-R inspired body design detailed with high quality and robust features that will definitely give you a cool ride. It features a sportbike-inspired design with a host of high-quality details giving you total riding satisfaction and sporty image. It also features a durable Dunlop tires fitted on a sporty mag wheels for added sporty look and more stable ride.			
		With key specifications of 26 caster angle, 64mm trail and 1,240mm wheelbase, the ALL-NEW Smash 115 delivers a user-friendly combination of smooth handling and comfortable straight-line running in various riding conditions.
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	
		
	},
	page3:function(){
		let content = <div>

			<img src='img/s3.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
		<br/><b>Sky Drive 125</b>
The New SkyDrive 125 is packed with speed producing features. From its Innovative and Sleek Aerodynamic Design to its Responsive Super CVT engine, the New Sky Drive will definitely generate thrill and excitement.			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		
	},
	page4:function(){
		let content = <div>
				
				<img src='img/tmx155.png' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>TMX 155</b><br/>
				The Honda TMX 155 model is a Allround bike manufactured by Honda . In this version sold from year 2013 , the dry weight is 108.3 kg (238.8 pounds) and it is equiped with a Single cylinder, four-stroke motor. The engine produces a maximum peak output power of 12.46 HP (9.1 kW) @ 8000 RPM and a maximum torque of 12.10 Nm (1.2 kgf-m or 8.9 ft.lbs) @ 6500 RPM . With this drive-train, the Honda TMX 155 is capable of reaching a maximum top speed of. Stock tire sizes are 3.00-17 on the front, and 3.00-17 on the rear. As for stopping power, the Honda TMX 155 braking system includes Expanding brake (drum brake) size  at the front and Expanding brake (drum brake) size  at the rear. 			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},

	page5:function(){
		let content = <div>
				
				<img src='img/tmx125.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>TMX 125</b><br/>
			The Honda TMX 125 Alpha is the output of the Honda motorcycle is equipped with modern tech features such as:
			Electric Starter: No hassle because easy to operate in one click.
			Engine Switch: Really safe transport strikes due to rapid killing machine if needed.
			Provision for 2nd Shock Absorber: May watch for extra shock when fitted with sidecar.
			Fuel Tank Design: For traditional TMX Classic Fuel tank.
			Needle Carburetor Type: Conventional Carburetor be tested and reliable.
			Sidecar Collar: Specifically prepared for safe installation and at least cost to the sidecar
			The New Honda TMX 125 Alpha Equipped with engine capacity of 124, 11 cc, 4-Stroke, Air-Cooled, OHV is juxtaposed with a 6-speed transmission. The machine is capable of spewing power to reach 7.21kW at 8000 rpm and torque 9.36 Nm at 6500 rpm.			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	

	page6:function(){
		let content = <div>
				
				<img src='img/wave125.png' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>Wave Alpha 125</b><br/>
			Despite leading in most of the two-wheeler segments, Honda has struggled a bit in gaining an impressive response in the underbone segment. Among the number of options available in the underbone category of the company, the Wave 125 Alpha is the strongest contender. This bike is specifically designed to compete against the other light weight bikes of the segment. Thus, the Japanese manufacturer has equipped it with a light engine under its compact frame. Since its advent in 2000, it has managed to grab a good amount of loyal customers due to its unmatched durability and practicality. Though the design and engine performance are not very impressive, it’s the value for money characteristics of the bike that makes it a hot-seller.		
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},


	page7:function(){
		let content = <div>
				
				<img src='img/hondabeat.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>Honda Beat 125</b><br/>
			Rate motorcycles you know and help your fellow riders to find the bike that is right for them. Bikez has the most users and the most extensive motorcycle rating on the net. It includes reliability, design, engine performance, accident risk, repair cost, offroad capabilities, racing track capabilities and touring capabilities.	The ratings are also used to rank the 100 most popular MC models each year since 1990. The lists	are adjusted weekly as new ratings are added. You can check out the rating of the 2013 Honda BeAT Scooter and compare it to other bikes here.			
			</div>;			
			ReactDOM.render(content,document.getElementById('root'));
	},

	page8:function(){
		let content = <div>
				
				<img src='img/mio.png' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>Mio Sporty</b><br/>
			Mio Sporty motor matic is the latest, which features artistic graphics that suit the tastes of young consumers. Graphic Mio Sporty line combines pop art with a touch more luxurious and charming. Graphic theme is pop art fantasy featuring the artistic line with glowing energy. Latest graphics this time is placed on the front and rear body cover. Mio Sporty New, providing in five colors namely blue, red, green, black and white. For Mio Sporty blue, red and green, the color matching the base color graphics. While Mio Sporty white, green graphics and purple graphics placed on the Mio Sporty hitam.Untuk color specifications and price Yamaha Mio Sporty is automatic, built by engine type 4 Step 2 Valve SOHC and fan cooled. 8.35 hp maximum power at 8,000 rpm and maximum torque of 7.84 Nm at 7,000 Mio	
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},


	page9:function(){
		let content = <div>
				
				<img src='img/yamaha mio125.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>Mio 125</b><br/>
		It’s time for an Extraordinary You! The new Mio i 125, for the rider that aspires to be better. Slim detail and compact frame, it is conceptualized with an M-Shaped design that is emphasized by a front face and lighting that accentuates the model shape. A freshly re-imagined combination of power maximized with reduced weight. Pushing for a better you and allows you to do more than ever before.			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},

	page10:function(){
		let content = <div>
				
				<img src='img/Yamaha MioSoul i 125.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>MioSoul i 125</b><br/>
	Mio Soul i commences the era of Yamaha FI. The Future Innovation. It is the absolute amalgamation of technology, sports, style and veraitality. Involve in this evaluation. Hail Mio Soul i as the Genius Soulution			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},


	page11:function(){
		let content = <div>
				
				<img src='img/Yamaha-N-Max Yamaha155-cc.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>N-Max 155</b><br/>
	The Yamaha NMAX creates a new and superb feeling in your daily trip on the road. Experience enjoyment that stands out when the usual city commute you endure becomes a ride to look forward to. A sporty urban commuter that has many firsts that is built to last, it is specifically designed to give pure performance with outstanding fuel economy. Dynamic looks and outstanding global standard specification that includes a 155cc liquid cooled Blue Core Engine, VVA technology, and ABS system, the NMAX brings a premium design and comfort to your everyday ride.	
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},

	loading:function(){
		let content = <div>
					

					<div align='center'>
						<img src='img/wall.jpg' width='100%'/>
					</div>
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
		
	},
	
}
process.loading();
setTimeout(function(){
	process.menu();
},1000);