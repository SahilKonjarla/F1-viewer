package org.example.backend.service;

import org.example.backend.api.model.*;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.time.Instant;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
public class DataService {


    public static List<InfoData> getData(List<Integer> driverNumbers) {
        List<InfoData> allDriverData = new ArrayList<>();
        WebClient.Builder clientBuilder = WebClient.builder();
        String currentUtcTime = Instant.now().atOffset(ZoneOffset.UTC).format(DateTimeFormatter.ISO_INSTANT);


        for (Integer driverNumber : driverNumbers) {
            try {
                // Dynamically update URLs with driver number and lap number
                // Session key should stay as latest, for the latest session
                String url1 = "https://api.openf1.org/v1/drivers?driver_number=" + driverNumber + "&session_key=9140";
                String url2 = "https://api.openf1.org/v1/intervals?session_key=9140&driver_number=" + driverNumber + "&date<=" + currentUtcTime;
                String url3 = "https://api.openf1.org/v1/laps?session_key=9140&driver_number=" + driverNumber + "&lap_number=2";
                String url4 = "https://api.openf1.org/v1/position?session_key=9140&driver_number=" + driverNumber + "&date<=" + currentUtcTime;
                String url5 = "https://api.openf1.org/v1/stints?session_key=9140&driver_number=" + driverNumber;

                // Retrieve Data from each API call
                List<Drivers> drivers = clientBuilder.build().get().uri(url1).retrieve().bodyToMono(new ParameterizedTypeReference<List<Drivers>>() {}).block();
                List<Interval> interval = clientBuilder.build().get().uri(url2).retrieve().bodyToMono(new ParameterizedTypeReference<List<Interval>>() {}).block();
                List<Laps> laps = clientBuilder.build().get().uri(url3).retrieve().bodyToMono(new ParameterizedTypeReference<List<Laps>>() {}).block();
                List<Position> position = clientBuilder.build().get().uri(url4).retrieve().bodyToMono(new ParameterizedTypeReference<List<Position>>() {}).block();
                List<Stints> stints = clientBuilder.build().get().uri(url5).retrieve().bodyToMono(new ParameterizedTypeReference<List<Stints>>() {}).block();

                // Map the retrieved data to InfoData object
                // If there is missing data or the data doesn't exist I want to set a default value
                InfoData infoData = new InfoData();
                infoData.setDriver(drivers != null && !drivers.isEmpty() ? drivers.get(drivers.size() - 1).getName_acronym() : "N/A");
                infoData.setPosition(position != null && !position.isEmpty() ? position.get(position.size() - 1).getPosition() : 0);
                infoData.setInterval(interval != null && !interval.isEmpty() ? interval.get(interval.size() - 1).getInterval() : 0);
                infoData.setS1(laps != null && !laps.isEmpty() ? laps.get(laps.size() - 1).getDuration_sector_1() : 0);
                infoData.setS2(laps != null && !laps.isEmpty() ? laps.get(laps.size() - 1).getDuration_sector_2() : 0);
                infoData.setS3(laps != null && !laps.isEmpty() ? laps.get(laps.size() - 1).getDuration_sector_3() : 0);
                infoData.setLaptime(laps != null && !laps.isEmpty() ? laps.get(laps.size() - 1).getLap_duration() : 0);
                infoData.setCompound(stints != null && !stints.isEmpty() ? stints.get(stints.size() - 1).getCompound() : "N/A");

                // Add the InfoData object to the list
                allDriverData.add(infoData);
            } catch (Exception e) {
                e.printStackTrace();
                // Handle Exceptions
                InfoData infoData = new InfoData();
                infoData.setDriver("N/A");
                infoData.setPosition(0);
                infoData.setInterval(0);
                infoData.setS1(0);
                infoData.setS2(0);
                infoData.setS3(0);
                infoData.setLaptime(0);
                infoData.setCompound("N/A");
                allDriverData.add(infoData);
            }
        }

        return allDriverData;
    }
}
