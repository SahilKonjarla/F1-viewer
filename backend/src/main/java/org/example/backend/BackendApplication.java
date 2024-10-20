package org.example.backend;

import org.example.backend.api.model.*;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);

		/*String url1 = "https://api.openf1.org/v1/drivers?driver_number=1&session_key=9158";
		String url2 = "https://api.openf1.org/v1/intervals?session_key=9165&interval<0.005";
		String url3 = "https://api.openf1.org/v1/laps?session_key=9161&driver_number=63&lap_number=8";
		String url4 = "https://api.openf1.org/v1/position?session_key=9140&driver_number=1";
		String url5 = "https://api.openf1.org/v1/stints?session_key=9165&tyre_age_at_start=2";

		WebClient.Builder clientBuilder = WebClient.builder();
		List<Drivers> drivers = clientBuilder.build().get().uri(url1).retrieve().bodyToMono(new ParameterizedTypeReference<List<Drivers>>() {}).block();
		List<Interval> interval = clientBuilder.build().get().uri(url2).retrieve().bodyToMono(new ParameterizedTypeReference<List<Interval>>() {}).block();
		List<Laps> laps = clientBuilder.build().get().uri(url3).retrieve().bodyToMono(new ParameterizedTypeReference<List<Laps>>() {}).block();
		List<Position> position = clientBuilder.build().get().uri(url4).retrieve().bodyToMono(new ParameterizedTypeReference<List<Position>>() {}).block();
		List<Stints> stints = clientBuilder.build().get().uri(url5).retrieve().bodyToMono(new ParameterizedTypeReference<List<Stints>>() {}).block();

		InfoData infoData = new InfoData();
		infoData.setDriver(drivers.get(0).getName_acronym());
		infoData.setPosition(position.get(0).getPosition());
		infoData.setInterval(interval.get(0).getInterval());
		infoData.setS1(laps.get(0).getDuration_sector_1());
		infoData.setS2(laps.get(0).getDuration_sector_2());
		infoData.setS3(laps.get(0).getDuration_sector_3());
		infoData.setLaptime(laps.get(0).getLap_duration());
		infoData.setCompound(stints.get(0).getCompound());
		System.out.println("----------------------------");
		System.out.println(position.get(2));
		System.out.println("----------------------------");*/
	}

}
