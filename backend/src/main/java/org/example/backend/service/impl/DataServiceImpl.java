package org.example.backend.service.impl;

import org.example.backend.api.model.*;
import org.example.backend.service.DataService;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.time.Instant;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

/*
Things to fix:
Improve compilation time of Data and passing to the front end
*/
@Service
public class DataServiceImpl implements DataService {

    private static final WebClient.Builder clientBuilder = WebClient.builder();
    private int currentLap = 58;
    private static final Map<String, Integer> trackTotalLaps = new HashMap<>();

    static {
        trackTotalLaps.put("Monaco", 78);
        trackTotalLaps.put("Silverstone", 52);
        trackTotalLaps.put("Spa", 44);
        trackTotalLaps.put("Jeddah", 50);
        trackTotalLaps.put("Vegas", 50);
        trackTotalLaps.put("Baku", 51);
        trackTotalLaps.put("Monza", 53);
        trackTotalLaps.put("Suzuka", 53);
        trackTotalLaps.put("COTA", 56);
        trackTotalLaps.put("Shanghai", 56);
        trackTotalLaps.put("Bahrain", 57);
        trackTotalLaps.put("Miami", 57);
        trackTotalLaps.put("Qatar", 57);
        trackTotalLaps.put("Australia", 58);
        trackTotalLaps.put("AbuDhabi", 58);
        trackTotalLaps.put("Singapore", 62);
        trackTotalLaps.put("Imola", 63);
        trackTotalLaps.put("Spain", 66);
        trackTotalLaps.put("Canada", 70);
        trackTotalLaps.put("Hungary", 70);
        trackTotalLaps.put("Austria", 71);
        trackTotalLaps.put("Mexico", 71);
        trackTotalLaps.put("Brazil", 71);
        trackTotalLaps.put("Zandvoort", 72);
    }

    public int getTotalLapsForTrack(String track) {
        return trackTotalLaps.getOrDefault(track, 50);
    }

    public int getCurrentLap() {
        return currentLap;
    }

    public void updateLapNumber() {
        currentLap++;
    }

    @Async
    public CompletableFuture<List<Drivers>> fetchDrivers(Integer driverNumber) {
        String url = "https://api.openf1.org/v1/drivers?session_key=latest&driver_number=" + driverNumber;
        List<Drivers> drivers = clientBuilder.build().get().uri(url).retrieve()
                .bodyToMono(new ParameterizedTypeReference<List<Drivers>>() {}).block();
        return CompletableFuture.completedFuture(drivers);
    }

    @Async
    public CompletableFuture<List<Interval>> fetchIntervals(Integer driverNumber, String currentUtcTime) {
        String url = "https://api.openf1.org/v1/intervals?session_key=latest&driver_number=" + driverNumber + "&date<=" + currentUtcTime;
        List<Interval> intervals = clientBuilder.build().get().uri(url).retrieve()
                .bodyToMono(new ParameterizedTypeReference<List<Interval>>() {}).block();
        return CompletableFuture.completedFuture(intervals);
    }

    @Async
    public CompletableFuture<List<Laps>> fetchLaps(Integer driverNumber, Integer lapNumber) {
        Integer lapNum = lapNumber - 1;
        String url = "https://api.openf1.org/v1/laps?session_key=latest&driver_number=" + driverNumber + "&lap_number=" + lapNum;
        List<Laps> laps = clientBuilder.build().get().uri(url).retrieve()
                .bodyToMono(new ParameterizedTypeReference<List<Laps>>() {}).block();
        return CompletableFuture.completedFuture(laps);
    }

    @Async
    public CompletableFuture<List<Position>> fetchPositions(Integer driverNumber, String currentUtcTime) {
        String url = "https://api.openf1.org/v1/position?session_key=latest&driver_number=" + driverNumber + "&date<=" + currentUtcTime;
        List<Position> positions = clientBuilder.build().get().uri(url).retrieve()
                .bodyToMono(new ParameterizedTypeReference<List<Position>>() {}).block();
        return CompletableFuture.completedFuture(positions);
    }

    @Async
    public CompletableFuture<List<Stints>> fetchStints(Integer driverNumber) {
        String url = "https://api.openf1.org/v1/stints?session_key=latestdriver_number=" + driverNumber;
        List<Stints> stints = clientBuilder.build().get().uri(url).retrieve()
                .bodyToMono(new ParameterizedTypeReference<List<Stints>>() {}).block();
        return CompletableFuture.completedFuture(stints);
    }

    public CompletableFuture<InfoData> getDriverData(Integer driverNumber, Integer lapNumber) {
        String currentUtcTime = Instant.now().atOffset(ZoneOffset.UTC).format(DateTimeFormatter.ISO_INSTANT);

        // Use the @Async methods to fetch data concurrently
        CompletableFuture<List<Drivers>> driversFuture = fetchDrivers(driverNumber);
        CompletableFuture<List<Interval>> intervalsFuture = fetchIntervals(driverNumber, currentUtcTime);
        CompletableFuture<List<Laps>> lapsFuture = fetchLaps(driverNumber, lapNumber);
        CompletableFuture<List<Position>> positionsFuture = fetchPositions(driverNumber, currentUtcTime);
        CompletableFuture<List<Stints>> stintsFuture = fetchStints(driverNumber);

        // Combine results once all are completed
        return CompletableFuture.allOf(driversFuture, intervalsFuture, lapsFuture, positionsFuture, stintsFuture)
                .thenApply(v -> {
                    List<Drivers> drivers = driversFuture.join();
                    List<Interval> intervals = intervalsFuture.join();
                    List<Laps> laps = lapsFuture.join();
                    List<Position> positions = positionsFuture.join();
                    List<Stints> stints = stintsFuture.join();

                    // Map the data to InfoData
                    InfoData infoData = new InfoData();
                    infoData.setDriver(drivers != null && !drivers.isEmpty() ? drivers.get(drivers.size() - 1).getName_acronym() : "N/A");
                    infoData.setPosition(positions != null && !positions.isEmpty() ? positions.get(positions.size() - 1).getPosition() : 0);
                    infoData.setInterval(intervals != null && !intervals.isEmpty() ? intervals.get(intervals.size() - 1).getInterval() : 0);
                    infoData.setS1(laps != null && !laps.isEmpty() ? laps.get(laps.size() - 1).getDuration_sector_1() : 0);
                    infoData.setS2(laps != null && !laps.isEmpty() ? laps.get(laps.size() - 1).getDuration_sector_2() : 0);
                    infoData.setS3(laps != null && !laps.isEmpty() ? laps.get(laps.size() - 1).getDuration_sector_3() : 0);
                    infoData.setLaptime(laps != null && !laps.isEmpty() ? laps.get(laps.size() - 1).getLap_duration() : 0);
                    infoData.setCompound(stints != null && !stints.isEmpty() ? stints.get(stints.size() - 1).getCompound() : "N/A");

                    System.out.println(infoData);
                    return infoData;
                });
    }

    public List<InfoData> getDataForMultipleDrivers(List<Integer> driverNumbers, Integer lapNumber) {
        List<InfoData> allDriverData = new ArrayList<>();

        List<CompletableFuture<InfoData>> futures = new ArrayList<>();
        for (Integer driverNumber : driverNumbers) {
            futures.add(getDriverData(driverNumber, lapNumber));
        }

        // Wait for all futures to complete and gather the results
        CompletableFuture.allOf(futures.toArray(new CompletableFuture[0])).join();
        futures.forEach(future -> allDriverData.add(future.join()));

        return allDriverData;
    }
}
