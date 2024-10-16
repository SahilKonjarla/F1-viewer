package org.example.backend.api.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
public class Laps {
    @Getter
    @Setter
    private float duration_sector_1;
    @Getter
    @Setter
    private float duration_sector_2;
    @Getter
    @Setter
    private float duration_sector_3;
    @Getter
    @Setter
    private float lap_duration;
    @Getter
    @Setter
    private int lap_number;

    @Override
    public String toString() {
        return "Laps{" +
                "duration_sector_1=" + duration_sector_1 +
                ", duration_sector_2=" + duration_sector_2 +
                ", duration_sector_3=" + duration_sector_3 +
                ", lap_duration=" + lap_duration +
                ", lap_number=" + lap_number +
                '}';
    }
}
