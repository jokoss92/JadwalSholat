import React from 'react';
import { View, Text, StatusBar, Image, Button } from 'react-native';

export default class Beranda extends React.Component {
	//Constructor
	constructor(props) {
		super(props);
	}

	static navigationOptions = {
		title: 'Beranda',
	};
    
	getSystemTime() {
		setInterval(() => {
			this.setState({
				currentTime: TimeFormatter.getIndonesiaTime()
			});
		}, 1000);
	}
	//Function fetchJadwalSholat();
	async fetchJadwalSholat() {
		const apiName = 'https://muslimsalat.com/jakarta.json?key=875fd63b30859af7631b7726e5e8216b';
		//Melakukan pemanggilan network
		let response = await fetch(apiName);
		//Mengambil response dari api
		let responseJson = await response.json();
		console.log('Beranda.js fetchJadwalSholat() : responseJson ->' + JSON.stringify(responseJson.items));

		this.setState({ jadwalSholat: responseJson.items[0] });
	}

	//Equivalent dengan onCreate()
	componentDidMount() {
		this.fetchJadwalSholat();
		this.getSystemTime();
	}

	//Render component
	render() {
		return (
			<View>
				<StatusBar backgroundColor={'#166cbf'} />
				<View
					style={{
						height: 150,
						width: '100%',
						backgroundColor: '#2b8be7'
					}}
				>
					<Image
						style={{
							width: '100%',
							height: 200
						}}
						source={require('../res/images/masjid.jpg')}
					/>
					<View
						style={{
							position: 'absolute',
							top: 56,
							marginLeft: 16
						}}
					>
						<Text
							style={{
								fontSize: 16,
								color: '#777',
								fontWeight: 'bold'
							}}
						>
							Hello, Joko
						</Text>
						<Text style={{ fontSize: 16, color: '#FFF' }}>Sabtu, 25 May 2019, 16:24</Text>
						<Text>Halaman Beranda</Text>
					</View>

                    {this.renderJadwalSholat(
                        "Subuh",
                        this.state.jadwalSholat.fajr
                    )}

                     {this.renderJadwalSholat(
                        "Dzuhur",
                        this.state.jadwalSholat.dhuhr
                    )}

                     {this.renderJadwalSholat(
                        "Asar",
                        this.state.jadwalSholat.asr
                    )}

                     {this.renderJadwalSholat(
                        "Magrib",
                        this.state.jadwalSholat.maghrib
                    )}

                     {this.renderJadwalSholat(
                        "Isya",
                        this.state.jadwalSholat.isha
                    )}

                    {/** Membuat tombol navigasi ke TentangKami */}
                    <Button 
                    onPress={()=>{this.props.navigation.navigate("TentangKami")}}
                    title={"Tentang Kami"}
                    />
				</View>
			</View>
		);
	}

	//Custom Component untuk list jadwal sholat
	renderJadwalSholat(nama, waktu) {
		return (
			<View style={{ marginTop: 16, marginRight: 16, marginLeft: 16 }}>
				<View style={{ flexDirection: 'row' }}>
					<Text style={{ flex: 1, fontSize: 16 }}>{nama}</Text>
					<Text>{waktu}</Text>
				</View>
				{/*Membuat Spacer*/}
				<View
					style={{
						marginTop: 16,
						borderBottomWidth: 0.75,
						borderBottomColor: '#c9ctc7',
						height: 1,
						width: '100%'
					}}
				/>
			</View>
		);
	}
}
