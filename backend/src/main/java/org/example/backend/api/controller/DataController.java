package org.example.backend.api.controller;

import org.example.backend.api.model.Drivers;
import org.example.backend.api.model.InfoData;
import org.example.backend.service.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

@RestController
public class DataController {

    private final DataService dataService;

    @Autowired
    public DataController(DataService dataService) {
        this.dataService = dataService;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/v1/infodata")
    public Map<String, Object> getData(@RequestParam String trackName, @RequestParam List<Integer> driverNumbers) {
        List<InfoData> driverData = dataService.getDataForMultipleDrivers(driverNumbers, dataService.getCurrentLap());

        Map<String, Object> data = new HashMap<>();
        data.put("currentLap", dataService.getCurrentLap());
        data.put("totalLaps", dataService.getTotalLapsForTrack(trackName));
        data.put("driverData", driverData);

        return data;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("api/v1/drivers")
    public CompletableFuture<List<Drivers>> getDrivers() {
        return dataService.fetchDrivers();
    }
}
