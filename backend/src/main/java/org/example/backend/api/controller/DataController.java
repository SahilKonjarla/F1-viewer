package org.example.backend.api.controller;

import org.example.backend.api.model.InfoData;
import org.example.backend.service.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DataController {

    private DataService dataService;

    @Autowired
    public DataController(DataService dataService) {
        this.dataService = dataService;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/api/v1/infodata")
    @Async
    public List<InfoData> getData(@RequestParam List<Integer> driverNumbers) {
        return DataService.getData(driverNumbers);
    }
}
