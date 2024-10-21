package org.example.backend.service;

import org.example.backend.api.model.*;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.time.Instant;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
public class DataService {

    private final WebClient client = WebClient.builder().build();

    public Mono<List<Drivers>> fetchDrivers(Integer driverNumber) {
        String url = "https://api.openf1.org/v1/drivers?driver_number=" + driverNumber + "&session_key=9140";
        return client.get().uri(url).retrieve().bodyToMono(new ParameterizedTypeReference<>() {});
    }

    public Mono<List<Interval>> fetchIntervals(Integer driverNumber, String currentUtcTime) {
        String url = "https://api.openf1.org/v1/intervals?session_key=9140&driver_number=" + driverNumber + "&date<=" + currentUtcTime;
        return client.get().uri(url).retrieve().bodyToMono(new ParameterizedTypeReference<>() {});
    }

    public Mono<List<Laps>> fetchLaps(Integer driverNumber) {
        String url = "https://api.openf1.org/v1/laps?session_key=9140&driver_number=" + driverNumber + "&lap_number=2";
        return client.get().uri(url).retrieve().bodyToMono(new ParameterizedTypeReference<>() {});
    }

    public Mono<List<Position>> fetchPositions(Integer driverNumber, String currentUtcTime) {
        String url = "https://api.openf1.org/v1/position?session_key=9140&driver_number=" + driverNumber + "&date<=" + currentUtcTime;
        return client.get().uri(url).retrieve().bodyToMono(new ParameterizedTypeReference<>() {});
    }

    public Mono<List<Stints>> fetchStints(Integer driverNumber) {
        String url = "https://api.openf1.org/v1/stints?session_key=9140&driver_number=" + driverNumber;
        return client.get().uri(url).retrieve().bodyToMono(new ParameterizedTypeReference<>() {});
    }
}
