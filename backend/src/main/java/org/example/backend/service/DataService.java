package org.example.backend.service;

import org.example.backend.api.model.*;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Service
public class DataService {


    public static List<InfoData> getData(List<Integer> driverNumbers) {
        List<InfoData> allDriverData = new ArrayList<>();
        WebClient.Builder clientBuilder = WebClient.builder();
        //String CurrentUtcTime = Instant.now().toString();

        for (Integer driverNumber : driverNumbers) {
            try {
                // Dynamically update URLs with driver number and lap number
                // Session key should stay as latest, for the latest session
                String url1 = "https://api.openf1.org/v1/drivers?driver_number=" + driverNumber + "&session_key=9140";
                String url2 = "https://api.openf1.org/v1/intervals?session_key=9140&driver_number=" + driverNumber + "&date<=2023-07-29T15:53:18.905000+00:00";
                String url3 = "https://api.openf1.org/v1/laps?session_key=9140&driver_number=" + driverNumber + "&lap_number=2";
                String url4 = "https://api.openf1.org/v1/position?session_key=9140&driver_number=" + driverNumber + "&date<=2023-07-29T16:05:30.428000+00:00";
                String url5 = "https://api.openf1.org/v1/stints?session_key=9140&driver_number=" + driverNumber;
                //String url5 = "https://api.openf1.org/v1/stints?session_key=9140&driver_number=" + driverNumber;

                // Retrieve Data from each API call
                List<Drivers> drivers = clientBuilder.build().get().uri(url1).retrieve().bodyToMono(new ParameterizedTypeReference<List<Drivers>>() {}).block();
                List<Interval> interval = clientBuilder.build().get().uri(url2).retrieve().bodyToMono(new ParameterizedTypeReference<List<Interval>>() {}).block();
                List<Laps> laps = clientBuilder.build().get().uri(url3).retrieve().bodyToMono(new ParameterizedTypeReference<List<Laps>>() {}).block();
                List<Position> position = clientBuilder.build().get().uri(url4).retrieve().bodyToMono(new ParameterizedTypeReference<List<Position>>() {}).block();
                List<Stints> stints = clientBuilder.build().get().uri(url5).retrieve().bodyToMono(new ParameterizedTypeReference<List<Stints>>() {}).block();

                // Map the retrieved data to InfoData object
                InfoData infoData = new InfoData();
                infoData.setDriver(drivers.get(0).getName_acronym());
                infoData.setPosition(position.get(0).getPosition());
                infoData.setInterval(interval.get(0).getInterval());
                infoData.setS1(laps.get(0).getDuration_sector_1());
                infoData.setS2(laps.get(0).getDuration_sector_2());
                infoData.setS3(laps.get(0).getDuration_sector_3());
                infoData.setLaptime(laps.get(0).getLap_duration());
                infoData.setCompound(stints.get(0).getCompound());

                // Add the InfoData object to the list
                allDriverData.add(infoData);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

        return allDriverData;
    }
}
