package org.example.backend.service;

import org.example.backend.api.model.*;
import org.springframework.scheduling.annotation.Async;

import java.util.List;
import java.util.concurrent.CompletableFuture;

public interface DataService {
    int getTotalLapsForTrack(String track);

    int getCurrentLap();

    void updateLapNumber();

    @Async
    CompletableFuture<List<Drivers>> fetchDrivers(Integer driverNumber);

    @Async
    CompletableFuture<List<Interval>> fetchIntervals(Integer driverNumber, String currentUtcTime);

    @Async
    CompletableFuture<List<Laps>> fetchLaps(Integer driverNumber, Integer lapNumber);

    @Async
    CompletableFuture<List<Position>> fetchPositions(Integer driverNumber, String currentUtcTime);

    @Async
    CompletableFuture<List<Stints>> fetchStints(Integer driverNumber);

    CompletableFuture<InfoData> getDriverData(Integer driverNumber, Integer lapNumber);

    List<InfoData> getDataForMultipleDrivers(List<Integer> driverNumbers, Integer lapNumber);
}
