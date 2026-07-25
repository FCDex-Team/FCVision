export interface Stadium {
	name: string;
	imageUrl: string;
	options: string[];
	continent: string;
	tier: number;
}

export const STADIUMS: Stadium[] = [
	{
		name: "Rungrado 1st of May Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Interior_of_the_Rungrado_1st_of_May_Stadium_1.jpg/960px-Interior_of_the_Rungrado_1st_of_May_Stadium_1.jpg",
		options: [
			"Khalifa International Stadium",
			"Incheon Munhak Stadium",
			"Rungrado 1st of May Stadium",
			"EMS Stadium",
		],
		continent: "asia",
		tier: 1,
	},
	{
		name: "Camp Nou",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Barcelona_309.JPG/960px-Barcelona_309.JPG",
		options: ["Anfield", "Camp Nou", "Kazan Arena", "Stade Roi Baudouin"],
		continent: "europe",
		tier: 1,
	},
	{
		name: "FNB Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/First_game_of_the_2010_FIFA_World_Cup%2C_South_Africa_vs_Mexico.jpg/960px-First_game_of_the_2010_FIFA_World_Cup%2C_South_Africa_vs_Mexico.jpg",
		options: [
			"National Sports Stadium",
			"FNB Stadium",
			"Cairo International Stadium",
			"Mbombela Stadium",
		],
		continent: "africa",
		tier: 1,
	},
	{
		name: "New Capital Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/New_Administrative_Capital_Stadium.jpg/960px-New_Administrative_Capital_Stadium.jpg",
		options: [
			"Ali La Pointe Stadium",
			"Cairo International Stadium",
			"New Capital Stadium",
			"National Heroes Stadium",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "Cotton Bowl Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/2019_State_Fair_Classic_01_%28Cotton_Bowl%29.jpg/960px-2019_State_Fair_Classic_01_%28Cotton_Bowl%29.jpg",
		options: [
			"Cotton Bowl Stadium",
			"Bank of America Stadium",
			"Lumen Field",
			"Estadio Cuauhtémoc",
		],
		continent: "north_america",
		tier: 1,
	},
	{
		name: "Estadio Azteca",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Panor%C3%A1mica_esquina_noreste.jpg/960px-Panor%C3%A1mica_esquina_noreste.jpg",
		options: ["Estadio Azteca", "Soldier Field", "Choctaw Stadium", "Stadium"],
		continent: "north_america",
		tier: 1,
	},
	{
		name: "Bukit Jalil National Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/National_Stadium_Bukit_Jalil_2018_AFF_Suzuki_Cup_final.png/960px-National_Stadium_Bukit_Jalil_2018_AFF_Suzuki_Cup_final.png",
		options: [
			"Bukit Jalil National Stadium",
			"Nanjing Olympic Sports Centre Stadium",
			"Jinan Olympic Sports Centre Stadium",
			"Salt Lake Stadium",
		],
		continent: "asia",
		tier: 1,
	},
	{
		name: "Borg El-Arab Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Borg_el_arab_stadium.jpg/960px-Borg_el_arab_stadium.jpg",
		options: [
			"Stade Léopold Sédar Senghor",
			"Baba Yara Stadium",
			"Kings Park Stadium",
			"Borg El-Arab Stadium",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "Estadio Mâs Monumental",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Estadio_mas_monumental.jpg/960px-Estadio_mas_monumental.jpg",
		options: [
			"Estadio Universidad San Marcos",
			"Maracanã",
			"Estadio Mâs Monumental",
			"Estadio Ciudad de Lanús – Néstor Díaz Pérez",
		],
		continent: "south_america",
		tier: 1,
	},
	{
		name: "Salt Lake Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Salt_Lake_Stadium_during_FIFA_U17_World_Cup_2017_....jpg/960px-Salt_Lake_Stadium_during_FIFA_U17_World_Cup_2017_....jpg",
		options: [
			"Guangdong Olympic Stadium",
			"Bakı Olimpiya stadionu",
			"Salt Lake Stadium",
			"Stadium Negeri Pulau Pinang",
		],
		continent: "asia",
		tier: 1,
	},
	{
		name: "Stadium Australia",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/State_of_Origin_Game_II_2018.jpg/960px-State_of_Origin_Game_II_2018.jpg",
		options: [
			"Stadium Australia",
			"Eden Park",
			"Suncorp Stadium",
			"Adelaide Oval",
		],
		continent: "oceania",
		tier: 1,
	},
	{
		name: "Estadio Santiago Bernabéu",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Estadio_Santiago_Bernab%C3%A9u_Madrid.jpg/960px-Estadio_Santiago_Bernab%C3%A9u_Madrid.jpg",
		options: [
			"Estadio Santiago Bernabéu",
			"Stage Front Stadium",
			"Ülker Stadyumu",
			"Old Trafford",
		],
		continent: "europe",
		tier: 1,
	},
	{
		name: "Croke Park",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Croke_park_all_ireland.jpg/960px-Croke_park_all_ireland.jpg",
		options: ["Croke Park", "RAMS Park", "Stade de France", "BORUSSIA-PARK"],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Jakarta International Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Jakarta_International_Stadium_interior.jpg/960px-Jakarta_International_Stadium_interior.jpg",
		options: [
			"King Abdullah Sports City Stadium",
			"Jakarta International Stadium",
			"Hangzhou Olympic Sports Expo Centre Stadium",
			"Stadion Lukas Enembe",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Signal Iduna Park",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Signal_iduna_park.jpg/960px-Signal_iduna_park.jpg",
		options: [
			"Stadio Artemio Franchi",
			"San Mamés",
			"VELTINS-Arena",
			"Signal Iduna Park",
		],
		continent: "europe",
		tier: 1,
	},
	{
		name: "Stade de France",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/StadeFranceNationsLeague2018.jpg/960px-StadeFranceNationsLeague2018.jpg",
		options: [
			"Arena Națională",
			"Villa Park",
			"Hill Dickinson Stadium",
			"Stade de France",
		],
		continent: "europe",
		tier: 1,
	},
	{
		name: "Grand Sports Arena of the Luzhniki Olympic Complex",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Luzhniki_Stadium2.jpg/960px-Luzhniki_Stadium2.jpg",
		options: [
			"Ernst-Happel-Stadion",
			"Atatürk Olimpiyat Stadyumu",
			"Grand Sports Arena of the Luzhniki Olympic Complex",
			"München",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Shah Alam Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Shah_Alam_Stadium_%28inside%29.jpg/960px-Shah_Alam_Stadium_%28inside%29.jpg",
		options: [
			"Zibo Sports Centre Stadium",
			"Zayed Sports City Stadium",
			"Stadion Utama Riau",
			"Shah Alam Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Estadio Monumental",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Estadio_Monumental_U_vs_SF.jpg/960px-Estadio_Monumental_U_vs_SF.jpg",
		options: [
			"Estadio Atanasio Girardot",
			"Allianz Parque",
			"Estadio Monumental",
			"Estadio Metropolitano Roberto Meléndez",
		],
		continent: "south_america",
		tier: 1,
	},
	{
		name: "Stadio Giuseppe Meazza",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/San_Siro_237.jpg/960px-San_Siro_237.jpg",
		options: [
			"Stadio Giuseppe Meazza",
			"Croke Park",
			"RAMS Park",
			"Anoeta Stadium",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Guangdong Olympic Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Stade_Olympique_Guangdong.JPG/960px-Stade_Olympique_Guangdong.JPG",
		options: [
			"Ghadir Stadium",
			"Aleppo International Stadium",
			"Phoenix Hill Football Stadium",
			"Guangdong Olympic Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Hangzhou Olympic Sports Expo Centre Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Hangzhou_Olympic_Sports_Center_Stadium2021.jpg/960px-Hangzhou_Olympic_Sports_Center_Stadium2021.jpg",
		options: [
			"King Abdullah Sports City Stadium",
			"Hangzhou Olympic Sports Expo Centre Stadium",
			"Al-Janoub Stadium",
			"Jinnah Sports Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Stade des Martyrs",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stade_des_martyrs_0332_Kinshasa_%288756673901%29.jpg/960px-Stade_des_martyrs_0332_Kinshasa_%288756673901%29.jpg",
		options: [
			"Nelson Mandela Bay Stadium",
			"Stade des Martyrs",
			"Royal Bafokeng Stadium",
			"Miloud Hadefi Stadium",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "Beijing National Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Beijing_National_Stadium_2014_2.jpg/960px-Beijing_National_Stadium_2014_2.jpg",
		options: [
			"Jawaharlal Nehru Stadium",
			"Al-Janoub Stadium",
			"Beijing National Stadium",
			"Zibo Sports Centre Stadium",
		],
		continent: "asia",
		tier: 1,
	},
	{
		name: "Maracanã",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Bosnia_players_at_Maracan%C3%A3_15_June_2014.jpg/960px-Bosnia_players_at_Maracan%C3%A3_15_June_2014.jpg",
		options: [
			"Estadio Malvinas Argentinas",
			"Maracanã",
			"Arena da Amazônia",
			"Estádio Major Antônio Couto Pereira",
		],
		continent: "south_america",
		tier: 1,
	},
	{
		name: "Stadion Utama Gelora Bung Karno",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gbk_persija_arema_20190803.jpg/960px-Gbk_persija_arema_20190803.jpg",
		options: [
			"Stadion Utama Gelora Bung Karno",
			"Stadion Lukas Enembe",
			"King Abdullah Sports City Stadium",
			"Daegu Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Atatürk Olimpiyat Stadyumu",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Istanbul_Atat%C3%BCrk_Olympic_Stadium_2.jpg/960px-Istanbul_Atat%C3%BCrk_Olympic_Stadium_2.jpg",
		options: [
			"München",
			"Heinz-von-Heiden-Arena",
			"Atatürk Olimpiyat Stadyumu",
			"Stadio San Nicola",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Old Trafford",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Manchester_United_old_trafford_Ank_Kumar_01.jpg/960px-Manchester_United_old_trafford_Ank_Kumar_01.jpg",
		options: [
			"Fritz-Walter-Stadion",
			"Old Trafford",
			"Vodafone Park",
			"Hamburg",
		],
		continent: "europe",
		tier: 1,
	},
	{
		name: "Allianz Arena",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/M%C3%BCnchen%2C_Allianz_Arena%2C_innen_2019-11_%283%29.jpg/960px-M%C3%BCnchen%2C_Allianz_Arena%2C_innen_2019-11_%283%29.jpg",
		options: [
			"Allianz Arena",
			"Stadion Śląski",
			"Hampden Park",
			"Estadio Ramón Sánchez Pizjuán",
		],
		continent: "europe",
		tier: 1,
	},
	{
		name: "Bank of America Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/BofACLTFCConfig.jpg/960px-BofACLTFCConfig.jpg",
		options: [
			"Mercedes-Benz Stadium",
			"Stadium",
			"War Memorial Stadium",
			"Bank of America Stadium",
		],
		continent: "north_america",
		tier: 1,
	},
	{
		name: "Principality Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Millennium_Stadium_-_Glanmor%E2%80%99s_Gap.jpg/960px-Millennium_Stadium_-_Glanmor%E2%80%99s_Gap.jpg",
		options: [
			"Vasil Levski National Stadium",
			"München",
			"VELTINS-Arena",
			"Principality Stadium",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Berlin",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Berlin_Olympiastadion_nach_Umbau.jpg/960px-Berlin_Olympiastadion_nach_Umbau.jpg",
		options: ["Mestalla", "Groupama Stadium", "Berlin", "Parc des Princes"],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Cairo International Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Cairo_Stadium_Afcon_u23_2019.jpg/960px-Cairo_Stadium_Afcon_u23_2019.jpg",
		options: [
			"Cairo International Stadium",
			"Stade Olympique de Sousse",
			"Grand stade de Marrakech",
			"Stade des Martyrs",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "Estádio Nacional Mané Garrincha",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Est%C3%A1dio_Nacional_Bras%C3%ADlia.jpg/960px-Est%C3%A1dio_Nacional_Bras%C3%ADlia.jpg",
		options: [
			"Estadio General Santander",
			"Estádio Nacional Mané Garrincha",
			"Estadio José Pachencho Romero",
			"Estádio Serra Dourada",
		],
		continent: "south_america",
		tier: 2,
	},
	{
		name: "Stadio Olimpico",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/2012-03-17_ITA_-_SCO_prematch.jpg/960px-2012-03-17_ITA_-_SCO_prematch.jpg",
		options: [
			"Stadio Diego Armando Maradona",
			"Stade Geoffroy-Guichard",
			"Old Trafford",
			"Stadio Olimpico",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Nissan Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/International_Stadium_Yokohama-1.jpg/960px-International_Stadium_Yokohama-1.jpg",
		options: [
			"Stadion Lukas Enembe",
			"Nissan Stadium",
			"King Abdullah Sports City Stadium",
			"Daejeon World Cup Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Shanghai Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Shanghai_Stadium_2024-08-22.jpg/960px-Shanghai_Stadium_2024-08-22.jpg",
		options: [
			"Jawaharlal Nehru Stadium",
			"Guangdong Olympic Stadium",
			"Shanghai Stadium",
			"Seoul Olympic Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Mercedes-Benz Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Falcons_Opening_Day_-_MB_Stadium.jpg/960px-Falcons_Opening_Day_-_MB_Stadium.jpg",
		options: [
			"Rogers Centre",
			"Estadio Akron",
			"Mercedes-Benz Stadium",
			"BC Place Stadium",
		],
		continent: "north_america",
		tier: 1,
	},
	{
		name: "Riyadh Air Metropolitano",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Wanda-Metropolitano.jpg/960px-Wanda-Metropolitano.jpg",
		options: [
			"Fisht Olympic Stadium",
			"Riyadh Air Metropolitano",
			"Camp Nou",
			"Kazan Arena",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Olympic National Sports Complex Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Kyiv_NSC_Olimpiyskyi_5.jpg/960px-Kyiv_NSC_Olimpiyskyi_5.jpg",
		options: [
			"Groupama Stadium",
			"Olympic National Sports Complex Stadium",
			"Kazimierz Górski National Stadium",
			"Emirates Stadium",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Nou Mestalla",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Nou_Mestalla_2013.jpg/960px-Nou_Mestalla_2013.jpg",
		options: [
			"Camp Nou",
			"Hampden Park",
			"Stadio Diego Armando Maradona",
			"Nou Mestalla",
		],
		continent: "europe",
		tier: 1,
	},
	{
		name: "Estadio La Cartuja de Sevilla",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Betis_Girona_23_nov_2025_003.jpg/960px-Betis_Girona_23_nov_2025_003.jpg",
		options: [
			"Estadio La Cartuja de Sevilla",
			"Deutsche Bank Park",
			"BORUSSIA-PARK",
			"Anfield",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Seoul Olympic Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/%E8%9A%95%E5%AE%A4_03.jpg/960px-%E8%9A%95%E5%AE%A4_03.jpg",
		options: [
			"Ghadir Stadium",
			"Seoul Olympic Stadium",
			"Jinan Olympic Sports Centre Stadium",
			"Stadium Darul Makmur",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Bakı Olimpiya stadionu",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Baku_Olympic_Stadium_panorama_1.JPG/960px-Baku_Olympic_Stadium_panorama_1.JPG",
		options: [
			"Bakı Olimpiya stadionu",
			"Jaber al-Ahmad International Stadium",
			"Sarawak Stadium",
			"Jawaharlal Nehru Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Olympic Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Olympic_Stadium_at_Athens_before_a_home_game_of_Panathinaikos_on_February_2%2C_2013.jpg/960px-Olympic_Stadium_at_Athens_before_a_home_game_of_Panathinaikos_on_February_2%2C_2013.jpg",
		options: [
			"Estadio Santiago Bernabéu",
			"Stadion Miejski w Poznaniu",
			"Olympic Stadium",
			"Johan Cruijff Arena",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "München",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/M%C3%BCnchener_Olympiastadion.jpg/960px-M%C3%BCnchener_Olympiastadion.jpg",
		options: [
			"Atatürk Olimpiyat Stadyumu",
			"Orange Vélodrome",
			"Berlin",
			"München",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Lumen Field",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/2025_FIFA_Club_World_Cup_-_Seattle_Sounders_FC_vs._Botafogo_-_01.jpg/960px-2025_FIFA_Club_World_Cup_-_Seattle_Sounders_FC_vs._Botafogo_-_01.jpg",
		options: [
			"Mercedes-Benz Stadium",
			"Lumen Field",
			"Protective Stadium",
			"Estadio Olímpico Universitario",
		],
		continent: "north_america",
		tier: 3,
	},
	{
		name: "Estadio Olímpico Universitario",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Estadio_Pumas.jpg/960px-Estadio_Pumas.jpg",
		options: [
			"Yankee Stadium",
			"Choctaw Stadium",
			"Estadio Olímpico Universitario",
			"Rogers Centre",
		],
		continent: "north_america",
		tier: 3,
	},
	{
		name: "Gillette Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Stadiumguillete_%28cropped%29.jpg/960px-Stadiumguillete_%28cropped%29.jpg",
		options: [
			"BC Place Stadium",
			"Gillette Stadium",
			"Estadio BBVA",
			"Estadio Cuauhtémoc",
		],
		continent: "north_america",
		tier: 3,
	},
	{
		name: "King Abdullah Sports City Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Jawhara_Stadium.jpg/960px-Jawhara_Stadium.jpg",
		options: [
			"Stadion Utama Gelora Bung Karno",
			"King Abdullah Sports City Stadium",
			"Shenzhen Universiade Sports Centre Stadium",
			"Al-Bayt Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Gazprom Arena",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Fina-l2017.jpg/960px-Fina-l2017.jpg",
		options: [
			"Estadi Olímpic Lluís Companys",
			"Gazprom Arena",
			"Estádio José Alvalade",
			"Grand Sports Arena of the Luzhniki Olympic Complex",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Estádio do Sport Lisboa e Benfica",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/LuzLissabon.jpg/960px-LuzLissabon.jpg",
		options: [
			"Estádio do Sport Lisboa e Benfica",
			"MERKUR SPIEL-ARENA",
			"Hill Dickinson Stadium",
			"Puskás Aréna",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "National Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Japan_National_Stadium_2024_1.jpg/960px-Japan_National_Stadium_2024_1.jpg",
		options: [
			"National Stadium",
			"Basra International Stadium",
			"Bukit Jalil National Stadium",
			"JRD Tata Sports Complex Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Orange Vélodrome",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Stade_V%C3%A9lodrome_1.jpg/960px-Stade_V%C3%A9lodrome_1.jpg",
		options: [
			"Grand Sports Arena of the Luzhniki Olympic Complex",
			"Tarczyński Arena Wrocław",
			"Orange Vélodrome",
			"München",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Puskás Aréna",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Pusk%C3%A1s_Ar%C3%A9na_01.jpg/960px-Pusk%C3%A1s_Ar%C3%A9na_01.jpg",
		options: [
			"Puskás Aréna",
			"Croke Park",
			"Stadio Artemio Franchi",
			"Estádio do Dragão",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Stade Mohammed V",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Stade_Mohamed_V%2C_Casablanca.jpg/960px-Stade_Mohamed_V%2C_Casablanca.jpg",
		options: [
			"Hocine Ait Ahmed Stadium",
			"Ahmed Zabana Stadium",
			"Grand stade de Marrakech",
			"Stade Mohammed V",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "MorumBIS",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Estadio_Morumbi_2014.jpg/960px-Estadio_Morumbi_2014.jpg",
		options: [
			"Estadio Monumental",
			"Estádio José do Rego Maciel",
			"MorumBIS",
			"Estadio Marcelo Bielsa",
		],
		continent: "south_america",
		tier: 2,
	},
	{
		name: "Yadegar-e-Emam Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Yadegar_Emam_stadium_at_night_-_panoramio.jpg/960px-Yadegar_Emam_stadium_at_night_-_panoramio.jpg",
		options: [
			"Nagai Stadium",
			"Yadegar-e-Emam Stadium",
			"Stadion Batakan",
			"Stadium Tuanku Abdul Rahman",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Seoul World Cup Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/AFC_Champions_League_Final_1st_leg.jpg/960px-AFC_Champions_League_Final_1st_leg.jpg",
		options: [
			"Pars Shiraz Stadium",
			"Seoul World Cup Stadium",
			"Rajamangala National Stadium",
			"Miyagi Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Daegu Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Daegu.Stadium.original.2167.jpg/960px-Daegu.Stadium.original.2167.jpg",
		options: [
			"Dalian Suoyuwan Football Stadium",
			"Kunming Tuodong Sports Centre Stadium",
			"Al-Janoub Stadium",
			"Daegu Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Workers' Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Workers%27_Stadium_from_the_Western_Stands.jpg/960px-Workers%27_Stadium_from_the_Western_Stands.jpg",
		options: [
			"Rajamangala National Stadium",
			"Tianhe Stadium",
			"Workers' Stadium",
			"Stadion Gelora Joko Samudro",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "London Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/London_Stadium_panorama_picture.jpg/960px-London_Stadium_panorama_picture.jpg",
		options: [
			"Orange Vélodrome",
			"Stadion Śląski",
			"London Stadium",
			"Vasil Levski National Stadium",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Basra International Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Basra_International_Stadium_Opening_2.JPG/960px-Basra_International_Stadium_Opening_2.JPG",
		options: [
			"Ghadir Stadium",
			"Basra International Stadium",
			"Hang Jebat Stadium",
			"Stadium Tuanku Abdul Rahman",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Castelão",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Castel%C3%A3o_Arena_%285%29.jpg/960px-Castel%C3%A3o_Arena_%285%29.jpg",
		options: [
			"Castelão",
			"Estadio Hernando Siles",
			"Estadio Tomás Adolfo Ducó",
			"Estadio Metropolitano Roberto Meléndez",
		],
		continent: "south_america",
		tier: 2,
	},
	{
		name: "Saitama Stadium 2002",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Saitama_Stadium_Panorama.jpg/960px-Saitama_Stadium_Panorama.jpg",
		options: [
			"Saitama Stadium 2002",
			"Rajamangala National Stadium",
			"Zibo Sports Centre Stadium",
			"Salt Lake Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Dalian Suoyuwan Football Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Dalian_Yingbo_vs_Beijing_Guoan_2025-05-05.jpg/960px-Dalian_Yingbo_vs_Beijing_Guoan_2025-05-05.jpg",
		options: [
			"Dalian Suoyuwan Football Stadium",
			"Nanjing Olympic Sports Centre Stadium",
			"Stadion Gelora Bung Tomo",
			"Kunming Tuodong Sports Centre Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Oakland–Alameda County Coliseum",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Oakland_Coliseum_view_from_upper_deck.jpg/960px-Oakland_Coliseum_view_from_upper_deck.jpg",
		options: [
			"Oakland–Alameda County Coliseum",
			"Soldier Field",
			"Gillette Stadium",
			"Mercedes-Benz Stadium",
		],
		continent: "north_america",
		tier: 3,
	},
	{
		name: "Ellis Park Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Warm-ups_at_Brazil_%26_North_Korea_match_at_FIFA_World_Cup_2010-06-15_1.jpg/960px-Warm-ups_at_Brazil_%26_North_Korea_match_at_FIFA_World_Cup_2010-06-15_1.jpg",
		options: [
			"Adrar Stadium",
			"Free State Stadium",
			"Nelson Mandela Bay Stadium",
			"Ellis Park Stadium",
		],
		continent: "africa",
		tier: 2,
	},
	{
		name: "Tottenham Hotspur Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Spurs_stadium_January_2020.jpg/960px-Spurs_stadium_January_2020.jpg",
		options: [
			"Estadio La Cartuja de Sevilla",
			"Tottenham Hotspur Stadium",
			"Lukoil Arena",
			"Nou Mestalla",
		],
		continent: "europe",
		tier: 1,
	},
	{
		name: "VELTINS-Arena",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Veltins-Arena_Panorama.jpg/960px-Veltins-Arena_Panorama.jpg",
		options: ["Fisht Olympic Stadium", "VELTINS-Arena", "RAMS Park", "Cologne"],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Yizhong Sports Centre Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Qingdao_Guoxin_Stadium.jpg/960px-Qingdao_Guoxin_Stadium.jpg",
		options: [
			"Yizhong Sports Centre Stadium",
			"Jawaharlal Nehru Stadium",
			"Dalian Suoyuwan Football Stadium",
			"Shanghai Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Estádio Governador Magalhães Pinto",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Stadion_Belo_Horizonte_Halbfinale_WM_2014_%2822117986076%29.jpg/960px-Stadion_Belo_Horizonte_Halbfinale_WM_2014_%2822117986076%29.jpg",
		options: [
			"Estadio Nacional",
			"Estádio Governador Magalhães Pinto",
			"Estadio Atanasio Girardot",
			"Neo Química Arena",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "King Fahd International Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/%E3%82%AD%E3%83%B3%E3%82%B0%E3%83%95%E3%82%A1%E3%83%8F%E3%83%89%E5%9B%BD%E9%9A%9B%E3%82%B9%E3%82%BF%E3%82%B8%E3%82%A2%E3%83%A0.jpg/960px-%E3%82%AD%E3%83%B3%E3%82%B0%E3%83%95%E3%82%A1%E3%83%8F%E3%83%89%E5%9B%BD%E9%9A%9B%E3%82%B9%E3%82%BF%E3%82%B8%E3%82%A2%E3%83%A0.jpg",
		options: [
			"Al-Janoub Stadium",
			"King Fahd International Stadium",
			"Guiyang Olympic Sports Centre Stadium",
			"Jinnah Sports Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Soldier Field",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/The_Refurbished_Soldier_Field.jpg/960px-The_Refurbished_Soldier_Field.jpg",
		options: [
			"Stadium",
			"Estadio Universitario",
			"Protective Stadium",
			"Soldier Field",
		],
		continent: "north_america",
		tier: 3,
	},
	{
		name: "Nanjing Olympic Sports Centre Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Nanjing_Olympic_Sports_Center_inner_view_%282016%29.jpg/960px-Nanjing_Olympic_Sports_Center_inner_view_%282016%29.jpg",
		options: [
			"Stadion Utama Gelora Bung Karno",
			"Nanjing Olympic Sports Centre Stadium",
			"Seoul World Cup Stadium",
			"National Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Anfield",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Liverpool_anfield_road_stadium.jpg/960px-Liverpool_anfield_road_stadium.jpg",
		options: [
			"Signal Iduna Park",
			"Estadi Olímpic Lluís Companys",
			"Anfield",
			"Stadio Olimpico",
		],
		continent: "europe",
		tier: 1,
	},
	{
		name: "Estadio Benito Villamarín",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Estadio_Benito_Villamar%C3%ADn_2018001.jpg/960px-Estadio_Benito_Villamar%C3%ADn_2018001.jpg",
		options: [
			"Grand Sports Arena of the Luzhniki Olympic Complex",
			"Fisht Olympic Stadium",
			"Estadio Benito Villamarín",
			"Vasil Levski National Stadium",
		],
		continent: "europe",
		tier: 1,
	},
	{
		name: "Abuja Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Football_heaven.jpg/960px-Football_heaven.jpg",
		options: [
			"FNB Stadium",
			"Mbombela Stadium",
			"Abuja Stadium",
			"Ellis Park Stadium",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "MHPArena",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Neckarstadion_2011.jpg/960px-Neckarstadion_2011.jpg",
		options: [
			"London Stadium",
			"Etihad Stadium",
			"Fritz-Walter-Stadion",
			"MHPArena",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Celtic Park",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Celtic_park_2.jpg/960px-Celtic_park_2.jpg",
		options: [
			"RAMS Park",
			"Orange Vélodrome",
			"Celtic Park",
			"Stadio Diego Armando Maradona",
		],
		continent: "europe",
		tier: 1,
	},
	{
		name: "Estadio de la UNSA",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/OutsideUNSA.jpg/960px-OutsideUNSA.jpg",
		options: [
			"Estadio Marcelo Bielsa",
			"Estadio de la UNSA",
			"Estadio Nacional",
			"Estadio Campeón del Siglo",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Emirates Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Emirates_Stadium_-_East_stand_Club_Level.jpg/960px-Emirates_Stadium_-_East_stand_Club_Level.jpg",
		options: [
			"Emirates Stadium",
			"Vodafone Park",
			"Estadio Benito Villamarín",
			"Plovdiv Stadium",
		],
		continent: "europe",
		tier: 1,
	},
	{
		name: "Shenzhen Universiade Sports Centre Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/%E6%B7%B1%E5%9C%B3%E9%BE%99%E5%B2%97%E5%A4%A7%E8%BF%90%E4%B8%AD%E5%BF%83%E4%BD%93%E8%82%B2%E9%A6%86%E5%86%85%E9%83%A8.jpg/960px-%E6%B7%B1%E5%9C%B3%E9%BE%99%E5%B2%97%E5%A4%A7%E8%BF%90%E4%B8%AD%E5%BF%83%E4%BD%93%E8%82%B2%E9%A6%86%E5%86%85%E9%83%A8.jpg",
		options: [
			"Goyang Stadium",
			"Shenzhen Universiade Sports Centre Stadium",
			"Hefei Olympic Sports Centre Stadium",
			"He Long Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Estadio Centenario",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Estadio_Centenario_2021.jpg/960px-Estadio_Centenario_2021.jpg",
		options: [
			"Arena MRV",
			"Estadio Centenario",
			"Estadio Malvinas Argentinas",
			"Ligga Arena",
		],
		continent: "south_america",
		tier: 2,
	},
	{
		name: "Estádio José do Rego Maciel",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Arruda_em_novembro_de_2013.JPG/960px-Arruda_em_novembro_de_2013.JPG",
		options: [
			"Estádio José do Rego Maciel",
			"La Bombonera",
			"Estadio Monumental",
			"Estadio Tomás Adolfo Ducó",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Stade Léopold Sédar Senghor",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Senegal_1_-_Cameroon_0_-_Stade_L%C3%A9opold_S%C3%A9dar_Senghor.jpg/960px-Senegal_1_-_Cameroon_0_-_Stade_L%C3%A9opold_S%C3%A9dar_Senghor.jpg",
		options: [
			"Ali La Pointe Stadium",
			"New Capital Stadium",
			"Stade Léopold Sédar Senghor",
			"Ellis Park Stadium",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "Al-Bayt Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Al_Bayt_Stadium_architecture.jpg/960px-Al_Bayt_Stadium_architecture.jpg",
		options: [
			"Hang Jebat Stadium",
			"Suwon World Cup Stadium",
			"Al-Bayt Stadium",
			"Goyang Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Benjamin Mkapa National Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Tanzania_National_Main_Stadium_Aerial.jpg/960px-Tanzania_National_Main_Stadium_Aerial.jpg",
		options: [
			"Hocine Ait Ahmed Stadium",
			"Benjamin Mkapa National Stadium",
			"FNB Stadium",
			"Newlands Stadium",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "Hefei Olympic Sports Centre Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hefei_Olympic_Sports_Center_Stadium.jpg/960px-Hefei_Olympic_Sports_Center_Stadium.jpg",
		options: [
			"Yizhong Sports Centre Stadium",
			"Hefei Olympic Sports Centre Stadium",
			"Busan Asiad Main Stadium",
			"Shah Alam Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Jaber al-Ahmad International Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Jaber_Al-Ahmad_International_Stadium_2019_local.png/960px-Jaber_Al-Ahmad_International_Stadium_2019_local.png",
		options: [
			"Nanjing Olympic Sports Centre Stadium",
			"Huanglong Stadium",
			"Shenyang Olympic Sports Centre Stadium",
			"Jaber al-Ahmad International Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Hammadi Agrebi Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Mozambique-Tunisia_match_2009.jpg/960px-Mozambique-Tunisia_match_2009.jpg",
		options: [
			"Free State Stadium",
			"Hammadi Agrebi Stadium",
			"Stade Tata Raphaël",
			"Stade Mohammed V",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "Jawaharlal Nehru Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Jawaharlal_Nehru_Stadium%2C_New_Delhi.png/960px-Jawaharlal_Nehru_Stadium%2C_New_Delhi.png",
		options: [
			"Perak Stadium",
			"Jawaharlal Nehru Stadium",
			"Jakarta International Stadium",
			"Tianhe Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "National Heroes Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Inauguration_of_Edgar_Lungu.jpg/960px-Inauguration_of_Edgar_Lungu.jpg",
		options: [
			"New Capital Stadium",
			"National Heroes Stadium",
			"Mandela National Stadium",
			"Cape Town Stadium",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "Shenyang Olympic Sports Centre Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Shenyang_Olympic_Sports_Center_Stadium_drone_view_1.jpg/960px-Shenyang_Olympic_Sports_Center_Stadium_drone_view_1.jpg",
		options: [
			"Yizhong Sports Centre Stadium",
			"Bogyoke Aung San Stadium",
			"Huanglong Stadium",
			"Shenyang Olympic Sports Centre Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Optus Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Perth_Stadium_opening_210118_gnangarra-10.jpg/960px-Perth_Stadium_opening_210118_gnangarra-10.jpg",
		options: [
			"Adelaide Oval",
			"Docklands Stadium",
			"Optus Stadium",
			"Eden Park",
		],
		continent: "oceania",
		tier: 3,
	},
	{
		name: "National Sports Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/2003_Harare_Stadium%2C_Zimbabwe_557109164.jpg/960px-2003_Harare_Stadium%2C_Zimbabwe_557109164.jpg",
		options: [
			"Abuja Stadium",
			"Stade du Complexe sportif de Fès",
			"National Sports Stadium",
			"FNB Stadium",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "Stade Tata Raphaël",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Stade_Tata_Rapha%C3%ABl_lors_d%27un_de_l%27AS_V.CLUB.jpg/960px-Stade_Tata_Rapha%C3%ABl_lors_d%27un_de_l%27AS_V.CLUB.jpg",
		options: [
			"Stade des Martyrs",
			"New Capital Stadium",
			"Stade Nelson Mandela",
			"Stade Tata Raphaël",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "Estadio Monumental Isidro Romero Carbo",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Estadio_Monumental_de_Barcelona.jpg/960px-Estadio_Monumental_de_Barcelona.jpg",
		options: [
			"Estadio Monumental Isidro Romero Carbo",
			"Estadio Modelo Alberto Spencer",
			"Estadio Olimpico Metropolitano de Mérida",
			"Estadio Centenario",
		],
		continent: "south_america",
		tier: 1,
	},
	{
		name: "Groupama Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Stade_Lumi%C3%A8re.jpg/960px-Stade_Lumi%C3%A8re.jpg",
		options: [
			"Orange Vélodrome",
			"Stade Pierre-Mauroy",
			"Olympic National Sports Complex Stadium",
			"Groupama Stadium",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Chongqing Olympic Sports Centre Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Chongqing_Olympic_Stadium.jpg/960px-Chongqing_Olympic_Stadium.jpg",
		options: [
			"Chongqing Olympic Sports Centre Stadium",
			"Jeonju World Cup Stadium",
			"Kunming Tuodong Sports Centre Stadium",
			"Yadegar-e-Emam Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Kazimierz Górski National Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/National_Stadium_panorama.jpg/960px-National_Stadium_panorama.jpg",
		options: [
			"BORUSSIA-PARK",
			"Aviva Stadium",
			"Anfield",
			"Kazimierz Górski National Stadium",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Stadio San Nicola",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Stadiosannicola2023.jpg/960px-Stadiosannicola2023.jpg",
		options: [
			"VELTINS-Arena",
			"Stade Roi Baudouin",
			"Stadio San Nicola",
			"Berlin",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Deutsche Bank Park",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Commerzbank-Arena_%28Haupttrib%C3%BCne%29.JPG/960px-Commerzbank-Arena_%28Haupttrib%C3%BCne%29.JPG",
		options: [
			"Stade Geoffroy-Guichard",
			"Celtic Park",
			"Stadion Feijenoord",
			"Deutsche Bank Park",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "La Bombonera",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/La_bombonera_panoramica.jpg/960px-La_bombonera_panoramica.jpg",
		options: [
			"Estádio Serra Dourada",
			"Estadio Monumental de Maturín",
			"La Bombonera",
			"Estadio José Amalfitani",
		],
		continent: "south_america",
		tier: 1,
	},
	{
		name: "Hamburg",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Volksparkstadion_Panorama.jpg/960px-Volksparkstadion_Panorama.jpg",
		options: ["Red Bull Arena", "San Mamés", "Hamburg", "Stadion Rajko Mitić"],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Estadio Mario Alberto Kempes",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Estadio_Kempes_luego_de_finalizar_un_partido.jpg/960px-Estadio_Kempes_luego_de_finalizar_un_partido.jpg",
		options: [
			"Estádio Estadual Jornalista Edgar Augusto Proença",
			"Estádio José Pinheiro Borda",
			"Allianz Parque",
			"Estadio Mario Alberto Kempes",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Jinan Olympic Sports Centre Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/JinanOlympic.JPG/960px-JinanOlympic.JPG",
		options: [
			"Gwangju World Cup Stadium",
			"Guangdong Olympic Stadium",
			"King Abdullah Sports City Stadium",
			"Jinan Olympic Sports Centre Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Estadio Jalisco",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Estadio_Jalisco_06022022.jpg/960px-Estadio_Jalisco_06022022.jpg",
		options: [
			"Soldier Field",
			"Estadio Jalisco",
			"Cotton Bowl Stadium",
			"Choctaw Stadium",
		],
		continent: "north_america",
		tier: 3,
	},
	{
		name: "Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Commonwealth_Stadium.jpg/960px-Commonwealth_Stadium.jpg",
		options: [
			"War Memorial Stadium",
			"Rogers Centre",
			"Stadium",
			"Cotton Bowl Stadium",
		],
		continent: "north_america",
		tier: 3,
	},
	{
		name: "19 May 1956 Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Annaba_Stadium.jpg/960px-Annaba_Stadium.jpg",
		options: [
			"National Heroes Stadium",
			"Baba Yara Stadium",
			"19 May 1956 Stadium",
			"Peter Mokaba Stadium",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "Estadi Olímpic Lluís Companys",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Estadi_Ol%C3%ADmpic_Llu%C3%ADs_Companys_-_Barcelona%2C_Spain_-_Jan_2007.jpg/960px-Estadi_Ol%C3%ADmpic_Llu%C3%ADs_Companys_-_Barcelona%2C_Spain_-_Jan_2007.jpg",
		options: [
			"Estadio Benito Villamarín",
			"Ibrox Stadium",
			"Ülker Stadyumu",
			"Estadi Olímpic Lluís Companys",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "El Cilindro",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Racing_Club_vs._Corinthians_-_CONMEBOL_Sudamericana_2024.jpg/960px-Racing_Club_vs._Corinthians_-_CONMEBOL_Sudamericana_2024.jpg",
		options: [
			"Casa de Apostas Arena Fonte Nova",
			"Estadio Único Diego Armando Maradona",
			"MorumBIS",
			"El Cilindro",
		],
		continent: "south_america",
		tier: 2,
	},
	{
		name: "Arena do Grêmio",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Arena_do_Gr%C3%AAmio.jpg/960px-Arena_do_Gr%C3%AAmio.jpg",
		options: [
			"Estadio Brigadier General Estanislao López",
			"Neo Química Arena",
			"Arena do Grêmio",
			"Estadio Monumental de Maturín",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Arena Națională",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Stadionul_National_-_National_Arena_3.jpg/960px-Stadionul_National_-_National_Arena_3.jpg",
		options: [
			"Vasil Levski National Stadium",
			"Tottenham Hotspur Stadium",
			"Goodison Park",
			"Arena Națională",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Stadion Rajko Mitić",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Zvezda_stadion.jpg/960px-Zvezda_stadion.jpg",
		options: [
			"Max-Morlock-Stadion",
			"MERKUR SPIEL-ARENA",
			"Stadion Rajko Mitić",
			"Estádio do Sport Lisboa e Benfica",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Stadion Śląski",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Widok_bramka.jpg/960px-Widok_bramka.jpg",
		options: ["London Stadium", "Stadion Śląski", "Aviva Stadium", "Berlin"],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Etihad Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Etihad_Stadium.jpg/960px-Etihad_Stadium.jpg",
		options: [
			"Mestalla",
			"Etihad Stadium",
			"Villa Park",
			"Stadio Diego Armando Maradona",
		],
		continent: "europe",
		tier: 1,
	},
	{
		name: "Moi International Sports Centre",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Inside_the_Kasarani_Stadium.jpg/960px-Inside_the_Kasarani_Stadium.jpg",
		options: [
			"19 May 1956 Stadium",
			"Moi International Sports Centre",
			"June 11 Stadium",
			"National Heroes Stadium",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "He Long Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Helong_Stadium.jpg/960px-Helong_Stadium.jpg",
		options: [
			"Stadion Utama Riau",
			"EDION Stadium Hiroshima",
			"Aleppo International Stadium",
			"He Long Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Cape Town Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Cape_Town_Stadium_Inside.jpg/960px-Cape_Town_Stadium_Inside.jpg",
		options: [
			"Hocine Ait Ahmed Stadium",
			"Cape Town Stadium",
			"Grand stade de Marrakech",
			"Cairo International Stadium",
		],
		continent: "africa",
		tier: 2,
	},
	{
		name: "Plovdiv Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Plovdiv_Stadium.JPG/960px-Plovdiv_Stadium.JPG",
		options: [
			"Plovdiv Stadium",
			"Groupama Stadium",
			"Estadio Benito Villamarín",
			"Tarczyński Arena Wrocław",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Johan Cruijff Arena",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ajax_0_Chelsea_1_%2823Oct19%29.jpg/960px-Ajax_0_Chelsea_1_%2823Oct19%29.jpg",
		options: [
			"Stadio Diego Armando Maradona",
			"Stadio Artemio Franchi",
			"Johan Cruijff Arena",
			"MHPArena",
		],
		continent: "europe",
		tier: 1,
	},
	{
		name: "Tianhe Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Aerial_View%2C_Tianhe_Stadium_20250823-B.jpg/960px-Aerial_View%2C_Tianhe_Stadium_20250823-B.jpg",
		options: [
			"Guiyang Olympic Sports Centre Stadium",
			"Tianhe Stadium",
			"Shandong Provincial Stadium",
			"Stadion Gelora Joko Samudro",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Stadio Diego Armando Maradona",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Stadio_Maradona_Serie_A.jpg/960px-Stadio_Maradona_Serie_A.jpg",
		options: [
			"Ullevi",
			"Estadio Benito Villamarín",
			"Estádio do Dragão",
			"Stadio Diego Armando Maradona",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Tianjin Olympic Sports Centre Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Tianjin_Olympic_Center_Stadium.jpg/960px-Tianjin_Olympic_Center_Stadium.jpg",
		options: [
			"Camille Chamoun Sports City Stadium",
			"Tianjin Olympic Sports Centre Stadium",
			"Seoul Olympic Stadium",
			"EMS Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "MERKUR SPIEL-ARENA",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/LTU_arena_panorama.jpg/960px-LTU_arena_panorama.jpg",
		options: ["Villa Park", "Orange Vélodrome", "MERKUR SPIEL-ARENA", "Ullevi"],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Boris Paitchadze Dinamo Arena",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Boris_Paichadze_Dinamo_Arena%2C_Samtredia_-_Qaraba%C4%9F.jpg/960px-Boris_Paichadze_Dinamo_Arena%2C_Samtredia_-_Qaraba%C4%9F.jpg",
		options: [
			"Boris Paitchadze Dinamo Arena",
			"King Fahd International Stadium",
			"Nagai Stadium",
			"Seoul Olympic Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Wuhan Sports Centre Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Wuhan_Sport_Centre_01.jpg/960px-Wuhan_Sport_Centre_01.jpg",
		options: [
			"Camille Chamoun Sports City Stadium",
			"Resonac Dome Ōita",
			"Salt Lake Stadium",
			"Wuhan Sports Centre Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "BC Place Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/BC_Place_2015_Women%27s_FIFA_World_Cup.jpg/960px-BC_Place_2015_Women%27s_FIFA_World_Cup.jpg",
		options: [
			"Estadio Akron",
			"BC Place Stadium",
			"Estadio Cuauhtémoc",
			"War Memorial Stadium",
		],
		continent: "north_america",
		tier: 3,
	},
	{
		name: "Hrazdan Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/HrazdanArmeniaTurkey.JPG/960px-HrazdanArmeniaTurkey.JPG",
		options: [
			"Bao'an Stadium",
			"Hrazdan Stadium",
			"Al-Janoub Stadium",
			"Hangzhou Olympic Sports Expo Centre Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "War Memorial Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/USACE_personnel_on_War_Memorial_Stadium_field.jpg/960px-USACE_personnel_on_War_Memorial_Stadium_field.jpg",
		options: [
			"Soldier Field",
			"Stadium",
			"War Memorial Stadium",
			"Mercedes-Benz Stadium",
		],
		continent: "north_america",
		tier: 3,
	},
	{
		name: "BORUSSIA-PARK",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Borussia-Park_DEU-FRA_2011.jpg/960px-Borussia-Park_DEU-FRA_2011.jpg",
		options: ["BORUSSIA-PARK", "Helsingin", "Matmut ATLANTIQUE", "München"],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Moses Mabhida Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/FIFA_World_Cup_2010_Netherlands_Japan.jpg/960px-FIFA_World_Cup_2010_Netherlands_Japan.jpg",
		options: [
			"New Capital Stadium",
			"Moses Mabhida Stadium",
			"24 February 1956 Stadium",
			"Adrar Stadium",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "RAMS Park",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Galatasaray_Arena_North-West_Corner.jpg/960px-Galatasaray_Arena_North-West_Corner.jpg",
		options: [
			"Estádio do Dragão",
			"RAMS Park",
			"Riyadh Air Metropolitano",
			"Ülker Stadyumu",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Busan Asiad Main Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/BusanAsiadStadium.jpg/960px-BusanAsiadStadium.jpg",
		options: [
			"Rungrado 1st of May Stadium",
			"Suwon World Cup Stadium",
			"Hang Jebat Stadium",
			"Busan Asiad Main Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Estádio Estadual Jornalista Edgar Augusto Proença",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Mangueir%C3%A3o_em_2023.jpg/960px-Mangueir%C3%A3o_em_2023.jpg",
		options: [
			"Estádio Estadual Jornalista Edgar Augusto Proença",
			"Estadio General Pablo Rojas",
			"Estadio Libertadores de América",
			"Estádio Universitário Pedro Pedrossian",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Estadio Único Diego Armando Maradona",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/EstadioUnicoLaPlata_Interior_June2014.jpg/960px-EstadioUnicoLaPlata_Interior_June2014.jpg",
		options: [
			"Estadio Único Diego Armando Maradona",
			"Estádio José Pinheiro Borda",
			"Estádio Serra Dourada",
			"Estadio José Pachencho Romero",
		],
		continent: "south_america",
		tier: 2,
	},
	{
		name: "Adelaide Oval",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/After_Game_Kick_and_Catch_%2813750115664%29.jpg/960px-After_Game_Kick_and_Catch_%2813750115664%29.jpg",
		options: [
			"Eden Park",
			"Stadium Australia",
			"Adelaide Oval",
			"Optus Stadium",
		],
		continent: "oceania",
		tier: 3,
	},
	{
		name: "Docklands Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Melbourne_Derby_December_2014.jpg/960px-Melbourne_Derby_December_2014.jpg",
		options: [
			"Eden Park",
			"Suncorp Stadium",
			"Optus Stadium",
			"Docklands Stadium",
		],
		continent: "oceania",
		tier: 3,
	},
	{
		name: "Estádio Municipal João Havelange",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Est%C3%A1dio_Parque_do_Sabi%C3%A1.jpg/960px-Est%C3%A1dio_Parque_do_Sabi%C3%A1.jpg",
		options: [
			"Estádio Municipal João Havelange",
			"Estadio Metropolitano de fútbol de Lara",
			"Neo Química Arena",
			"Estádio Estadual Jornalista Edgar Augusto Proença",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "San Mamés",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/San_Mames%2C_Bilbao%2C_Euskal_Herria_-_Basque_Country.jpg/960px-San_Mames%2C_Bilbao%2C_Euskal_Herria_-_Basque_Country.jpg",
		options: [
			"Estadio Santiago Bernabéu",
			"Stadio Diego Armando Maradona",
			"Stamford Bridge",
			"San Mamés",
		],
		continent: "europe",
		tier: 1,
	},
	{
		name: "Aleppo International Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Aleppo_International_Stadium%2C_day_view%2C_2009_%281%29.jpg/960px-Aleppo_International_Stadium%2C_day_view%2C_2009_%281%29.jpg",
		options: [
			"Zibo Sports Centre Stadium",
			"Nissan Stadium",
			"Aleppo International Stadium",
			"Boris Paitchadze Dinamo Arena",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Estadio Nacional",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Estadio_Nacional_nuevo_07_10_2011.jpg/960px-Estadio_Nacional_nuevo_07_10_2011.jpg",
		options: [
			"Estadio Nacional",
			"Estadio Hernando Siles",
			"Estádio Serra Dourada",
			"Estádio José do Rego Maciel",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Hill Dickinson Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/The_wide_view.jpg/960px-The_wide_view.jpg",
		options: [
			"Estadi Olímpic Lluís Companys",
			"Hill Dickinson Stadium",
			"Hamburg",
			"Riyadh Air Metropolitano",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Huanglong Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Hangzhou-yellow-dragon-stad.jpg/960px-Hangzhou-yellow-dragon-stad.jpg",
		options: [
			"Al-Thumama Stadium",
			"Huanglong Stadium",
			"National Stadium",
			"Stadion Utama Riau",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Suncorp Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Suncorpstadium071006a.JPG/960px-Suncorpstadium071006a.JPG",
		options: [
			"Optus Stadium",
			"Docklands Stadium",
			"Adelaide Oval",
			"Suncorp Stadium",
		],
		continent: "oceania",
		tier: 3,
	},
	{
		name: "St. James' Park",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/StJamesParkPanorama.jpg/960px-StJamesParkPanorama.jpg",
		options: [
			"St. James' Park",
			"San Mamés",
			"Camp Nou",
			"Olympic National Sports Complex Stadium",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Estádio José Alvalade",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Est%C3%A1dio_Jos%C3%A9_Alvalade_antes_do_jogo_Sporting_-_Arouca.jpg/960px-Est%C3%A1dio_Jos%C3%A9_Alvalade_antes_do_jogo_Sporting_-_Arouca.jpg",
		options: [
			"Estádio José Alvalade",
			"VELTINS-Arena",
			"Stadion Rajko Mitić",
			"Helsingin",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Kings Park Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Kings_Park_panorama.jpg/960px-Kings_Park_panorama.jpg",
		options: [
			"Benjamin Mkapa National Stadium",
			"Ali La Pointe Stadium",
			"Stade Tata Raphaël",
			"Kings Park Stadium",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "Newlands Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Proudly_South_African.jpg/960px-Proudly_South_African.jpg",
		options: [
			"Baba Yara Stadium",
			"Stade des Martyrs",
			"Newlands Stadium",
			"Stade Nelson Mandela",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "Hampden Park",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Hampden_Park%2C_January_2023.jpg/960px-Hampden_Park%2C_January_2023.jpg",
		options: [
			"Stadio San Nicola",
			"Hampden Park",
			"Allianz Arena",
			"Allianz Stadium",
		],
		continent: "europe",
		tier: 1,
	},
	{
		name: "Estadio Monumental de Maturín",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Monumental_de_maturin_3.jpg/960px-Monumental_de_maturin_3.jpg",
		options: [
			"Estadio Modelo Alberto Spencer",
			"Estadio Monumental de Maturín",
			"Estadio Universidad San Marcos",
			"Estadio Metropolitano Roberto Meléndez",
		],
		continent: "south_america",
		tier: 1,
	},
	{
		name: "Loftus Versfeld Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Loftus_Versfeld_Game_Night.JPG/960px-Loftus_Versfeld_Game_Night.JPG",
		options: [
			"Moi International Sports Centre",
			"Loftus Versfeld Stadium",
			"Benjamin Mkapa National Stadium",
			"Baba Yara Stadium",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "Aviva Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Aviva_Stadium_Panoramic.jpg/960px-Aviva_Stadium_Panoramic.jpg",
		options: [
			"Allianz Stadium",
			"Arena Națională",
			"Vasil Levski National Stadium",
			"Aviva Stadium",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Ibrox Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Rangers-SM_%281%29.jpg/960px-Rangers-SM_%281%29.jpg",
		options: [
			"Matmut ATLANTIQUE",
			"Ibrox Stadium",
			"Metalist Stadium",
			"Stadion Feijenoord",
		],
		continent: "europe",
		tier: 1,
	},
	{
		name: "Guiyang Olympic Sports Centre Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Guiyang_Olympic_Sports_Center.jpg/960px-Guiyang_Olympic_Sports_Center.jpg",
		options: [
			"Guiyang Olympic Sports Centre Stadium",
			"Gwangju World Cup Stadium",
			"Perak Stadium",
			"Jeonju World Cup Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Hohhot City Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Hohhot_City_Stadium.jpg/960px-Hohhot_City_Stadium.jpg",
		options: [
			"Sapporo Dome",
			"Resonac Dome Ōita",
			"Basra International Stadium",
			"Hohhot City Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Rajamangala National Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Rajamangala_Stadium_Panorama.jpg/960px-Rajamangala_Stadium_Panorama.jpg",
		options: [
			"Kashima Football Stadium",
			"Rajamangala National Stadium",
			"Wuhan Sports Centre Stadium",
			"Goyang Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Donbas Arena",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Donbass_Arena.jpg/960px-Donbass_Arena.jpg",
		options: [
			"BORUSSIA-PARK",
			"Kazimierz Górski National Stadium",
			"Donbas Arena",
			"Ülker Stadyumu",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "İzmir Atatürk Stadyumu",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/%C4%B0zmir_Atat%C3%BCrk_Stadyumu.jpg/960px-%C4%B0zmir_Atat%C3%BCrk_Stadyumu.jpg",
		options: [
			"Vodafone Park",
			"Orange Vélodrome",
			"Stade de France",
			"İzmir Atatürk Stadyumu",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Stadion Feijenoord",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Rotterdam_De_Kuip_1.jpg/960px-Rotterdam_De_Kuip_1.jpg",
		options: [
			"Aviva Stadium",
			"Vasil Levski National Stadium",
			"Mestalla",
			"Stadion Feijenoord",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Estadio BBVA",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Estadio_BBVA.jpg/960px-Estadio_BBVA.jpg",
		options: [
			"Estadio BBVA",
			"Protective Stadium",
			"Mercedes-Benz Stadium",
			"Gillette Stadium",
		],
		continent: "north_america",
		tier: 3,
	},
	{
		name: "Ghadir Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Al-Ghadeer_Stadium.jpg/960px-Al-Ghadeer_Stadium.jpg",
		options: [
			"Ghadir Stadium",
			"Shanghai Stadium",
			"EDION Stadium Hiroshima",
			"Seoul Olympic Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Estádio José Pinheiro Borda",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Beira-Rio-Stadium-Porto-Alegre-Brazil.jpg/960px-Beira-Rio-Stadium-Porto-Alegre-Brazil.jpg",
		options: [
			"Estadio Libertadores de América",
			"Estadio Campeón del Siglo",
			"Estádio José do Rego Maciel",
			"Estádio José Pinheiro Borda",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Shizuoka Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Ecopa030304.jpg/960px-Ecopa030304.jpg",
		options: [
			"Zibo Sports Centre Stadium",
			"Shizuoka Stadium",
			"Hrazdan Stadium",
			"Nagai Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Ernst-Happel-Stadion",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/EM_2008_Elfmeter_Kroatien_%C3%96sterreich.jpg/960px-EM_2008_Elfmeter_Kroatien_%C3%96sterreich.jpg",
		options: [
			"Lukoil Arena",
			"Ernst-Happel-Stadion",
			"Hill Dickinson Stadium",
			"München",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Hocine Ait Ahmed Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Tizi_Ouzou_Stadium_at_night.jpg/960px-Tizi_Ouzou_Stadium_at_night.jpg",
		options: [
			"Abuja Stadium",
			"June 11 Stadium",
			"Hocine Ait Ahmed Stadium",
			"National Heroes Stadium",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "Estadio Cuauhtémoc",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Rampa_norte.jpg/960px-Rampa_norte.jpg",
		options: [
			"Mercedes-Benz Stadium",
			"Estadio Universitario",
			"Gillette Stadium",
			"Estadio Cuauhtémoc",
		],
		continent: "north_america",
		tier: 3,
	},
	{
		name: "Phoenix Hill Football Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/%E6%88%90%E9%83%BD%E5%87%A4%E5%87%B0%E5%B1%B1%E4%BD%93%E8%82%B2%E5%85%AC%E5%9B%AD%E4%B8%93%E4%B8%9A%E8%B6%B3%E7%90%83%E5%9C%BA_Chengdu_Fenghuangshan_Sports_Park-football_stadium.jpg/960px-%E6%88%90%E9%83%BD%E5%87%A4%E5%87%B0%E5%B1%B1%E4%BD%93%E8%82%B2%E5%85%AC%E5%9B%AD%E4%B8%93%E4%B8%9A%E8%B6%B3%E7%90%83%E5%9C%BA_Chengdu_Fenghuangshan_Sports_Park-football_stadium.jpg",
		options: [
			"Jeonju World Cup Stadium",
			"Phoenix Hill Football Stadium",
			"Daejeon World Cup Stadium",
			"Bukit Jalil National Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Strawberry Arena",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/FriendsArena_SwedenSpain.jpg/960px-FriendsArena_SwedenSpain.jpg",
		options: [
			"Strawberry Arena",
			"Kazan Arena",
			"Stadio Artemio Franchi",
			"Polsat Plus Arena Gdańsk",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Ülker Stadyumu",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Sukrusaracoglu.jpg/960px-Sukrusaracoglu.jpg",
		options: [
			"Ülker Stadyumu",
			"Estadio La Cartuja de Sevilla",
			"Estadio Santiago Bernabéu",
			"Olympic Stadium",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Stade Pierre-Mauroy",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Russia_v_Slovakia_%282016-06-15%29_18.jpg/960px-Russia_v_Slovakia_%282016-06-15%29_18.jpg",
		options: [
			"Emirates Stadium",
			"Estadio La Cartuja de Sevilla",
			"Stade Pierre-Mauroy",
			"Kazan Arena",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Stade Roi Baudouin",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Stade_Roi_Baudouin.JPG/960px-Stade_Roi_Baudouin.JPG",
		options: [
			"Ernst-Happel-Stadion",
			"Puskás Aréna",
			"Stade Roi Baudouin",
			"München",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Ajinomoto Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Ajinomoto_Stadium_2018-13.jpg/960px-Ajinomoto_Stadium_2018-13.jpg",
		options: [
			"Bogyoke Aung San Stadium",
			"Al-Bayt Stadium",
			"JRD Tata Sports Complex Stadium",
			"Ajinomoto Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Estádio do Dragão",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Porto_Est%C3%A1dio_do_Drag%C3%A3o_2.jpg/960px-Porto_Est%C3%A1dio_do_Drag%C3%A3o_2.jpg",
		options: [
			"Estádio do Dragão",
			"München",
			"Stadion Miejski w Poznaniu",
			"Stadio Giuseppe Meazza",
		],
		continent: "europe",
		tier: 1,
	},
	{
		name: "Casa de Apostas Arena Fonte Nova",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Arena_Fonte_Nova_External_View.jpg/960px-Arena_Fonte_Nova_External_View.jpg",
		options: [
			"Estádio José Pinheiro Borda",
			"Estadio José Amalfitani",
			"Casa de Apostas Arena Fonte Nova",
			"Estádio Paulo Constantino",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Stade Olympique de Sousse",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Stade_olympique_de_Sousse%2C_vue_panoramique%2C_1_Mars_2025.jpg/960px-Stade_olympique_de_Sousse%2C_vue_panoramique%2C_1_Mars_2025.jpg",
		options: [
			"Ali La Pointe Stadium",
			"Hammadi Agrebi Stadium",
			"Stade Olympique de Sousse",
			"Baba Yara Stadium",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "Cologne",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/FIFA_WM06_Stadion_Koeln.jpg/960px-FIFA_WM06_Stadion_Koeln.jpg",
		options: [
			"Stage Front Stadium",
			"Cologne",
			"Fritz-Walter-Stadion",
			"Aviva Stadium",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Greenfield International Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Greenfield_International_Stadium_Kerala.jpg/960px-Greenfield_International_Stadium_Kerala.jpg",
		options: [
			"Al-Janoub Stadium",
			"Salt Lake Stadium",
			"Greenfield International Stadium",
			"Dalian Suoyuwan Football Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "EMS Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Kozhikode_EMS_Stadium.jpg/960px-Kozhikode_EMS_Stadium.jpg",
		options: [
			"Hefei Olympic Sports Centre Stadium",
			"EMS Stadium",
			"Nissan Stadium",
			"Camille Chamoun Sports City Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "KD Singh Babu Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/K_D_Singh_Babu_Stadium.jpg/960px-K_D_Singh_Babu_Stadium.jpg",
		options: [
			"Bukit Jalil National Stadium",
			"Bakı Olimpiya stadionu",
			"KD Singh Babu Stadium",
			"Bao'an Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Eden Park",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Auckland_EdenPark.jpg/960px-Auckland_EdenPark.jpg",
		options: [
			"Docklands Stadium",
			"Stadium Australia",
			"Eden Park",
			"Optus Stadium",
		],
		continent: "oceania",
		tier: 3,
	},
	{
		name: "Max-Morlock-Stadion",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Frankenstadion_2.JPG/960px-Frankenstadion_2.JPG",
		options: [
			"Weserstadion",
			"Max-Morlock-Stadion",
			"Signal Iduna Park",
			"Ernst-Happel-Stadion",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "June 11 Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/11_June_Stadium_BenTaher.jpg/960px-11_June_Stadium_BenTaher.jpg",
		options: [
			"June 11 Stadium",
			"Stade Léopold Sédar Senghor",
			"Cairo International Stadium",
			"Free State Stadium",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "Kim Il-sung Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/North_Korea_v_Philippines%2C_8_October_2015_F.png/960px-North_Korea_v_Philippines%2C_8_October_2015_F.png",
		options: [
			"Rajamangala National Stadium",
			"Kim Il-sung Stadium",
			"Jeonju World Cup Stadium",
			"Wuhan Sports Centre Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "EDION Stadium Hiroshima",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Big_Arch_Stadium_Panorama.jpg/960px-Big_Arch_Stadium_Panorama.jpg",
		options: [
			"Jinan Olympic Sports Centre Stadium",
			"EDION Stadium Hiroshima",
			"Bogyoke Aung San Stadium",
			"Jawaharlal Nehru Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Pars Shiraz Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pars_Stadium_Photos_Image_6.jpg/960px-Pars_Stadium_Photos_Image_6.jpg",
		options: [
			"Jinan Olympic Sports Centre Stadium",
			"Chongqing Olympic Sports Centre Stadium",
			"Pars Shiraz Stadium",
			"Incheon Munhak Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Sultan Mizan Zainal Abidin Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Sultan_Mizan_Zainal_Abidin_Stadium_%28Night%29_2021.jpg/960px-Sultan_Mizan_Zainal_Abidin_Stadium_%28Night%29_2021.jpg",
		options: [
			"Stadion Gelora Bung Tomo",
			"Sultan Mizan Zainal Abidin Stadium",
			"Daegu Stadium",
			"Busan Asiad Main Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Estadio Akron",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Omnilife_Stadium.png/960px-Omnilife_Stadium.png",
		options: [
			"Stadium",
			"War Memorial Stadium",
			"Gillette Stadium",
			"Estadio Akron",
		],
		continent: "north_america",
		tier: 3,
	},
	{
		name: "Fritz-Walter-Stadion",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Kaiserslautern_18.JPG/960px-Kaiserslautern_18.JPG",
		options: [
			"Tottenham Hotspur Stadium",
			"Fritz-Walter-Stadion",
			"Atatürk Olimpiyat Stadyumu",
			"Stadio Diego Armando Maradona",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Estadio José Amalfitani",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Argentina_A_vs_Inglaterra_A_02.JPG/960px-Argentina_A_vs_Inglaterra_A_02.JPG",
		options: [
			"Estadio Monumental",
			"Arena MRV",
			"Estadio General Pablo Rojas",
			"Estadio José Amalfitani",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Camille Chamoun Sports City Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Camille_Chamoun_Sports_City_Stadium_2018_-_Beirut_derby_%28Nejmeh_fans%29.png/960px-Camille_Chamoun_Sports_City_Stadium_2018_-_Beirut_derby_%28Nejmeh_fans%29.png",
		options: [
			"Daegu Stadium",
			"Camille Chamoun Sports City Stadium",
			"Busan Asiad Main Stadium",
			"Jinnah Sports Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Mestalla",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/CAMP_DE_MESTALLA_GRADA_DE_LA_MAR_2014_%282%29.JPG/960px-CAMP_DE_MESTALLA_GRADA_DE_LA_MAR_2014_%282%29.JPG",
		options: [
			"Hill Dickinson Stadium",
			"Polsat Plus Arena Gdańsk",
			"Mestalla",
			"Stadion Śląski",
		],
		continent: "europe",
		tier: 1,
	},
	{
		name: "Miyagi Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/MiyagiStadiumTrackField.jpg/960px-MiyagiStadiumTrackField.jpg",
		options: [
			"Al-Janoub Stadium",
			"Khalifa International Stadium",
			"Tianhe Stadium",
			"Miyagi Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Incheon Munhak Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Munhak_Stadium_Corner.jpg/960px-Munhak_Stadium_Corner.jpg",
		options: [
			"Incheon Munhak Stadium",
			"Hefei Olympic Sports Centre Stadium",
			"Beijing National Stadium",
			"Busan Asiad Main Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Heinz-von-Heiden-Arena",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/HDI_Arena%2C_WM_Stadion_2006.jpg/960px-HDI_Arena%2C_WM_Stadion_2006.jpg",
		options: [
			"Kazimierz Górski National Stadium",
			"Heinz-von-Heiden-Arena",
			"Stade Geoffroy-Guichard",
			"Stadio Giuseppe Meazza",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Parc des Princes",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/PSG-Nantes_Parc_des_Princes_05.jpg/960px-PSG-Nantes_Parc_des_Princes_05.jpg",
		options: [
			"Fisht Olympic Stadium",
			"Parc des Princes",
			"Stadio Giuseppe Meazza",
			"Max-Morlock-Stadion",
		],
		continent: "europe",
		tier: 1,
	},
	{
		name: "Stadium of Light",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/The_Strongbow_Stand_at_the_Stadium_of_Light_-_geograph.org.uk_-_6233873.jpg/960px-The_Strongbow_Stand_at_the_Stadium_of_Light_-_geograph.org.uk_-_6233873.jpg",
		options: [
			"Estadio Ramón Sánchez Pizjuán",
			"Stadium of Light",
			"Deutsche Bank Park",
			"Hill Dickinson Stadium",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Nelson Mandela Bay Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Nelson_Mandela_Stadium_in_Port_Elizabeth_%28cropped%29.jpg/960px-Nelson_Mandela_Stadium_in_Port_Elizabeth_%28cropped%29.jpg",
		options: [
			"Moses Mabhida Stadium",
			"Nelson Mandela Bay Stadium",
			"Hocine Ait Ahmed Stadium",
			"Stade du Complexe sportif de Fès",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "Estadio Tomás Adolfo Ducó",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Estadio_huracan_interior_tribuna_gcba.jpg/960px-Estadio_huracan_interior_tribuna_gcba.jpg",
		options: [
			"Estadio Malvinas Argentinas",
			"Estadio Tomás Adolfo Ducó",
			"Estádio Nacional Mané Garrincha",
			"Estadio Metropolitano Roberto Meléndez",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Jinnah Sports Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Jinnah_Sports_Stadium_track_and_field.jpg/960px-Jinnah_Sports_Stadium_track_and_field.jpg",
		options: [
			"Hrazdan Stadium",
			"Busan Asiad Main Stadium",
			"Jinnah Sports Stadium",
			"He Long Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Choctaw Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Globe_Life_Park_in_Arlington_Panoramic_Picture.jpg/960px-Globe_Life_Park_in_Arlington_Panoramic_Picture.jpg",
		options: [
			"BC Place Stadium",
			"Estadio Cuauhtémoc",
			"Protective Stadium",
			"Choctaw Stadium",
		],
		continent: "north_america",
		tier: 3,
	},
	{
		name: "Estadio Libertadores de América",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Estadio_Libertadores_de_America_2014.JPG/960px-Estadio_Libertadores_de_America_2014.JPG",
		options: [
			"Estadio Libertadores de América",
			"Estadio Marcelo Bielsa",
			"Arena Pantanal",
			"Estadio de la UNSA",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Free State Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Free_State_Stadium1.jpg/960px-Free_State_Stadium1.jpg",
		options: [
			"Adrar Stadium",
			"Stade du Complexe sportif de Fès",
			"Stade Mohammed V",
			"Free State Stadium",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "Nagai Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Nagai_stadium20040717.jpg/960px-Nagai_stadium20040717.jpg",
		options: [
			"Shandong Provincial Stadium",
			"Sultan Mizan Zainal Abidin Stadium",
			"Toyota Stadium",
			"Nagai Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Neo Química Arena",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Corinthians_x_Gr%C3%AAmio_-_Brasileir%C3%A3o_2016.jpg/960px-Corinthians_x_Gr%C3%AAmio_-_Brasileir%C3%A3o_2016.jpg",
		options: [
			"Neo Química Arena",
			"Estadio Atanasio Girardot",
			"Estadio Cachamay",
			"MorumBIS",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Rogers Centre",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Fisheye_view_from_the_Corona_Rooftop_Patio_-_Rogers_Centre.jpg/960px-Fisheye_view_from_the_Corona_Rooftop_Patio_-_Rogers_Centre.jpg",
		options: [
			"Rogers Centre",
			"War Memorial Stadium",
			"Soldier Field",
			"Yankee Stadium",
		],
		continent: "north_america",
		tier: 3,
	},
	{
		name: "Yankee Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/New_York_Yankees_Stadion_%2821603969303%29_%282%29.jpg/960px-New_York_Yankees_Stadion_%2821603969303%29_%282%29.jpg",
		options: [
			"Lumen Field",
			"War Memorial Stadium",
			"BC Place Stadium",
			"Yankee Stadium",
		],
		continent: "north_america",
		tier: 3,
	},
	{
		name: "Stadio Artemio Franchi",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Soccer_in_Florence%2C_Italy%2C_2007.jpg/960px-Soccer_in_Florence%2C_Italy%2C_2007.jpg",
		options: [
			"Estádio do Dragão",
			"Heinz-von-Heiden-Arena",
			"Allianz Stadium",
			"Stadio Artemio Franchi",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Protective Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Protective_Stadium.jpg/960px-Protective_Stadium.jpg",
		options: [
			"Mercedes-Benz Stadium",
			"Protective Stadium",
			"Estadio Cuauhtémoc",
			"Oakland–Alameda County Coliseum",
		],
		continent: "north_america",
		tier: 3,
	},
	{
		name: "Estadio Ciudad de Lanús – Néstor Díaz Pérez",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Editat%C3%B3n_Club_Lan%C3%BAs_-_Instalaciones_%288%29.JPG/960px-Editat%C3%B3n_Club_Lan%C3%BAs_-_Instalaciones_%288%29.JPG",
		options: [
			"Estadio Ciudad de Lanús – Néstor Díaz Pérez",
			"Estádio Major Antônio Couto Pereira",
			"Estadio Olimpico Metropolitano de Mérida",
			"Estádio Governador Magalhães Pinto",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Estadio Metropolitano Roberto Meléndez",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Estadio_Metropolitano_de_Baranquilla_2011.jpg/960px-Estadio_Metropolitano_de_Baranquilla_2011.jpg",
		options: [
			"Estadio Metropolitano Roberto Meléndez",
			"Estadio Nacional",
			"Estadio Mario Alberto Kempes",
			"Estadio Gigante de Arroyito",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Estádio Olímpico Nilton Santos",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Est%C3%A1dio_Municipal_Jo%C3%A3o_Havelange_14072007.jpg/960px-Est%C3%A1dio_Municipal_Jo%C3%A3o_Havelange_14072007.jpg",
		options: [
			"Estadio Campeón del Siglo",
			"Estadio Brigadier General Estanislao López",
			"Estádio Olímpico Nilton Santos",
			"Estadio Gigante de Arroyito",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Itaipava Arena Pernambuco",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Panorama_of_Arena_Pernambuco.jpg/960px-Panorama_of_Arena_Pernambuco.jpg",
		options: [
			"Itaipava Arena Pernambuco",
			"Estadio Ciudad de Lanús – Néstor Díaz Pérez",
			"Estádio Governador Magalhães Pinto",
			"Estádio Universitário Pedro Pedrossian",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Arena MRV",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Atl%C3%A9tico_Mineiro_v_Bahia%2C_Arena_MRV%2C_Belo_Horizonte%2C_2024.jpg/960px-Atl%C3%A9tico_Mineiro_v_Bahia%2C_Arena_MRV%2C_Belo_Horizonte%2C_2024.jpg",
		options: [
			"Arena MRV",
			"Estadio Gigante de Arroyito",
			"Estádio Estadual Jornalista Edgar Augusto Proença",
			"Estadio Monumental Isidro Romero Carbo",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Estádio Paulo Constantino",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Derby_Paulista_%28Corinthians-Palmeiras%29_Paulist%C3%A3o_2009.jpg/960px-Derby_Paulista_%28Corinthians-Palmeiras%29_Paulist%C3%A3o_2009.jpg",
		options: [
			"Estadio General Pablo Rojas",
			"Estadio Centenario",
			"Estádio Paulo Constantino",
			"Estadio Hernando Siles",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Estadio Atanasio Girardot",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Atanasio_Girardot_Stadium.jpg/960px-Atanasio_Girardot_Stadium.jpg",
		options: [
			"Maracanã",
			"Estadio Atanasio Girardot",
			"Estadio Nacional",
			"Casa de Apostas Arena Fonte Nova",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Adrar Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Stade-Adrar2019.png/960px-Stade-Adrar2019.png",
		options: [
			"Miloud Hadefi Stadium",
			"Adrar Stadium",
			"June 11 Stadium",
			"Stade Tata Raphaël",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "Lukoil Arena",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Match_veteranov_Spartaka_%2813%29.jpg/960px-Match_veteranov_Spartaka_%2813%29.jpg",
		options: [
			"Orange Vélodrome",
			"Tarczyński Arena Wrocław",
			"Kazimierz Górski National Stadium",
			"Lukoil Arena",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Grand stade de Marrakech",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Stade_de_marrakech.jpg/960px-Stade_de_marrakech.jpg",
		options: [
			"Mandela National Stadium",
			"Grand stade de Marrakech",
			"Adrar Stadium",
			"Kings Park Stadium",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "Mandela National Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Namboole_Stadium_Matchday_13.jpg/960px-Namboole_Stadium_Matchday_13.jpg",
		options: [
			"Ellis Park Stadium",
			"Mandela National Stadium",
			"Royal Bafokeng Stadium",
			"Moses Mabhida Stadium",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "Tarczyński Arena Wrocław",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Wroc%C5%82aw_Municipal_Stadium_-_Euro_2012_%28panorama%29.jpg/960px-Wroc%C5%82aw_Municipal_Stadium_-_Euro_2012_%28panorama%29.jpg",
		options: [
			"Tarczyński Arena Wrocław",
			"Allianz Stadium",
			"Stade de France",
			"Ernst-Happel-Stadion",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Kazan Arena",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Poland_v._Colombia_%2842095441565%29.jpg/960px-Poland_v._Colombia_%2842095441565%29.jpg",
		options: [
			"Ülker Stadyumu",
			"Grand Sports Arena of the Luzhniki Olympic Complex",
			"Estadio Ramón Sánchez Pizjuán",
			"Kazan Arena",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "24 February 1956 Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Stade_24_F%C3%A9vrier_1956.jpg/960px-Stade_24_F%C3%A9vrier_1956.jpg",
		options: [
			"Moi International Sports Centre",
			"24 February 1956 Stadium",
			"Stade Tata Raphaël",
			"Stade Olympique de Sousse",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "Stadion Gelora Bung Tomo",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Gelora_Bung_Tomo_renovated.jpg/960px-Gelora_Bung_Tomo_renovated.jpg",
		options: [
			"Hang Jebat Stadium",
			"Busan Asiad Main Stadium",
			"Stadion Gelora Bung Tomo",
			"National Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Estadio General Pablo Rojas",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Estadio_General_Pablo_Rojas.jpg/960px-Estadio_General_Pablo_Rojas.jpg",
		options: [
			"Estádio Olímpico Nilton Santos",
			"Estadio Mâs Monumental",
			"Estádio Governador Alberto Tavares Silva",
			"Estadio General Pablo Rojas",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Zibo Sports Centre Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/%E6%B7%84%E5%8D%9A%E5%B8%82%E4%BD%93%E8%82%B2%E4%B8%AD%E5%BF%83%E4%BD%93%E8%82%B2%E5%9C%BA.jpg/960px-%E6%B7%84%E5%8D%9A%E5%B8%82%E4%BD%93%E8%82%B2%E4%B8%AD%E5%BF%83%E4%BD%93%E8%82%B2%E5%9C%BA.jpg",
		options: [
			"Hohhot City Stadium",
			"EMS Stadium",
			"Hefei Olympic Sports Centre Stadium",
			"Zibo Sports Centre Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Stadium Tuanku Abdul Rahman",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Stadium_Tuanku_Abdul_Rahman%2C_Paroi.jpg/960px-Stadium_Tuanku_Abdul_Rahman%2C_Paroi.jpg",
		options: [
			"Shandong Provincial Stadium",
			"Workers' Stadium",
			"Stadium Tuanku Abdul Rahman",
			"Yadegar-e-Emam Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Stade du Complexe sportif de Fès",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Complexe_sportif_de_F%C3%A8s.jpg/960px-Complexe_sportif_de_F%C3%A8s.jpg",
		options: [
			"Free State Stadium",
			"Baba Yara Stadium",
			"Stade du Complexe sportif de Fès",
			"19 May 1956 Stadium",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "Toyota Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/JPNxGEO20180623_%283%29.jpg/960px-JPNxGEO20180623_%283%29.jpg",
		options: [
			"Stadion Gelora Bung Tomo",
			"Bakı Olimpiya stadionu",
			"Kashima Football Stadium",
			"Toyota Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Zayed Sports City Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Abu_Dhabi_Zayed_Sports_City_Stadium_2.jpg/960px-Abu_Dhabi_Zayed_Sports_City_Stadium_2.jpg",
		options: [
			"Rungrado 1st of May Stadium",
			"EMS Stadium",
			"Sapporo Dome",
			"Zayed Sports City Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Red Bull Arena",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Leipzig_stadium.jpg/960px-Leipzig_stadium.jpg",
		options: [
			"Stadium of Light",
			"Red Bull Arena",
			"Puskás Aréna",
			"Ernst-Happel-Stadion",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Estádio Governador Alberto Tavares Silva",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Est%C3%A1dio_Governador_Alberto_Tavares_Silva%2C_Teresina_PI.jpg/960px-Est%C3%A1dio_Governador_Alberto_Tavares_Silva%2C_Teresina_PI.jpg",
		options: [
			"Estádio Governador Alberto Tavares Silva",
			"Estadio Monumental Isidro Romero Carbo",
			"Castelão",
			"Itaipava Arena Pernambuco",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Estádio Universitário Pedro Pedrossian",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Est%C3%A1dio_Universit%C3%A1rio_Pedro_Pedrossian_0253l.jpg/960px-Est%C3%A1dio_Universit%C3%A1rio_Pedro_Pedrossian_0253l.jpg",
		options: [
			"Estadio Ciudad de Lanús – Néstor Díaz Pérez",
			"Estadio General Pablo Rojas",
			"Estádio Universitário Pedro Pedrossian",
			"Estadio Atanasio Girardot",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Arena Pantanal",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Arena_Pantanal.jpg/960px-Arena_Pantanal.jpg",
		options: [
			"Ligga Arena",
			"Itaipava Arena Pernambuco",
			"Estadio Atanasio Girardot",
			"Arena Pantanal",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Arena da Amazônia",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Arena_Amaz%C3%B4nia_Manaus.jpg/960px-Arena_Amaz%C3%B4nia_Manaus.jpg",
		options: [
			"Estadio Nacional",
			"Estadio Gigante de Arroyito",
			"Arena da Amazônia",
			"Itaipava Arena Pernambuco",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Suwon World Cup Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/20121003_Suwon_vs_Seoul.jpg/960px-20121003_Suwon_vs_Seoul.jpg",
		options: [
			"Hangzhou Olympic Sports Expo Centre Stadium",
			"Chongqing Olympic Sports Centre Stadium",
			"Stadium Negeri Pulau Pinang",
			"Suwon World Cup Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Stadion Utama Riau",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Riau_Main_Stadium_%28cropped%29.JPG/960px-Riau_Main_Stadium_%28cropped%29.JPG",
		options: [
			"Stadion Utama Riau",
			"Hrazdan Stadium",
			"Stadium Tuanku Abdul Rahman",
			"Jeonju World Cup Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Estadio Ramón Sánchez Pizjuán",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Sevilla2-1Lega20182.jpg/960px-Sevilla2-1Lega20182.jpg",
		options: [
			"Estadio Ramón Sánchez Pizjuán",
			"Olympic Stadium",
			"MHPArena",
			"Stadio Diego Armando Maradona",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Allianz Parque",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Imagens_da_Cidade_de_S%C3%A3o_Paulo_e_Zool%C3%B3gico_da_Capital_Paulista._%2847480340301%29.jpg/960px-Imagens_da_Cidade_de_S%C3%A3o_Paulo_e_Zool%C3%B3gico_da_Capital_Paulista._%2847480340301%29.jpg",
		options: [
			"Estadio José Pachencho Romero",
			"Estádio Estadual Jornalista Edgar Augusto Proença",
			"Neo Química Arena",
			"Allianz Parque",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Shandong Provincial Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/SHANGDONGSPORTS.jpg/960px-SHANGDONGSPORTS.jpg",
		options: [
			"Shizuoka Stadium",
			"Shandong Provincial Stadium",
			"Sân vận động Quốc gia Mỹ Đình",
			"Jaber al-Ahmad International Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Polsat Plus Arena Gdańsk",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Gda%C5%84sk%2C_Stadion_PGE_Arena_-_fotopolska.eu_%28326975%29.jpg/960px-Gda%C5%84sk%2C_Stadion_PGE_Arena_-_fotopolska.eu_%28326975%29.jpg",
		options: [
			"Riyadh Air Metropolitano",
			"Stadio Diego Armando Maradona",
			"Polsat Plus Arena Gdańsk",
			"Stadio San Nicola",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Estadio Pedro Bidegain",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Platea_Este_Nuevo_Gasometro_1.jpg/960px-Platea_Este_Nuevo_Gasometro_1.jpg",
		options: [
			"Estádio Serra Dourada",
			"Castelão",
			"Estadio Pedro Bidegain",
			"Estadio Brigadier General Estanislao López",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Stadion Miejski w Poznaniu",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Stadion_Miejski_w_Poznaniu_2013_panorama.jpg/960px-Stadion_Miejski_w_Poznaniu_2013_panorama.jpg",
		options: [
			"Fisht Olympic Stadium",
			"Stadion Miejski w Poznaniu",
			"Stadio Artemio Franchi",
			"Estadi Olímpic Lluís Companys",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Vasil Levski National Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Vasil_Levski_National_Stadium_2022.jpg/960px-Vasil_Levski_National_Stadium_2022.jpg",
		options: [
			"Villa Park",
			"Gazprom Arena",
			"Vasil Levski National Stadium",
			"Stamford Bridge",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Estadio Universidad San Marcos",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/UNMSM_Estadio_San_Marcos_-_2019.png/960px-UNMSM_Estadio_San_Marcos_-_2019.png",
		options: [
			"Estadio Universidad San Marcos",
			"Estadio Monumental",
			"Estadio General Pablo Rojas",
			"Estádio Serra Dourada",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Ullevi",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Ullevi_stadium%2C_23_june_2018.png/960px-Ullevi_stadium%2C_23_june_2018.png",
		options: [
			"Ullevi",
			"Red Bull Arena",
			"Deutsche Bank Park",
			"Stage Front Stadium",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Estadio General Santander",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Cucuta704.jpg/960px-Cucuta704.jpg",
		options: [
			"Estadio Marcelo Bielsa",
			"Estádio Serra Dourada",
			"Estadio General Santander",
			"Estadio Libertadores de América",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Villa Park",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Villa_Stadion_panorama_2016.jpg/960px-Villa_Stadion_panorama_2016.jpg",
		options: [
			"Estadi Olímpic Lluís Companys",
			"Villa Park",
			"Goodison Park",
			"Helsingin",
		],
		continent: "europe",
		tier: 2,
	},
	{
		name: "Perak Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Perak_Stadium.JPG/960px-Perak_Stadium.JPG",
		options: [
			"Perak Stadium",
			"Wuhan Sports Centre Stadium",
			"Seoul World Cup Stadium",
			"Aleppo International Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Jeonju World Cup Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/%EC%A0%84%EC%A3%BC%EC%9B%94%EB%93%9C%EC%BB%B5%EA%B2%BD%EA%B8%B0%EC%9E%A5_%EB%82%B4%EB%B6%80_%EC%A0%84%EA%B2%BD.jpg/960px-%EC%A0%84%EC%A3%BC%EC%9B%94%EB%93%9C%EC%BB%B5%EA%B2%BD%EA%B8%B0%EC%9E%A5_%EB%82%B4%EB%B6%80_%EC%A0%84%EA%B2%BD.jpg",
		options: [
			"Jeonju World Cup Stadium",
			"Boris Paitchadze Dinamo Arena",
			"Tianjin Olympic Sports Centre Stadium",
			"Nagai Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Ligga Arena",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Arena-fifa-wc-2014_%289%29.jpg/960px-Arena-fifa-wc-2014_%289%29.jpg",
		options: [
			"Estadio Metropolitano Roberto Meléndez",
			"Estadio Monumental Isidro Romero Carbo",
			"Ligga Arena",
			"Estadio Deportivo Cali",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Weserstadion",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Weserstadion_panorama.JPG/960px-Weserstadion_panorama.JPG",
		options: [
			"Stadio San Nicola",
			"Nou Mestalla",
			"Weserstadion",
			"Stadio Giuseppe Meazza",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Denka Big Swan Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Bigswan080628.JPG/960px-Bigswan080628.JPG",
		options: [
			"Camille Chamoun Sports City Stadium",
			"Denka Big Swan Stadium",
			"Nanjing Olympic Sports Centre Stadium",
			"Hang Jebat Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Estadio Olimpico Metropolitano de Mérida",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Metropolitanodemeridacopamerica.jpg/960px-Metropolitanodemeridacopamerica.jpg",
		options: [
			"Estádio José Pinheiro Borda",
			"Estádio José do Rego Maciel",
			"Estadio Olimpico Metropolitano de Mérida",
			"Estádio Major Antônio Couto Pereira",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Daejeon World Cup Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Daejeon_World_Cup_Stadium.JPG/960px-Daejeon_World_Cup_Stadium.JPG",
		options: [
			"Beijing National Stadium",
			"Goyang Stadium",
			"Greenfield International Stadium",
			"Daejeon World Cup Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Matmut ATLANTIQUE",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/500px_photo_%28165733217%29.jpeg/960px-500px_photo_%28165733217%29.jpeg",
		options: [
			"Matmut ATLANTIQUE",
			"Estadio Benito Villamarín",
			"Kazan Arena",
			"Goodison Park",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Helsingin",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Olympiastadion_2_2020-08-12.jpg/960px-Olympiastadion_2_2020-08-12.jpg",
		options: [
			"Helsingin",
			"Estádio José Alvalade",
			"Stade Roi Baudouin",
			"Johan Cruijff Arena",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Estádio Serra Dourada",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/LeandroMoura_EstadioSerraDourada_Goiania_GO_%2840268265714%29.jpg/960px-LeandroMoura_EstadioSerraDourada_Goiania_GO_%2840268265714%29.jpg",
		options: [
			"Estádio Serra Dourada",
			"Estadio Ciudad de Lanús – Néstor Díaz Pérez",
			"Estadio Marcelo Bielsa",
			"Estadio Metropolitano de fútbol de Lara",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Estadio Deportivo Cali",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/SportingCali12.png/960px-SportingCali12.png",
		options: [
			"Estadio Único Diego Armando Maradona",
			"Estadio Deportivo Cali",
			"Castelão",
			"Estádio Paulo Constantino",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Estadio Modelo Alberto Spencer",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Estadio_Modelo_Lleno_2007_-_panoramio.jpg/960px-Estadio_Modelo_Lleno_2007_-_panoramio.jpg",
		options: [
			"Estadio José Pachencho Romero",
			"Estadio Modelo Alberto Spencer",
			"La Bombonera",
			"Estadio Pedro Bidegain",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Chengdu Sports Centre Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Chengdu_Sports_Center.JPG/960px-Chengdu_Sports_Center.JPG",
		options: [
			"Sultan Mizan Zainal Abidin Stadium",
			"Yizhong Sports Centre Stadium",
			"Hang Jebat Stadium",
			"Chengdu Sports Centre Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Royal Bafokeng Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Royal_Bafokeng_Stadium%2C_Phokeng.jpg/960px-Royal_Bafokeng_Stadium%2C_Phokeng.jpg",
		options: [
			"Kings Park Stadium",
			"Cairo International Stadium",
			"Royal Bafokeng Stadium",
			"Ellis Park Stadium",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "Estadio Universitario",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Estadio_Universitario_Concachampions.jpg/960px-Estadio_Universitario_Concachampions.jpg",
		options: [
			"Estadio Universitario",
			"Choctaw Stadium",
			"Lumen Field",
			"Gillette Stadium",
		],
		continent: "north_america",
		tier: 3,
	},
	{
		name: "Estadio Brigadier General Estanislao López",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Estadio_Brigadier_General_Estanislao_L%C3%B3pez_-_Col%C3%B3n_de_Santa_Fe.jpg/960px-Estadio_Brigadier_General_Estanislao_L%C3%B3pez_-_Col%C3%B3n_de_Santa_Fe.jpg",
		options: [
			"Estadio Brigadier General Estanislao López",
			"Estádio Serra Dourada",
			"MorumBIS",
			"Castelão",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Estadio Marcelo Bielsa",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Estadio_Marcelo_Bielsa.jpg/960px-Estadio_Marcelo_Bielsa.jpg",
		options: [
			"Estadio Ciudad de Lanús – Néstor Díaz Pérez",
			"Estádio Estadual Jornalista Edgar Augusto Proença",
			"Estadio Marcelo Bielsa",
			"La Bombonera",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Stade Geoffroy-Guichard",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/St_Etienne_Stade_Geoffroy_Guichard.jpg/960px-St_Etienne_Stade_Geoffroy_Guichard.jpg",
		options: [
			"Stadio San Nicola",
			"Stade Pierre-Mauroy",
			"Stade Geoffroy-Guichard",
			"Anoeta Stadium",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Vodafone Park",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Vodafone_Park_Panorama.jpg/960px-Vodafone_Park_Panorama.jpg",
		options: [
			"Vodafone Park",
			"Stade de France",
			"Fritz-Walter-Stadion",
			"Strawberry Arena",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Peter Mokaba Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Teams_are_warming_up_%284738980575%29.jpg/960px-Teams_are_warming_up_%284738980575%29.jpg",
		options: [
			"Free State Stadium",
			"Peter Mokaba Stadium",
			"Adrar Stadium",
			"24 February 1956 Stadium",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "Estadio Gigante de Arroyito",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Estadio_Gigante_de_Arroyito.jpg/960px-Estadio_Gigante_de_Arroyito.jpg",
		options: [
			"Estádio Governador Alberto Tavares Silva",
			"Estadio Campeón del Siglo",
			"Estadio de la UNSA",
			"Estadio Gigante de Arroyito",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Estadio Cachamay",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/CTE_Chamay_Aereo_Cut.jpg/960px-CTE_Chamay_Aereo_Cut.jpg",
		options: [
			"Estadio Único Diego Armando Maradona",
			"Estadio Metropolitano de fútbol de Lara",
			"Estádio Paulo Constantino",
			"Estadio Cachamay",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Estadio de Liga Deportiva Universitaria",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cl%C3%A1sico_Liga_de_Quito-Barcelona_de_Guayaquil.JPG/960px-Cl%C3%A1sico_Liga_de_Quito-Barcelona_de_Guayaquil.JPG",
		options: [
			"Estadio Modelo Alberto Spencer",
			"Estadio de Liga Deportiva Universitaria",
			"Estadio Metropolitano Roberto Meléndez",
			"Estádio Major Antônio Couto Pereira",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Allianz Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Turin_Juventus_Stadium_1.jpg/960px-Turin_Juventus_Stadium_1.jpg",
		options: [
			"Stadium of Light",
			"MERKUR SPIEL-ARENA",
			"Cologne",
			"Allianz Stadium",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Sapporo Dome",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Sapporo_Dome_001.jpeg/960px-Sapporo_Dome_001.jpeg",
		options: [
			"Incheon Munhak Stadium",
			"Daejeon World Cup Stadium",
			"Sapporo Dome",
			"Al-Bayt Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Stamford Bridge",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Stamford_Bridge%2C_Chelsea_vs_Nottingham_Forest%2C_5_January_2020.jpg/960px-Stamford_Bridge%2C_Chelsea_vs_Nottingham_Forest%2C_5_January_2020.jpg",
		options: [
			"Etihad Stadium",
			"Emirates Stadium",
			"Metalist Stadium",
			"Stamford Bridge",
		],
		continent: "europe",
		tier: 1,
	},
	{
		name: "Goyang Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Goyang_sta_1.JPG/960px-Goyang_sta_1.JPG",
		options: [
			"Shizuoka Stadium",
			"Goyang Stadium",
			"EDION Stadium Hiroshima",
			"Hangzhou Olympic Sports Expo Centre Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Estadio Hernando Siles",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Hernando_Siles_Stadium_-_La_Paz.jpg/960px-Hernando_Siles_Stadium_-_La_Paz.jpg",
		options: [
			"Estadio Metropolitano Roberto Meléndez",
			"Estádio Governador João Castelo",
			"Estadio Cachamay",
			"Estadio Hernando Siles",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Mbombela Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Mbombela_Stadium_arena.jpg/960px-Mbombela_Stadium_arena.jpg",
		options: [
			"Loftus Versfeld Stadium",
			"Miloud Hadefi Stadium",
			"Mbombela Stadium",
			"Stade Olympique de Sousse",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "Estadio José Pachencho Romero",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/JPPachenchoRomero-16.jpg/960px-JPPachenchoRomero-16.jpg",
		options: [
			"Estadio José Pachencho Romero",
			"Estadio Olimpico Metropolitano de Mérida",
			"Estadio Atanasio Girardot",
			"Castelão",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Stade Nelson Mandela",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Nelson_Mandela_Stadium.jpg/960px-Nelson_Mandela_Stadium.jpg",
		options: [
			"Stade Nelson Mandela",
			"Moi International Sports Centre",
			"Cairo International Stadium",
			"June 11 Stadium",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "Kashima Football Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Kashima_Soccer_Stadium_5.jpg/960px-Kashima_Soccer_Stadium_5.jpg",
		options: [
			"Greenfield International Stadium",
			"Nanjing Olympic Sports Centre Stadium",
			"Kashima Football Stadium",
			"Sapporo Dome",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Baba Yara Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Kumasi924.JPG/960px-Kumasi924.JPG",
		options: [
			"19 May 1956 Stadium",
			"Baba Yara Stadium",
			"Stade du Complexe sportif de Fès",
			"Stade Mohammed V",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "Estádio Major Antônio Couto Pereira",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Est%C3%A1dio_Couto_Pereira.jpg/960px-Est%C3%A1dio_Couto_Pereira.jpg",
		options: [
			"Estadio Modelo Alberto Spencer",
			"Estadio Pedro Bidegain",
			"Estadio Ciudad de Lanús – Néstor Díaz Pérez",
			"Estádio Major Antônio Couto Pereira",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Stage Front Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Estadicornellaelprat_1.jpg/960px-Estadicornellaelprat_1.jpg",
		options: [
			"Allianz Stadium",
			"Hill Dickinson Stadium",
			"Stage Front Stadium",
			"Tottenham Hotspur Stadium",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Estadio Metropolitano de fútbol de Lara",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Estadio_Metropolitano_de_Lara.jpg/960px-Estadio_Metropolitano_de_Lara.jpg",
		options: [
			"Estádio Governador João Castelo",
			"Estádio Nacional Mané Garrincha",
			"Estadio General Pablo Rojas",
			"Estadio Metropolitano de fútbol de Lara",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Estadio Malvinas Argentinas",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Estadio_Malvinas_Argentinas.jpg/960px-Estadio_Malvinas_Argentinas.jpg",
		options: [
			"Arena da Amazônia",
			"Castelão",
			"Estadio Modelo Alberto Spencer",
			"Estadio Malvinas Argentinas",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Stadion Lukas Enembe",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Lukas_Enembe_Stadium.jpg/960px-Lukas_Enembe_Stadium.jpg",
		options: [
			"Nanjing Olympic Sports Centre Stadium",
			"Jawaharlal Nehru Stadium",
			"Stadion Lukas Enembe",
			"Shenyang Olympic Sports Centre Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Gwangju World Cup Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Gwangju_World_Cup_Stadium.jpg/960px-Gwangju_World_Cup_Stadium.jpg",
		options: [
			"Ajinomoto Stadium",
			"Gwangju World Cup Stadium",
			"Hrazdan Stadium",
			"Camille Chamoun Sports City Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Sân vận động Quốc gia Mỹ Đình",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kh%C3%A1n_%C4%91%C3%A0i_B_-_S%C3%A2n_v%E1%BA%ADn_%C4%91%E1%BB%99ng_Qu%E1%BB%91c_gia_M%E1%BB%B9_%C4%90%C3%ACnh.jpg/960px-Kh%C3%A1n_%C4%91%C3%A0i_B_-_S%C3%A2n_v%E1%BA%ADn_%C4%91%E1%BB%99ng_Qu%E1%BB%91c_gia_M%E1%BB%B9_%C4%90%C3%ACnh.jpg",
		options: [
			"Sân vận động Quốc gia Mỹ Đình",
			"Khalifa International Stadium",
			"Ajinomoto Stadium",
			"Stadion Utama Riau",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Goodison Park",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Goodison_Park_August_2022.jpg/960px-Goodison_Park_August_2022.jpg",
		options: [
			"Nou Mestalla",
			"Stadio Giuseppe Meazza",
			"Orange Vélodrome",
			"Goodison Park",
		],
		continent: "europe",
		tier: 2,
	},
	{
		name: "Estádio Governador João Castelo",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Est%C3%A1dio_Castel%C3%A3o_em_S%C3%A3o_Lu%C3%ADs%2C_Maranh%C3%A3o%2C_Brasil.jpg/960px-Est%C3%A1dio_Castel%C3%A3o_em_S%C3%A3o_Lu%C3%ADs%2C_Maranh%C3%A3o%2C_Brasil.jpg",
		options: [
			"Estádio Governador João Castelo",
			"Estadio Campeón del Siglo",
			"Casa de Apostas Arena Fonte Nova",
			"Estadio José Amalfitani",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Miloud Hadefi Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Stade_de_Oran.jpg/960px-Stade_de_Oran.jpg",
		options: [
			"Nelson Mandela Bay Stadium",
			"Stade Mohammed V",
			"Miloud Hadefi Stadium",
			"Free State Stadium",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "Estadio Campeón del Siglo",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Estadio_Campe%C3%B3n_del_Siglo_setiembre_2021.jpg/960px-Estadio_Campe%C3%B3n_del_Siglo_setiembre_2021.jpg",
		options: [
			"Estadio Campeón del Siglo",
			"Estádio Universitário Pedro Pedrossian",
			"Estadio Pedro Bidegain",
			"Estádio Nacional Mané Garrincha",
		],
		continent: "south_america",
		tier: 3,
	},
	{
		name: "Metalist Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Metalist_Stadium_Kharkiv.jpg/960px-Metalist_Stadium_Kharkiv.jpg",
		options: [
			"Metalist Stadium",
			"Anoeta Stadium",
			"Strawberry Arena",
			"Signal Iduna Park",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Anoeta Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Reale_Arena_Interior.png/960px-Reale_Arena_Interior.png",
		options: [
			"München",
			"Atatürk Olimpiyat Stadyumu",
			"Anoeta Stadium",
			"VELTINS-Arena",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Al-Janoub Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Visita_ao_est%C3%A1dio_de_futebol_Al_Janoub_1.jpg/960px-Visita_ao_est%C3%A1dio_de_futebol_Al_Janoub_1.jpg",
		options: [
			"National Stadium",
			"EDION Stadium Hiroshima",
			"KD Singh Babu Stadium",
			"Al-Janoub Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Al-Thumama Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Al_Thumama_Stadium_%282%29.jpg/960px-Al_Thumama_Stadium_%282%29.jpg",
		options: [
			"Stadion Gelora Bung Tomo",
			"Al-Thumama Stadium",
			"Bogyoke Aung San Stadium",
			"King Abdullah Sports City Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Ahmed Zabana Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Stade_Ahmed_Zabana_2.jpg/960px-Stade_Ahmed_Zabana_2.jpg",
		options: [
			"Stade Tata Raphaël",
			"Ahmed Zabana Stadium",
			"Stade Mohammed V",
			"Mbombela Stadium",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "Stadion Batakan",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/2017-11-14_Batakan.jpg/960px-2017-11-14_Batakan.jpg",
		options: [
			"Stadion Batakan",
			"Ajinomoto Stadium",
			"Daegu Stadium",
			"Jeonju World Cup Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Ali La Pointe Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Stade_ali_la_pointe_douera.jpg/960px-Stade_ali_la_pointe_douera.jpg",
		options: [
			"Cape Town Stadium",
			"Ali La Pointe Stadium",
			"Royal Bafokeng Stadium",
			"24 February 1956 Stadium",
		],
		continent: "africa",
		tier: 3,
	},
	{
		name: "Stadion Gelora Joko Samudro",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Gelora_Joko_Samudro_Stadium_%282016%29.jpg/960px-Gelora_Joko_Samudro_Stadium_%282016%29.jpg",
		options: [
			"Stadion Gelora Joko Samudro",
			"JRD Tata Sports Complex Stadium",
			"Guiyang Olympic Sports Centre Stadium",
			"Jeonju World Cup Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Fisht Olympic Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/2017_Confederation_Cup_-_MEXNZL_-_Fisht.jpg/960px-2017_Confederation_Cup_-_MEXNZL_-_Fisht.jpg",
		options: [
			"Estadio Ramón Sánchez Pizjuán",
			"Plovdiv Stadium",
			"Fisht Olympic Stadium",
			"Allianz Arena",
		],
		continent: "europe",
		tier: 3,
	},
	{
		name: "Hang Jebat Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Stadium_Hang_Jebat_015342.jpg/960px-Stadium_Hang_Jebat_015342.jpg",
		options: [
			"Hang Jebat Stadium",
			"Aleppo International Stadium",
			"Shenzhen Universiade Sports Centre Stadium",
			"Yadegar-e-Emam Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Stadium Negeri Pulau Pinang",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Batu_Kawan_Stadium%2CPenang.jpg/960px-Batu_Kawan_Stadium%2CPenang.jpg",
		options: [
			"Salt Lake Stadium",
			"Stadium Negeri Pulau Pinang",
			"Goyang Stadium",
			"Gwangju World Cup Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Sarawak Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Stadium_Sarawak.JPG/960px-Stadium_Sarawak.JPG",
		options: [
			"Al-Janoub Stadium",
			"Rungrado 1st of May Stadium",
			"Sarawak Stadium",
			"Guiyang Olympic Sports Centre Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Bogyoke Aung San Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Aungsan_Stadium.jpg/960px-Aungsan_Stadium.jpg",
		options: [
			"Jakarta International Stadium",
			"Bogyoke Aung San Stadium",
			"Workers' Stadium",
			"Huanglong Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Resonac Dome Ōita",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/%C5%8Cita_Stadium_2023-03.jpg/960px-%C5%8Cita_Stadium_2023-03.jpg",
		options: [
			"Sarawak Stadium",
			"Tianhe Stadium",
			"Pars Shiraz Stadium",
			"Resonac Dome Ōita",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Stadium Darul Makmur",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Stadium_Pahang.jpg/960px-Stadium_Pahang.jpg",
		options: [
			"Stadium Darul Makmur",
			"Hang Jebat Stadium",
			"Beijing National Stadium",
			"Rajamangala National Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Khalifa International Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Khalifa_International_Stadium.jpg/960px-Khalifa_International_Stadium.jpg",
		options: [
			"Perak Stadium",
			"Guiyang Olympic Sports Centre Stadium",
			"Beijing National Stadium",
			"Khalifa International Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "JRD Tata Sports Complex Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/J.R.D._Tata_Stadium.jpg/960px-J.R.D._Tata_Stadium.jpg",
		options: [
			"Stadium Tuanku Abdul Rahman",
			"Salt Lake Stadium",
			"Al-Janoub Stadium",
			"JRD Tata Sports Complex Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Bao'an Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Bao%27an_Stadium.jpg/960px-Bao%27an_Stadium.jpg",
		options: [
			"Pars Shiraz Stadium",
			"He Long Stadium",
			"Tianhe Stadium",
			"Bao'an Stadium",
		],
		continent: "asia",
		tier: 3,
	},
	{
		name: "Kunming Tuodong Sports Centre Stadium",
		imageUrl:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Kunming_07.JPG/960px-Kunming_07.JPG",
		options: [
			"King Abdullah Sports City Stadium",
			"Beijing National Stadium",
			"Jinnah Sports Stadium",
			"Kunming Tuodong Sports Centre Stadium",
		],
		continent: "asia",
		tier: 3,
	},
];
