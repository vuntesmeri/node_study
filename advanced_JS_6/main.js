		const IpBtn = document.getElementById('ip-btn');
		const Info = document.getElementById('ip-info');
		
		IpBtn.addEventListener('click', async () => {
			try {
				const response = await fetch('https://api.ipify.org/?format=json');
				const data = await response.json();
				const ip = data.ip;
				console.log(ip)
				
				const responseInfo = await fetch(`http://ip-api.com/json/${ip}?fields = continent,country,regionName,city,district`);
				const dataInfo = await responseInfo.json();
				
				Info.innerHTML = 
				`<ul>
                    <li>Континент: ${dataInfo.continent}</li>
					<li>Країна: ${dataInfo.country}</li>
					<li>Регіон: ${dataInfo.regionName}</li>
					<li>Місто: ${dataInfo.city}</li>
					<li>Район: ${dataInfo.district}</li>
					</ul>
				`;
			} catch (error) {
				console.error(error);
				ipInfoDiv.innerHTML = '<p>Помилка при отриманні інформації про IP адресу.</p>';
			}
		});