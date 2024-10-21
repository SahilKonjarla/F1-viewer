package org.example.backend.service;

import org.example.backend.api.model.InfoData;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.Instant;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class DataServiceAggregator {

    private final DataService dataService;

    public DataServiceAggregator(DataService dataService) {
        this.dataService = dataService;
    }

    public Mono<InfoData> getDriverData (Integer driverNumbers) {
        String currentUtcTime = Instant.now().atOffset(ZoneOffset.UTC).format(DateTimeFormatter.ISO_INSTANT);

        return Flux.fromIterable(
                dataService.fetchDrivers(driverNumbers),
                dataService.fetchIntervals(driverNumbers, currentUtcTime),
                dataService.fetchLaps(driverNumbers),
                dataService.fetchPositions(driverNumbers, currentUtcTime),
                dataService.fetchStints(driverNumbers),
                (drivers, intervals, laps, positions, stints) -> {
                    InfoData infoData = new InfoData();
                    infoData.setDriver(drivers != null && !drivers.isEmpty() ? drivers.get(drivers.size() - 1).getName_acronym() : "N/A");
                    infoData.setPosition(positions != null && !positions.isEmpty() ? positions.get(positions.size() - 1).getPosition() : 0);
                    infoData.setInterval(intervals != null && !intervals.isEmpty() ? intervals.get(intervals.size() - 1).getInterval() : 0);
                    infoData.setS1(laps != null && !laps.isEmpty() ? laps.get(laps.size() - 1).getDuration_sector_1() : 0);
                    infoData.setS2(laps != null && !laps.isEmpty() ? laps.get(laps.size() - 1).getDuration_sector_2() : 0);
                    infoData.setS3(laps != null && !laps.isEmpty() ? laps.get(laps.size() - 1).getDuration_sector_3() : 0);
                    infoData.setLaptime(laps != null && !laps.isEmpty() ? laps.get(laps.size() - 1).getLap_duration() : 0);
                    infoData.setCompound(stints != null && !stints.isEmpty() ? stints.get(stints.size() - 1).getCompound() : "N/A");

                }
        )
    }
}


